import "./FAssetAmountInput.scss";

import mixins from "vuetify/src/util/mixins";

import FNumberInput from "../FNumberInput";
import { FAssetSelect, FAssetSelectField } from "../FAssetSelect";

import type { Asset } from "../FAssetSelect/types";
import type { PropType } from "vue";

export default mixins(FNumberInput).extend({
  name: "FAssetAmountInput",

  props: {
    assets: { type: Array as PropType<Asset[]>, default: () => [] },
    asset: { type: Object as PropType<Asset | null>, default: null },
    reverse: { type: Boolean, default: true },
    singleLine: { type: Boolean, default: true },
    selectable: { type: Boolean, default: true },
    fullfilled: { type: Boolean, default: false }
  },

  computed: {
    classes(): object {
      return {
        ...FNumberInput.options.computed.classes.call(this),
        "f-asset-amount-input": true,
        "f-asset-amount-input--fullfilled": this.fullfilled
      };
    }
  },

  methods: {
    genAssetSelect() {
      const h = this.$createElement;

      return h(FAssetSelect, {
        props: {
          assets: this.assets,
          asset: this.asset
        },
        attrs: {
          menuProps: { minWidth: 400, nudgeLeft: 16 }
        },
        on: { input: (e) => this.$emit("update:asset", e) },
        scopedSlots: {
          activator: ({ on }) =>
            h(FAssetSelectField, {
              props: {
                asset: this.asset,
                inline: true,
                showName: false,
                disabled: this.disabled,
                selectable: this.selectable
              },
              nativeOn: on
            }),
          assets: this.$scopedSlots.assets
        }
      });
    },
    genIconSlot() {
      const slot: any[] = [this.genAssetSelect()];

      return this.genSlot("append", "inner", slot);
    }
  }
});
