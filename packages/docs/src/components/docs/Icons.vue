<template>
  <div class="icons">
    <div v-for="(icon, index) in icons" :key="index" class="icon">
      <f-tooltip top>
        <template #activator="{ on }">
          <v-icon :size="size" @click="on.click"> {{ "$" + icon }} </v-icon>
        </template>

        <div>
          {{ icon }}
        </div>
      </f-tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import meta from "@foxone/icons/src/meta.json";

const icons = [...meta.outline, ...meta.fill].map((x) => x.componentName);
const icons3p = icons.filter((x) => x.includes("3P"));
const icons4p = icons.filter((x) => x.includes("4P"));
const icons8p = icons.filter((x) => x.includes("8P"));
const icons6p = icons.filter(
  (x) => !icons3p.includes(x) && !icons4p.includes(x) && !icons8p.includes(x)
);
const iconsColorful = meta.colorful.map((x) => x.componentName);

@Component({
  name: "Icons"
})
class Icons extends Vue {
  @Prop() type!: string;

  icons: any[] = [];

  size: any = 12;

  mounted() {
    if (this.type === "3p") {
      this.icons = icons3p;
      this.size = 12;
    } else if (this.type === "4p") {
      this.icons = icons4p;
      this.size = 16;
    } else if (this.type === "6p") {
      this.icons = icons6p;
      this.size = 24;
    } else if (this.type === "8p") {
      this.icons = icons8p;
      this.size = 32;
    } else if (this.type === "colorful") {
      this.icons = iconsColorful;
      this.size = 48;
    }
  }
}
export default Icons;
</script>

<style lang="scss" scoped>
.icons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  column-gap: 16px;
  row-gap: 16px;
}
</style>
