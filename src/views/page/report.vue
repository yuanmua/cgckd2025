<template>
    <section class="main-box sectionList">
      <div class="colTy col" v-for="section in report">
        <h3 :id="section.title">
          <img :src="section.image" style="height: 25px; margin-bottom: -6px">
          {{ section.title }}
        </h3>
        <div v-html="section.content" :style="section.height"></div>
      </div>

<!--        <div class="col2 col">-->
<!--            <div class="format">-->
<!--                <h3>-->
<!--                    <img src="../../../public/images/image/email.png" style="height: 30px; margin-bottom: -7px">-->
<!--                    &nbsp;相关报告-->
<!--                </h3>-->
<!--                &lt;!&ndash;<p><b>会议通知：</b><a title="CGCKD2023会议通知.pdf" download href="images/register/CGCKD2023会议通知.pdf">CGCKD2023会议通知.pdf（点击进行下载）</a></p>&ndash;&gt;-->
<!--                <p><b>1.讲习班报告：</b><a title="讲习班内容.pdf" download href="../../../public/images/register/jiangxibanneirong.pdf">讲习班内容.pdf（点击进行下载）</a></p>-->
<!--                <p><b>2.青年学者论坛: </b><a title="青年学者论坛.jpg" download href="../../../public/images/register/jxb4.jpg">青年学者论坛.jpg（点击进行下载）</a></p>-->
<!--                <p><b>3.特邀论文报告: </b><a title="特邀论文报告.jpg" download href="../../../public/images/register/jxb3.jpg">特邀论文报告.jpg（点击进行下载）</a></p>-->


<!--            </div>-->
<!--        </div>-->

<!--        <div class="col1 col">-->
<!--            <div class="format">-->
<!--                <h3>-->
<!--                    <img src="../../../public/images/image/list.png" style="height: 25px; margin-bottom: -4px">-->
<!--                    &nbsp;讲习班-->
<!--                </h3>-->

<!--                &lt;!&ndash;<p><img src="images/register/jxb2.jpg"></p>&ndash;&gt;-->

<!--            </div>-->

<!--            <div class="imag1">-->

<!--            </div>-->

<!--            <div class="imag4">-->

<!--            </div>-->

<!--            <div class="imag3">-->

<!--            </div>-->

<!--            <div class="imag5">-->

<!--            </div>-->


<!--        </div>-->
    </section>
</template>

<script setup>
import {onMounted, ref} from "vue";

const report = ref({});

import {getH5StaticJson} from "@/api/getJSON.js";
onMounted(() => {
  getH5StaticJson({}).then(json  => {
    report.value =json["data"]['report']

  });
})
</script>

<style scoped>

</style>
