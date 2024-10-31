<script setup>
import {ref} from "vue";
import data from '../../../public/data.json'
const scenicSpots = ref({});
scenicSpots.value = data['scenery'];

</script>

<template>
  <section class="main-box sectionList">

    <div v-for="category in scenicSpots" :key="category.title" class="col1 col">
      <div class="format1">
        <h3>
          <img :src="category.icon" :style="category.iconStyle" />
          &nbsp;{{ category.title }}
        </h3>
        <div v-for="spot in category.spots" :key="spot.name">
          <p><b>{{ spot.name }}：</b>{{ spot.description }}</p>
          <p><img :src="spot.image" :alt="spot.name" class="screen_s"/></p>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.format1 p {
  font-size: 16px;
  text-indent: 2em;
  line-height: 30px;
  text-align: initial;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 10px;
}
.screen_s{
  width: 80%;
}

@media screen and (max-width: 767px) {
  img {
    width: 100%;
  }
  .screen_s{
    width: 100%;
  }
  .format1 p {
    text-indent: 0;
  }
}


.format1
{
    margin: 10px;
}

</style>
