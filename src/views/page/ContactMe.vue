<script setup>
import {onMounted, ref} from "vue";

const ContactMe = ref({});

import {getH5StaticJson} from "@/api/getJSON.js";
onMounted(() => {
  getH5StaticJson({}).then(json  => {
    ContactMe.value =json["data"]['ContactMe']

  });
})
</script>
<template>
  <section class="main-box sectionList">
    <div class="colTy col" v-for="section in ContactMe">
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


<!--
<template>
    <section class="main-box">

        <div class="col1 col">
            <div class="format">
                <h3>
                    <img src="../../../public/images/image/email.png" style="height: 30px; margin-bottom: -7px">
                    &nbsp;联系我们
                </h3>
                <div class="connect">&lt;!&ndash; <b>邮箱：&nbsp;&nbsp;&nbsp;cgckd2023@163.com</b><br>&ndash;&gt;
                    <p class="title"><b>联系人及联系电话：</b></p>
&lt;!&ndash;                    <p>&ndash;&gt;
&lt;!&ndash;                        <span>陈&nbsp;玉&nbsp;明【会务咨询】</span>&ndash;&gt;
&lt;!&ndash;                        <span>&nbsp;13799762651 </span>&ndash;&gt;
&lt;!&ndash;                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cgckd2023@163.com</span>&ndash;&gt;
&lt;!&ndash;                    </p>&ndash;&gt;
&lt;!&ndash;                    <p>&ndash;&gt;
&lt;!&ndash;                        <span>李&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;伟【会务咨询】</span>&ndash;&gt;
&lt;!&ndash;                        <span>&nbsp;15060779313</span>&ndash;&gt;
&lt;!&ndash;                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cgckd2023@163.com</span>&ndash;&gt;
&lt;!&ndash;                    </p>&ndash;&gt;
&lt;!&ndash;                    <p>&ndash;&gt;
&lt;!&ndash;                        <span>通讯地址：</span>&ndash;&gt;
&lt;!&ndash;                        <span>福建省厦门市集美区理工路600号厦门理工学院计算机与信息工程学院</span>&ndash;&gt;
&lt;!&ndash;                    </p>&ndash;&gt;
&lt;!&ndash;                    <p>&ndash;&gt;
&lt;!&ndash;                        <span>邮编：</span>&ndash;&gt;
&lt;!&ndash;                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;361024</span>&ndash;&gt;
&lt;!&ndash;                    </p>&ndash;&gt;
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
</script>

<style scoped>

</style>
-->
