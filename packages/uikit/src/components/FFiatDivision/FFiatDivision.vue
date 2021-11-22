<template>
  <div class="f-fiat-division" v-html="html"></div>
</template>

<script lang="ts">
import "./FFiatDivision.scss";

import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class FiatDivision extends Vue {
  @Prop() parts!: {
    type: string;
    value: string;
  }[];

  get html() {
    if (typeof this.parts !== "object") {
      return this.parts;
    }

    return this.parts?.reduce((str, part) => {
      if (part.type === "currency") {
        return `${str}<span class="f-fiat-division__symbol">${part.value}</span>`;
      }

      return `${str}${part.value}`;
    }, "");
  }
}
export default FiatDivision;
</script>
