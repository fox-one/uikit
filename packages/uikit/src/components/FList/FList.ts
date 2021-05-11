import "./FList.scss";

import mixins from "vuetify/src/util/mixins";
import { VList } from "vuetify/lib";

export default mixins(VList).extend({
  name: "FList",

  computed: {
    classes(): object {
      return {
        ...VList.options.computed.classes.call(this),
        "f-list": true
      };
    }
  }
});
