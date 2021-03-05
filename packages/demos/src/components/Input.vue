<template>
  <div>
    <f-panel class="mb-4">
      <div class="mb-2 f-caption f-greyscale-3">default</div>
      <f-input v-model="value" :label="label"> </f-input>
      <div class="mt-2 mb-4 f-body-2">Your input is {{ value }}</div>

      <div class="mb-2 f-caption f-greyscale-3">with clear button and hint</div>
      <f-input
        v-model="value"
        hint="click the clear button to clear content"
        :label="label"
        :clearable="true"
        :clearIcon="mdiClose"
        persistent-hint
      >
      </f-input>
    </f-panel>

    <f-panel class="mb-4">
      <div class="mb-2 f-caption f-greyscale-3">with rules</div>
      <f-input
        v-model="username"
        label="Type username here"
        persistent-hint
        :hint="`hello ${username}`"
        :rules="[rules.moreThan5Letters]"
      >
      </f-input>
    </f-panel>

    <f-panel class="mb-4">
      <div class="mb-2 f-caption f-greyscale-3">with slots</div>
      <f-input
        v-model="price"
        label="Setup price"
        :hint="`Price is ${price} JPY`"
        persistent-hint
      >
        <template #prepend><div class="mr-2">Price</div></template>
        <template #appendOuter><div class="ml-2">JPY</div></template>
      </f-input>
      <!-- <div class="mt-2 mb-4 f-body-2">Price is {{ price }} JPY</div> -->

      <f-input v-model="value2" label="Heart pulse rate">
        <template #prependInner
          ><v-icon class="mr-2">{{ mdiHeartPulse }}</v-icon></template
        >
        <template #append
          ><div class="ml-2 f-caption" style="white-space: nowrap;">
            per min
          </div></template
        >
      </f-input>
      <div class="my-4 f-body-2">Heart pulse rate is {{ value2 }} per min.</div>
    </f-panel>
    <f-panel>
      <div class="mb-2 f-caption f-greyscale-3">textarea</div>
      <f-input
        v-model="longvalue"
        label="Leave a comment"
        :auto-grow="true"
        :row-height="3"
        textarea
      >
      </f-input>
    </f-panel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mdiClose, mdiHeartPulse } from "@mdi/js";

@Component
class Input extends Vue {
  label = "Type something here";
  value = "Are you ok";
  price = "0.1";
  value2 = "";
  longvalue = "";
  username = "";

  rules = {
    moreThan5Letters: (val) =>
      val.length > 5 || "username should more than 5 letters",
  };

  mdiHeartPulse = mdiHeartPulse;

  mdiClose = mdiClose;
}
export default Input;
</script>
