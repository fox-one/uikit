# @foxone/uikit

An UIkit based on Vue & Vuetify, mainly written in TypeScript, includes some useful components widely used in bots for Mixin Messenger.

## Demos

[Here](https://fox-one.github.io/uikit/) are components demos.

## Figma files

[Here](https://www.figma.com/file/LyLtRYpUtY5BjlndvCkmNB/UIKit-Components?node-id=0%3A1) is a Figma file.

## Projects Using UIkit

- [Reborn](https://www.firesbox.com)
- [4swap](https://4swap.org)

## Getting started

### 1. Using [nuxt_ts_template](https://github.com/fox-one/nuxt_ts_template/)

Latest [nuxt_ts_template](https://github.com/fox-one/nuxt_ts_template/) includes UIKit by default. Enjoy.

### 2. Add UIkit to existed projects

- You can create project with [vue-cli](https://cli.vuejs.org/zh/guide/) or [nuxt](https://nuxtjs.org/) .

- Add `typescipt` support .

  [how to enable typescript in vue-cli?](https://cn.vuejs.org/v2/guide/typescript.html)

  [how to enable typescript in nuxt?](https://nuxtjs.org/guide/typescript)

- Add uikit with `yarn add @foxone/uikit` or `npm install @foxone/uikit`.

- UIKit use @mdi/js as icon libary, Add MDIcons support `yarn add @mdi/js -D` or `npm install @mdi/js -dev`

- Use plugin with `Vue.use()`, add i18n support.

  ```typescript
  import Vue from "vue";
  import Vuetify from "vuetify/lib";
  import UIkit from "@foxone/uikit";

  import zh from "vuetify/es5/locale/zh-Hans";
  import en from "vuetify/es5/locale/en";
  import ja from "vuetify/es5/locale/ja";
  import enUIkit from "@foxone/uikit/src/locales/en";
  import jaUIkit from "@foxone/uikit/src/locales/ja";
  import zhUIkit from "@foxone/uikit/src/locales/zh-Hans";

  Vue.use(Vuetify);
  Vue.use(UIkit);

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
            ...zhUIkit,
          },
          en: {
            ...en,
            ...enUIkit,
          },
          ja: {
            ...ja,
            ...jaUIkit,
          },
        },
      },
    });
  }
  ```

## Attention

- UIKit require Typescript v3.7.0+, Please upgrade if your Typescript lib is not meet the version.
- BottomNav does not fit properly in iPhoneX ? Check if `viewport-fit=cover` has been added in your html. [(more about fit iPhonex)](https://aotu.io/notes/2017/11/27/iphonex/index.html)
