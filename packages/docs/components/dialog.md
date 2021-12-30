# FDialog

A dialog component that meets a specific style, in normal case you can use VDialog instead.

## Basic usage

```ts
import UIKit from "@foxone/uikit";

// add dialog plugin before use
// second param is Vuetify intance passed to new Vue options
// third param is global options for dialog
Vue.use(UIKit.Dialog, vuetify, { flat: true });
```

<example file="f-dialog/basic" />