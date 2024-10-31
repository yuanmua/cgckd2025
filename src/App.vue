<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {onMounted, ref} from "vue";
const local = ref({});
const BackgroundHeader = ref({});

import {getH5StaticJson} from "@/api/getJSON.js";
onMounted(() => {
  getH5StaticJson({}).then(json  => {
    local.value =json["data"]['local']
    BackgroundHeader.value=json["data"]['BackgroundHeader']

  });
})

</script>

<template>
  <div id="app">
      <!--顶部区域-->
    <div>
      <header id="headerwrap" :style="`background:url(${BackgroundHeader})  50% 74% / cover;`">
        <!--        <h1><strong>2021年中国粒计算与知识发现学术会议</strong></h1>-->
        <!--        <h2><strong>(第二十一届粗糙集与软计算学术会议、第十五届粒计算学术会议、第九届三支决策学术会议)</strong></h2>-->
        <!--        <h1><strong>CGCKD 2021</strong></h1>-->
        <!--        <h1  class="nanchang"><strong>2021年8月20日-22日 中国•南昌&nbsp;&nbsp;</strong></h1>-->

      </header>

      <!--       <a href="https://jiandaoyun.com/f/5bf80fbae0c627100053280e" target="_blank">-->
        <RouterLink to="/registerM" class="display-sponsorship" >
        <div class="order">
          <p>会</p>
          <p>议</p>
          <p>注</p>
          <p>册</p>
        </div>
        </RouterLink>


      <!--      <a href="https://jiandaoyun.com/f/5abd076e20489f232156695e " target="_blank"><div class="order">
                  <p>行</p>
                  <p>程</p>
                  <p>预</p>
                  <p>定</p>
           </div></a> -->
      <!--内容区域-->
      <div class="content">

        <!-- 导航区-->
        <div class="nav">
          <nav>
            <RouterLink to="/" href="index.html" class="index">首页</RouterLink>
            <RouterLink to="/theme" class="theme">会议主题</RouterLink>
            <RouterLink to="/organization" class="display-sponsorship">组织机构</RouterLink>
            <!--            <RouterLink to="schedule.html" class="schedule">会议动态</RouterLink>-->
              <RouterLink to="/PagerContributions" class="pager-contributions">论文征稿</RouterLink>
              <RouterLink to="/report" class="report">大会报告</RouterLink>
              <RouterLink to="/agenda" class="agenda">会议日程</RouterLink>
            <!--<a href="display-sponsorship.html" class="report">企业赞助</a>-->
            <!--<a href="vote.html" class="vote">投票</a>-->
            <!--            <RouterLink to="reception.html" class="reception">会议指南</RouterLink>-->
                        <RouterLink to="/registerM" class="register">会议注册</RouterLink>
                        <RouterLink to="/ContactMe" class="contact-us">联系我们</RouterLink>
            <RouterLink to="/scenery" class="food">{{local}}美景</RouterLink>
          </nav>
        </div>


      </div>
    </div>

    <router-view/>
  </div>

</template>


<style scoped>
/*#header {
  background: #53d1ec url(/img/门.png) 100% 48%/ cover;
  background-size: 100% 300%;

  height: 150px;
  overflow: hidden;
  text-align: left;
  padding: 50px 10px 10px 10px;
  box-shadow: 20px 20px 20px 20px rgba(0, 0, 0, 0.434);
  color: #c5df16;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.topnav {
  overflow: hidden;
  background-color: #078ca9;
  position: sticky;
  top: 0px;
  z-index: 99999999;
}

.topnav a {
  float: left;
  display: block;
  color: #ebfffa;
  text-align: center;
  padding: 20px 16px;
  text-decoration: none;
}

!* 链接 - 修改颜色 *!
 */
/*
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
nav {

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
*/

.router-link-exact-active {
  border-bottom:3px #09C solid;

}

</style>
