<script setup>
import {onMounted, ref} from "vue";

const agenda = ref({});

import {getH5StaticJson} from "@/api/getJSON.js";
onMounted(() => {
  getH5StaticJson({}).then(json  => {
    agenda.value =json["data"]['agenda']

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

<!--&lt;!&ndash;-->
<!--<template>-->
<!--    <section class="main-box">-->

<!--        &lt;!&ndash;<div class="col2 col">&ndash;&gt;-->
<!--        &lt;!&ndash;<div class="format">&ndash;&gt;-->
<!--        &lt;!&ndash;<h3>&ndash;&gt;-->
<!--        &lt;!&ndash;<img src="images/image/email.png" style="height: 30px; margin-bottom: -7px">&ndash;&gt;-->
<!--        &lt;!&ndash;&nbsp;相关报告&ndash;&gt;-->
<!--        &lt;!&ndash;</h3>&ndash;&gt;-->
<!--        &lt;!&ndash;&lt;!&ndash;<p><b>会议通知：</b><a title="CGCKD2023会议通知.pdf" download href="images/register/CGCKD2023会议通知.pdf">CGCKD2023会议通知.pdf（点击进行下载）</a></p>&ndash;&gt;&ndash;&gt;-->
<!--        &lt;!&ndash;<p><b>讲习班内容：</b><a title="讲习班内容.pdf" download href="images/register/讲习班内容.pdf">讲习班内容.pdf（点击进行下载）</a></p>&ndash;&gt;-->



<!--        &lt;!&ndash;</div>&ndash;&gt;-->
<!--        &lt;!&ndash;</div>&ndash;&gt;-->

<!--        <div class="col1 col">-->

<!--            <div class="imag2">-->
<!--                <h3>-->
<!--                    <img src="../../../public/images/image/email.png" style="height: 30px; margin-bottom: -7px">-->
<!--                    &nbsp;会议日程-->
<!--                </h3>-->

<!--            </div>-->

<!--        </div>-->
<!--    </section>-->

<!--</template>-->

<!--<script setup>-->

<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
<!--&ndash;&gt;-->
