/* eslint-disable  */

import ReconnectingWebSocket from "reconnecting-websocket";
import { v4 as uuidv4 } from "uuid";

const ungzip = require("pako/lib/inflate").ungzip;
const gzip = require("pako/lib/deflate").gzip;

function MixinClient(api, endpoint) {
  this.api = api;
  this.endpoint = endpoint;
}

MixinClient.prototype = {
  disconnect() {
    const self = this;

    self.ws.close();
  },
  connect(callback, clientId, scope, codeChallenge) {
    const self = this;

    self.handled = false;
    self.callback = callback;
    self.ws = new ReconnectingWebSocket(self.endpoint, "Mixin-OAuth-1", {
      maxReconnectionDelay: 5000,
      minReconnectionDelay: 1000,
      reconnectionDelayGrowFactor: 1.2,
      connectionTimeout: 8000,
      maxRetries: Infinity,
      debug: false
    });

    self.ws.addEventListener("message", function (event) {
      if (self.handled) {
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = function () {
        const msg = ungzip(new Uint8Array(this.result), { to: "string" });
        const authorization = JSON.parse(msg);
        if (self.callback(authorization)) {
          self.handled = true;
          return;
        }
        setTimeout(function () {
          self.sendRefreshCode(
            clientId,
            scope,
            codeChallenge,
            authorization.data
          );
        }, 1000);
      };
      fileReader.readAsArrayBuffer(event.data);
    });

    self.ws.addEventListener("open", function (_) {
      self.sendRefreshCode(clientId, scope, codeChallenge);
    });
  },

  sendRefreshCode(clientId, scope, codeChallenge, authorization) {
    const self = this;
    if (self.handled) {
      return;
    }

    self.send({
      id: uuidv4().toUpperCase(),
      action: "REFRESH_OAUTH_CODE",
      params: {
        client_id: clientId,
        scope,
        code_challenge: codeChallenge,
        authorization_id: authorization ? authorization.authorization_id : ""
      }
    });
  },

  send(msg) {
    try {
      this.ws.send(gzip(JSON.stringify(msg)));
    } catch (e) {
      if (e instanceof DOMException) {
      } else {
        console.error(e);
      }
    }
  }
};

export default MixinClient;
