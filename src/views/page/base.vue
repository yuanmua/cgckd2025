<script setup>
import {onMounted, ref} from "vue";

const agenda = ref({});

const props = defineProps({
  id: String
})

import {getH5StaticJson} from "@/api/getJSON.js";
onMounted(() => {
  getH5StaticJson({}).then(json  => {
    console.log(props.id)
    console.log(json)

    agenda.value =json["data"][props.id]
    console.log(agenda.value)

  });
})

</script>
<template>
  <section class="main-box sectionList">
    <div class="colTy col" v-for="section in agenda">
      <h3 :id="section.title">
        <img :src="section.image" style="height: 25px; margin-bottom: -6px">
        {{ section.title }}
      </h3>
      <div v-html="section.content" :style="section.height"></div>
    </div>
  </section>
</template>


<style scoped>

</style>