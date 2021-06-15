import type { PropsTypes } from "./FAppBar";
import type { Story, Meta } from "@storybook/vue/types-6-0";
import type { CreateElement } from "vue/types/umd";

import FAppBar from "./FAppBar";
import Usage from "../../examples/Usage.vue";
import { Vue, Component } from "vue-property-decorator";
import { VAvatar, VFlex, VImg, VSpacer, VIcon, VBtn } from "vuetify/lib";
import { mdiFaceProfile } from "@mdi/js";

export default {
  title: "Components/FAppBar",
  component: FAppBar,
  args: {
    show: true,
    back: true,
    title: "Title"
  }
} as Meta<PropsTypes>;

const genCustomContent = (h: CreateElement) => {
  return [
    h(VFlex, { staticClass: "d-flex align-center" }, [
      h(VAvatar, { props: { size: "32" } }, [
        h(VImg, { props: { src: require("@/assets/images/logo.svg") } })
      ]),
      h("div", "Custom content"),
      h(VSpacer),
      h(VBtn, { props: { icon: true, small: true, color: "primary" } }, [
        h(VIcon, mdiFaceProfile)
      ])
    ])
  ];
};

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
          return h(
            FAppBar,
            {
              props: { show: this.show, ...usageProps },
              attrs: { ...usageProps },
              on: this.$listeners
            },
            genCustomContent(h)
          );
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

const Template: Story<PropsTypes> = (args) => {
  return {
    components: { FAppBar },
    render(h: CreateElement) {
      return h(
        FAppBar,
        { props: { app: false, fixed: false, ...args } },
        genCustomContent(h)
      );
    }
  };
};

export const Basic = Template.bind({});

export const NoBack = Template.bind({});
NoBack.args = { back: false };

export const AlignCenter = Template.bind({});
AlignCenter.args = { align: "center" };

export const Immersive = Template.bind({});
Immersive.args = { mixinImmersive: true };

export const Colorful = Template.bind({});
Colorful.args = { color: "green" };
