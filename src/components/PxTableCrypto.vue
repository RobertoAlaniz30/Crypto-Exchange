<template>
  <table>
    <thead>
      <tr
        id="tr-head"
        class="bg-black-500 text-green-700 border-b-2 border-green-400"
      >
        <th></th>
        <th>
          <span> Ranking </span>
        </th>
        <th class="px-6">Nombre</th>
        <th class="px-6">Precio</th>
        <th class="px-6">Cap. de Mercado</th>
        <th class="px-6">Variacion 24 hrs.</th>
        <th>
          <input
            class="bg-black-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </th>
      </tr>
    </thead>
    <tbody></tbody>
    <tbody>
      <tr
        v-for="a in assetsFilter"
        :key="a.id"
        class="text-white-700 border-b border-gray-200"
      >
        <td>
          <img
            :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`"
            :alt="a.name"
          />
        </td>
        <td>{{ a.rank }}</td>
        <td>
          <router-link
            class="hover:underline text-green-600"
            :to="`/CoinDetail/${a.id}`"
          >
            {{ a.name }}</router-link
          >
        </td>
        <td>{{ price(a.priceUsd) }}</td>
        <td>{{ price(a.marketCapUsd) }}</td>
        <td
          :class="
            a.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ ChangePercent(a.changePercent24Hr) }}
        </td>
        <td><px-button @click="goCoin(a.id)" /></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import pxButton from "@/components/pxButton.vue";
import { dollarFilter, percentFilter } from "@/filters";

export default {
  name: "TableCrypto",
  components: { pxButton },
  data() {
    return {
      filter: "",
    };
  },
  props: {
    assets: Array,
  },
  methods: {
    goCoin(id) {
      this.$router.push({ name: "Coin-Detail", params: { id } });
    },
    price(value) {
      return dollarFilter(value);
    },
    marketCap(value) {
      return dollarFilter(value);
    },
    ChangePercent(value) {
      return percentFilter(value);
    },
  },
  computed: {
    assetsFilter() {
      if (!this.filter) return this.assets;

      return this.assets.filter((a) => {
        return a.id.toLowerCase().includes(this.filter.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;700&family=Montserrat:wght@600&family=Varela+Round&display=swap");
td {
  color: rgb(165, 153, 84);
  font-family: "Montserrat", sans-serif;
}
tr:hover {
  background-color: rgb(41, 40, 40);
}
input {
  background-color: black;
}

@media screen and (max-width: 1031px) {
  table {
    width: 100%;
  }
  thead {
    display: none;
  }
  tr:nth-of-type(2n) {
    background-color: inherit;
  }
  tr th:first-child {
    font-weight: bold;
    font-size: 1.3em;
  }
  tbody {
    text-align: center;
    margin-left: 50%;
    width: 100%;
  }
  tbody td {
    display: block;
    text-align: center;
  }
  tbody td:before {
    content: attr(data-th);
    display: block;
    text-align: center;
  }
}
</style>
