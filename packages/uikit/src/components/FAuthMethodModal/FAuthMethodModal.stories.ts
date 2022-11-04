import { Meta, StoryFn } from "@storybook/vue";
import { VBtn } from "vuetify/lib";
import FAuthMethodModal from "./FAuthMethodModal.vue";

export default {
  title: "FAuthMethodModal",
  component: { FAuthMethodModal }
} as Meta<typeof FAuthMethodModal>;

const Template: StoryFn = (args, { argTypes }) => ({
  components: {
    VBtn,
    FAuthMethodModal
  },
  props: Object.keys(argTypes),
  template: `
    <FAuthMethodModal v-bind="$props">
      <template #activator="{ on }">
        <VBtn v-on="on">Open Auth</VBtn>
      </template>
    </FAuthMethodModal>
  `
});

export const Default = Template.bind({});
Default.args = {};

export const AllWallets = Template.bind({});
AllWallets.args = {
  wallets: ["metamask", "mixin", "fennec", "walletconnect", "onekey"]
};
