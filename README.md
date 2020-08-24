#  @foxone/uikit

基于 vue、vuetify、typecript 的 MixinNetwork 内部常用的组件的封装。



## Demos

[Here](http://foxone-uikit-demos.s3-website-us-east-1.amazonaws.com/) is components demos.

## Get start

* You can create project with [vue-cli](https://cli.vuejs.org/zh/guide/)  or [nuxt](https://nuxtjs.org/) .

* Add `typescipt ` support .

  [how to enable typescript in vue-cli?](https://cn.vuejs.org/v2/guide/typescript.html)

  [how to enable typescript in nuxt?](https://nuxtjs.org/guide/typescript)

* Add uikit with `yarn add @foxone/uikit`  or `npm install @foxone/uikit`.

* Use plugin with `Vue.use()`, add i18n support.

  ```typescript
  import Vue from "vue";
  import Vuetify from "vuetify/lib";
  import foxoneUI from "@foxone/uikit";
  
  import zh from "vuetify/es5/locale/zh-Hans";
  import en from "vuetify/es5/locale/en";
  import ja from "vuetify/es5/locale/ja";
  import en_uikit from "@foxone/uikit/src/locales/en";
  import ja_uikit from "@foxone/uikit/src/locales/ja";
  import zh_uikit from "@foxone/uikit/src/locales/zh-Hans";
  
  Vue.use(Vuetify);
  Vue.use(foxoneUI);
  
  export default function(store) {
    const isDark = store.state.app?.dark || false;
  
    return new Vuetify({
      icons: {},
      theme: {
        dark: isDark,
      },
      lang: {
        locales: {
          zh: {
            ...zh,
            ...zh_uikit,
          },
          en: {
            ...en,
            ...en_uikit,
          },
          ja: {
            ...ja,
            ...ja_uikit,
          },
        },
      },
    });
  }
  
  
  ```

