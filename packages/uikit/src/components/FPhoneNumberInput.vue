<template>
  <f-selector :filter.sync="filter" :show.sync="sheet" scrollable>
    <template #activator="{ on }">
      <v-text-field
        v-model.trim="bindPhone"
        autofocus
        aria-autocomplete="false"
        type="number"
        :placeholder="$t('common.phone-number')"
      >
        <template v-slot:prepend-inner>
          <div class="px-4 code-selector" v-on="on">
            {{ `+${bindCode}` }}
          </div>
        </template>
      </v-text-field>
    </template>
    <v-card height="600" class="overflow-y-auto">
      <v-list>
        <v-list-item-group
          v-model="bindCode"
          active-class="accent white--text"
          mandatory
        >
          <v-list-item
            v-for="(c, i) in countryItems"
            :key="i"
            :value="c.dialCode + ''"
            @click="handleCountryItemClick"
          >
            <v-list-item-title>
              {{ c.name }}
              <span class="font-weight-bold ml-2"> +{{ c.dialCode }} </span>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </f-selector>
</template>

<script lang="ts">
import { Component, Vue, PropSync } from "vue-property-decorator";
import countries from "../assets/country-code.json";

@Component
class FPhoneNumberInput extends Vue {
  @PropSync("code") bindCode!: string;

  @PropSync("phone") bindPhone!: string;

  sheet = false;

  filter = "";

  get countryItems() {
    return Object.keys(countries)
      .map((k) => countries[k])
      .filter((country) => {
        const name = String(country.name).toLowerCase();
        const code = String(country.dialCode).toLowerCase();
        return name.startsWith(this.filter) || code.startsWith(this.filter);
      });
  }

  handleCountryItemClick() {
    this.sheet = false;
  }
}
export default FPhoneNumberInput;
</script>
<style lang="scss" scoped>
.code-selector {
  height: 24px;
  display: flex;
  align-items: center;
}
</style>
