<template>
  <div>
    <ring-loader :loading="isLoading" :color="'#68d391'" />
    <PxTableCrypto v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxTableCrypto from "@/components/PxTableCrypto.vue";
import RingLoader from "vue-spinner/src/RingLoader.vue";

export default {
  name: "Home",
  components: { PxTableCrypto, RingLoader },
  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },
  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
