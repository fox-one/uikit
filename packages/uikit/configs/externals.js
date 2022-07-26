module.exports = [
  {
    vue: {
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
      root: "Vue"
    },
    axios: "axios",
    "@foxone/icons": "@foxone/icons",
    "@foxone/utils/number": "@foxone/utils/number",
    "@foxone/utils/mixin": "@foxone/utils/mixin",
    "@foxone/utils/base64": "@foxone/utils/base64",
    "vuetify/lib": "vuetify/lib",
    "vuetify/lib/util/helpers": "vuetify/lib/util/helpers",
    "vuetify/lib/mixins/roundable": "vuetify/lib/mixins/roundable",
    "bignumber.js": "bignumber.js",
    "vue-property-decorator": "vue-property-decorator",
    qrcode: "qrcode"
  },
  function ({ request }, callback) {
    if (/^vuetify\/src/.test(request)) {
      return callback(null, `${request.replace("vuetify/src", "vuetify/lib")}`);
    }

    callback();
  }
];
