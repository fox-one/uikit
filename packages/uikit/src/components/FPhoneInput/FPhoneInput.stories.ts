import { storiesOf } from "@storybook/vue";
import FPhoneInput from "./FPhoneInput";

const stories = storiesOf("FPhoneInput", module);

stories.add("Default", () => ({
  components: { FPhoneInput },
  data: () => ({
    phone: "",
    code: "86"
  }),
  template: "<f-phone-input v-model='phone' :code.sync='code'> </f-phone-input>"
}));
