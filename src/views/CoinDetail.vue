<template>
  <div class="flex-col">
    <template v-if="asset.id">
      <div class="flex flex-col sm:flex-row justify-around items-center">
        <div class="flex flex-col items-center">
          <ring-loader :loading="isLoading" :color="'#68d391'" />
          <img
            :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
            :alt="asset.name"
            class="w-20 h-20 mr-5"
          />
          <h1 class="text-5xl">
            {{ asset.name }}
            <small class="sm:mr-2 text-gray-500">{{ asset.symbol }}</small>
          </h1>
        </div>

        <div class="my-10 flex flex-col">
          <ul>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Ranking</b>
              <span>{{ asset.rank }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio actual</b>
              <span></span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más bajo</b>
              <span>${{ min }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio más alto</b>
              <span>${{ max }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Precio Promedio</b>
              <span>${{ avg }}</span>
            </li>
            <li class="flex justify-between">
              <b class="text-gray-600 mr-10 uppercase">Variación 24hs</b>
              <span></span>
            </li>
          </ul>
        </div>
      </div>
      <line-chart
        class="my-10"
        :min="min"
        :max="max"
        :color="['orange']"
        :data="history.map((h) => [h.date, parseFloat(h.priceUsd).toFixed(10)])"
      ></line-chart>
      <b class="text-gray-600 mr-10 uppercase">By. Rablin </b>
    </template>
  </div>
</template>

<script>
import api from "@/api.js";
import RingLoader from "vue-spinner/src/RingLoader.vue";

export default {
  name: "CoinDetail",
  components: { RingLoader },
  data() {
    return {
      asset: {},
      history: [],
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    this.getCoin();
  },
  computed: {
    min() {
      return Math.min(
        ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(10))
      );
    },
    max() {
      return Math.max(
        ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(10))
      );
    },

    avg() {
      return Math.abs(
        ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(10))
      );
    },
  },
  methods: {
    getCoin() {
      const id = this.$route.params.id;
      Promise.all([api.getAsset(id), api.getAssetHistory(id)])
        .then(([asset, history]) => {
          this.asset = asset;
          this.history = history;
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>

<style scoped>
td {
  padding: 10px;
  text-align: center;
}
span {
  color: white;
}
</style>
