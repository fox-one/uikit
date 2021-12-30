<template>
  <f-app-bottom-nav :value="value" :items="items" color="primary" />
</template>
<script>
export default {
  data() {
    return {
      value: "pool",
      items: [
        { text: "Home", icon: "$FIconHomeFill", value: "home" },
        { text: "Pool", icon: "$FIconPoolAFill", value: "pool" },
        { text: "Global", icon: "$FIconGlobalFill", value: "global" }
      ]
    };
  }
};
</script>
