<template>
  <f-bottom-sheet v-model="dialog" :title="meta.title" v-bind="$attrs">
    <template #activator="{ on }">
      <slot name="activator" :on="on">
        <div class="f-country-code-select__field" v-on="on">
          <span class="mr-1">{{ "+" + code }}</span>
          <v-icon size="16">$expand</v-icon>
        </div>
      </slot>
    </template>

    <f-bottom-sheet-subtitle>
      <f-search-input v-model="filter" hide-details clearable />
    </f-bottom-sheet-subtitle>

    <slot
      name="counties"
      :code="code"
      :countries="filterCounties"
      :on="{ select: handleSelect }"
    >
      <v-list class="f-country-code-select__countries">
        <v-list-item-group :value="code" active-class="primary--text">
          <template v-for="country in filterCounties">
            <v-lazy :key="country.code + ' ' + country.name" min-height="48">
              <v-list-item @click="handleSelect(country.code)">
                <v-list-item-title>
                  <span>{{ country.code }}</span>
                  <span>{{ country.name }}</span>
                </v-list-item-title>
              </v-list-item>
            </v-lazy>
          </template>
        </v-list-item-group>
      </v-list>
    </slot>
  </f-bottom-sheet>
</template>

<script lang="ts">
import { Component, Vue, Model, Prop } from "vue-property-decorator";
import {
  VList,
  VIcon,
  VListItem,
  VListItemTitle,
  VListItemGroup
} from "vuetify/lib";
import { FBottomSheet, FBottomSheetSubtitle } from "../FBottomSheet";
import { $t } from "../../utils/helper";
import countryCodes from "../../assets/country-code.json";

const countries = Object.keys(countryCodes).map((k) => ({
  name: countryCodes[k].name,
  code: String(countryCodes[k].dialCode) + ""
}));

@Component({
  name: "FCountryCodeSelect",
  components: {
    VList,
    VIcon,
    VListItem,
    VListItemTitle,
    VListItemGroup,
    FBottomSheet,
    FBottomSheetSubtitle
  }
})
class FCountryCodeSelect extends Vue {
  @Model("input") code!: string;

  @Prop({ type: Boolean, default: true }) closeOnSelect!: boolean;

  dialog = false;

  filter = "";

  countries = countries;

  get meta() {
    return {
      title: $t(this, "select_phone_code"),
      searchLabel: $t(this, "search")
    };
  }

  get filterCounties() {
    return countries.filter((country) => {
      const name = String(country.name).toLowerCase();
      const code = String(country.code).toLowerCase();

      return name.startsWith(this.filter) || code.startsWith(this.filter);
    });
  }

  handleSelect(code: string) {
    if (this.code !== code) {
      this.$emit("input", code);

      if (this.closeOnSelect) {
        this.dialog = false;
      }
    }
  }
}
export default FCountryCodeSelect;
</script>
