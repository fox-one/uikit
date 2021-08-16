(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["examples-source"],{"6bfa":function(n,i,e){"use strict";e.r(i),i["default"]='<template>\n  <div class="grid">\n    <div>\n      <div class="item">\n        <div class="cell">container</div>\n        <div class="pr-2 greyscale_1"></div>\n        <div class="cell">container</div>\n      </div>\n      <div class="label">2P 小</div>\n    </div>\n\n    <div>\n      <div class="item">\n        <div class="cell">container</div>\n        <div class="pr-4 greyscale_1"></div>\n        <div class="cell">container</div>\n      </div>\n      <div class="label">4P 中</div>\n    </div>\n\n    <div>\n      <div class="item">\n        <div class="cell">container</div>\n        <div class="pr-6 greyscale_1"></div>\n        <div class="cell">container</div>\n      </div>\n\n      <div class="label">6P 大</div>\n    </div>\n  </div>\n</template>\n\n<style lang="scss" scoped>\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 16px;\n  row-gap: 16px;\n\n  .item {\n    display: flex;\n  }\n\n  .cell {\n    flex: 1;\n    height: 136px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px dashed var(--v-greyscale_1-base);\n    border-radius: 8px;\n  }\n\n  .label {\n    margin-top: 20px;\n  }\n}\n</style>\n'},"7bb2":function(n,i,e){"use strict";e.r(i),i["default"]='<template>\n  <div class="grid">\n    <div class="item">\n      <div class="cell">container</div>\n      <div class="pt-2 greyscale_1"></div>\n      <div class="cell">container</div>\n      <div class="label">2P 小</div>\n    </div>\n    <div class="item">\n      <div class="cell">container</div>\n      <div class="pt-4 greyscale_1"></div>\n      <div class="cell">container</div>\n      <div class="label">4P 中</div>\n    </div>\n    <div class="item">\n      <div class="cell">container</div>\n      <div class="pt-6 greyscale_1"></div>\n      <div class="cell">container</div>\n      <div class="label">6P 大</div>\n    </div>\n    <div class="item">\n      <div class="cell">container</div>\n      <div class="pt-8 greyscale_1"></div>\n      <div class="cell">container</div>\n      <div class="label">8P 超大</div>\n    </div>\n  </div>\n</template>\n\n<style lang="scss" scoped>\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  column-gap: 16px;\n  row-gap: 16px;\n\n  .cell {\n    height: 64px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px dashed var(--v-greyscale_1-base);\n    border-radius: 8px;\n  }\n\n  .label {\n    margin-top: 20px;\n  }\n}\n</style>\n'},ff89:function(n,i,e){"use strict";e.r(i),i["default"]='<template>\n  <div class="grid">\n    <div class="item">\n      <div class="label">高对比</div>\n\n      <f-divider size="8" class="divider" />\n    </div>\n    <div class="item">\n      <div class="label">中对比</div>\n\n      <f-divider class="divider" />\n    </div>\n    <div class="item">\n      <div class="label">低对比</div>\n\n      <f-divider opacity="0.05" class="divider" />\n    </div>\n  </div>\n</template>\n\n<script lang="ts">\nimport { Component, Vue } from "vue-property-decorator";\n\n@Component\nclass Gap extends Vue {}\nexport default Gap;\n<\/script>\n\n<style lang="scss" scoped>\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  column-gap: 16px;\n\n  .item {\n    height: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n\n    .label {\n      margin-bottom: 40px;\n    }\n\n    .divider {\n      width: 100%;\n    }\n  }\n}\n</style>\n'}}]);
//# sourceMappingURL=examples-source.3f604eff.js.map