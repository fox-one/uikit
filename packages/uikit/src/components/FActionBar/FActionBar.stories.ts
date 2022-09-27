import { storiesOf } from "@storybook/vue";
import FActionBar from "./FActionBar";

const stories = storiesOf("FActionBar", module);

stories.add("Default", () => ({
  components: { FActionBar },
  template: "<f-action-bar></f-action-bar>"
}));
