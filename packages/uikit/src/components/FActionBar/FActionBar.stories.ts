import type { Story, Meta } from "@storybook/vue/types-6-0";
import type { CreateElement } from "vue/types/umd";
import type { PropsTypes } from "./FActionBar";

import FActionBar from "./FActionBar";
import { mdiArrowDown } from "@mdi/js";
import { VAvatar, VFlex, VImg, VSpacer } from "vuetify/lib";
import FButton from "../FButton";

const actions = [
  {
    text: "Send",
    icon: mdiArrowDown,
    size: "26",
    color: "#F50000"
  },
  {
    text: "Recieve",
    icon: mdiArrowDown,
    size: "26",
    color: "#009621"
  },
  {
    text: "Exchange",
    icon: mdiArrowDown,
    size: "26"
  },
  {
    text: "Sell",
    icon: mdiArrowDown,
    size: "26"
  },
  {
    text: "Sell",
    icon: mdiArrowDown,
    size: "26"
  }
];

export default {
  title: "Components/FActionBar",
  component: FActionBar
} as Meta<PropsTypes>;

const genCustomContent = (h: CreateElement) => {
  return [
    h(VFlex, { staticClass: "d-flex align-center" }, [
      h(VAvatar, { props: { size: "32" } }, [
        h(VImg, { props: { src: require("@/assets/images/logo.svg") } })
      ]),
      h("div", { staticClass: "ml-4" }, [
        h("div", { staticClass: "f-body-1" }, ["$100,000.99"]),
        h("div", { staticClass: "f-caption f-greyscale-3" }, ["Bal."])
      ]),
      h(VSpacer),
      h(FButton, { props: { type: "primary" } }, ["buy"])
    ])
  ];
};

const Template: Story<PropsTypes> = (args) => {
  return {
    components: { FActionBar },
    render(h: CreateElement) {
      return h(FActionBar, { props: args }, genCustomContent(h));
    }
  };
};

export const Normal = Template.bind({});
Normal.args = { actions: actions.slice(0, 3) };

export const More = Template.bind({});
More.args = { actions: actions.slice(0, 4) };

export const Fixed = Template.bind({});
Fixed.args = { actions: actions.slice(0, 3), fixed: true };

export const CustomContent = Template.bind({});
CustomContent.args = { actions: actions.slice(0, 3), customContent: true };
