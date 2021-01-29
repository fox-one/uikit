import "./FList.scss";
import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement, VNode } from "vue/types/umd";
import { VList } from "vuetify/lib";

@Component
class FList extends Vue {
  render(h: CreateElement): VNode {
    return h(
      VList,
      {
        staticClass: "f-list",
        attrs: this.$attrs,
        props: {
          ...this.$attrs,
        },
      },
      [this.$slots.default],
    );
  }
}

export default FList;
export { FList };
