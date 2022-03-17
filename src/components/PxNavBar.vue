<template>
  <header>
    <nav>
      <div>
        <img src="https://cdn-icons-png.flaticon.com/512/2329/2329800.png" />
        <p class="title">
          <router-link to="/">CRYPTO-EXCHANGE</router-link>
        </p>
      </div>
      <ul class="first-ul">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>

        <li class="rank-ul">
          Ranking
          <ul class="second-ul">
            <li v-for="a in topAssets" :key="a.id">
              <router-link :to="`/CoinDetail/${a.id}`">{{ a.id }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/PxIcon.vue";
export default {
  name: "PxNavBar",
  componet: { PxIcon },
  props: {
    topAssets: Array,
  },
};
</script>

<style scoped>
nav {
  height: 100%;
  background-color: goldenrod;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}
div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

img {
  width: 80px;
  height: 80px;
  padding: 8px;
}
p {
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-weight: 200;
}

.first-ul {
  display: flex;
  align-items: center;
}
.first-ul li {
  text-decoration: none;
  padding: 1.5vw;
  font-size: 24px;
}
.first-ul li:hover {
  background-color: black;
  color: white;
}

.second-ul {
  display: none;
  position: absolute;
  margin-top: 1.5vw;
}
.second-ul li {
  transform: translateX(-24px);
  font-size: 20px;
  display: block;
  color: white;
  background-color: goldenrod;
  text-align: center;
}
.second-ul li:hover {
  background-color: black;
  color: white;
}
.rank-ul:hover > .second-ul {
  display: block;
}

/* 
.icon-menu {
  width: 60px;
  height: 60px;
  display: none;
} */

@media screen and (max-width: 1000px) {
  header {
    width: 100%;
  }
  nav {
    width: 100%;
  }
  .title {
    display: none;
  }

  .icon-menu {
    display: block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .second-ul li {
    transform: translateX(-8px);
  }
}
</style>
