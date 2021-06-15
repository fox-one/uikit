import FAppBar from "./FAppBar";
import Usage from "../../examples/Usage.vue";
import { Vue, Component } from "vue-property-decorator";

import type { PropsTypes } from "./FAppBar";
import type { Story, Meta } from "@storybook/vue/types-6-0";
import type { CreateElement } from "vue/types/umd";

export default {
  title: "Components/FAppBar",
  component: FAppBar
} as Meta<PropsTypes>;

@Component
class FAppBarUsage extends Vue {
  show = true;

  defaults = {
    app: false,
    fixed: false,
    dense: false,
    back: true,
    customContent: false,
    mixinImmersive: false,
    title: "Title",
    align: "center",
    height: 48
  };

  options = {
    booleans: ["app", "dense", "back", "customContent", "mixinImmersive"],
    selects: {
      align: ["center", "left"]
    }
  };

  render(h: CreateElement) {
    const { defaults, options } = this;

    return h(Usage, {
      props: { defaults, options },
      scopedSlots: {
        demo: ({ usageProps }) => {
          return h(FAppBar, {
            props: { show: this.show, ...usageProps },
            attrs: { ...usageProps },
            on: this.$listeners
          });
        }
      }
    });
  }
}

export const Playground: Story = () => {
  return {
    render(h: CreateElement) {
      return h(FAppBarUsage);
    }
  };
};
