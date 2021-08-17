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

const icons3p = [
  "FIconUpRightFill",
  "FIconAddFill",
  "FIconMaxFill",
  "FIconConnectFill",
  "FIconHelpFill",
  "FIconInformationFill"
];

const icons4p = [];

const icons6p = [
  "FIconHomeFill",
  "FIconGlobalFill",
  "FIconAuctionFill",
  "FIconPersonFill",
  "FIconBankFill",
  "FIconSwapFill",
  "FIconPoolFill",
  "FIconSupplyFill",
  "FIconBorrowFill",
  "FIconRepayFill",
  "FIconWithdrawFill",
  "FIconPledgeFill",
  "FIconUnpledgeFill",
  "FIconMarketFill",
  "FIconWarningFill"
];

const icons8p = [
  "FIconChevronLeft",
  "FIconChevronRight",
  "FIconChevronUp",
  "FIconChevronDown",
  "FIconCheck",
  "FIconClose",
  "FIconConvertDirection",
  "FIconArrowDown",
  "FIconAdd",
  "FIconUpRight",
  "FIconMore",
  "FIconSetting",
  "FIconMax",
  "FIconRadioOff",
  "FIconRadioOn"
];

const iconsColorful = [
  "FIconLakeBrand",
  "FIconLakeLogo",
  "FIconLeafBrand",
  "FIconLeafLogo",
  "FIconRingsBrand",
  "FIconRingsLogo"
];

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
    } else {
      const icons = this.$vuetify.icons.values as any;

      this.icons = Object.keys(icons).filter((x) => {
        return (
          x.startsWith("FIcon") &&
          ![
            ...icons3p,
            ...icons4p,
            ...icons6p,
            ...icons8p,
            ...iconsColorful
          ].includes(x)
        );
      });
      this.size = 32;
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
