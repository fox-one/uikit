module.exports = [
  {
    vue: {
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
      root: "Vue"
    },
    "@foxone/icons": "@foxone/icons",
    "@foxone/utils/number": "@foxone/utils/number",
    "vuetify/lib": "vuetify/lib",
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
