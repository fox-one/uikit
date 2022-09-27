import { storiesOf } from "@storybook/vue";
import FButton from "./FButton";

const stories = storiesOf("FButton", module);

stories.add("Default", () => ({
  components: { FButton },
  template: "<f-button color='primary'>Default</f-button>"
}));
