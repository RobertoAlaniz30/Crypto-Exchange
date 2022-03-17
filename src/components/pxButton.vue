<template>
  <button
    @click="BuClick"
    class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
  >
    Detalle
  </button>
</template>
<script>
export default {
  name: "Button",
  methods: {
    BuClick() {
      this.$emit("click");
    },
  },
};
</script>
