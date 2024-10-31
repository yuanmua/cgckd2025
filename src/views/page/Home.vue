<script setup>
import {computed, onMounted, onUnmounted, ref} from "vue";
import localData from '../../../public/data.json'
import {getH5StaticJson} from "@/api/getJSON.js";


const sections = ref({});
// sections.value = data['Home'];

const local = ref({});

// const targetDate = ref({});

/*
const targetDate =  new Date(localData["time"]);
*/

let targetDate =  new Date("2025-01-01T00:00:00");


// const targetDate =  new Date(data["time"]);
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const updateCountdown = () => {
  const now = new Date();
  const timeDiff = targetDate - now;
  if (timeDiff > 0) {
    days.value = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    minutes.value = Math.floor((timeDiff / 1000 / 60) % 60);
    seconds.value = Math.floor((timeDiff / 1000) % 60);
  } else {
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
  }
    console.log(days.value)
    console.log(daysDigits.value)

};
const daysDigits = computed(() => String(days.value).padStart(3, '0').split(''));
const hoursDigits = computed(() => String(hours.value).padStart(2, '0').split(''));
const minutesDigits = computed(() => String(minutes.value).padStart(2, '0').split(''));
const secondsDigits = computed(() => String(seconds.value).padStart(2, '0').split(''));

let intervalId;

// onMounted(() => {
//   updateCountdown();
//   intervalId = setInterval(updateCountdown, 1000);
// });

onMounted(() => {
    getH5StaticJson({}).then(json => {
        local.value = json["data"]['local'];
        // 合并数据
        sections.value = json["data"]['Home']
        console.log(sections.value)


        targetDate = new Date(json["data"]["time"]);


        updateCountdown();
        intervalId = setInterval(updateCountdown, 1000);
    });
});

onUnmounted(() => {
  clearInterval(intervalId);
});


</script>
<template>
  <div>
    <section class="main-box">

      <aside class="sidebar">
        <el-affix class="sidebar-affix" :offset="300">
        <div class="sidebar-left">
          <el-anchor :offset="70" style="margin: 15px 10px 15px 0;">
            <el-anchor-link v-for="section in sections" :href="'#'+section.title" style="margin: 10px;">
              <div style="font-size: large">
                {{ section.title }}
              </div>
            </el-anchor-link>

          </el-anchor>
        </div>
        </el-affix>

<!--        <ul>-->
<!--          <li v-for="section in sections" :key="section.title">-->
<!--            <a :href="'#'+section.title">{{ section.title }}</a>-->
<!--          </li>-->
<!--        </ul>-->
      </aside>

      <div class="main-box-2">
        <div >
          <div class="u-countdown-box f-flex-c-sb">
            <div class="u-countdown-txt">
              <p class="u-tt">距 CGCKD2025</p>
              <p class="u-date">{{targetDate.getFullYear()}}年{{targetDate.getMonth()+1}}月{{targetDate.getDate()}}日</p>
            </div>
            <div class="u-countdown-time-box" id="countdown">
              <div class="u-date-box u-days-box">
                <p class="u-days u-bg" id="day">
                  <span class="u-day" v-for="digit in daysDigits" >{{ digit }}</span>
                </p>
                <p class="u-unit">天</p>
              </div>
              <div class="u-date-box u-hours-box">
                <p class="u-hours u-bg" id="hours">
                  <span class="u-hour" v-for="digit in hoursDigits" :key="digit">{{ digit }}</span>
                </p>
                <p class="u-unit">时</p>
              </div>
              <div class="u-date-box u-split-box"></div>
              <div class="u-date-box u-minutes-box">
                <p class="u-minutes u-bg" id="minutes">
                  <span class="u-minute" v-for="digit in minutesDigits" :key="digit">{{ digit }}</span>
                </p>
                <p class="u-unit">分</p>
              </div>
              <div class="u-date-box u-split-box"></div>
              <div class="u-date-box u-seconds-box">
                <p class="u-seconds u-bg" id="seconds">
                  <span class="u-second" v-for="digit in secondsDigits" :key="digit">{{ digit }}</span>
                </p>
                <p class="u-unit">秒</p>
              </div>
            </div>
          </div>

          <div class="colTy col">

<!--
            <div class="row Ribbon Ribbon-20180814">
              <div class="u-six-ciie">
                <p>中国人工智能学会</p>
                <p class="p1">2025年1月1-10日</p>
              </div>
              <div class="container clearfix">
                <div class="ribbon-right col-sm-4 col-xs-12 wow bounceInRight" style="visibility: visible; animation-name: bounceInRight;">
                  <p class="text-center">距第2025中国人工智能学会</p>
                  <div id="countdown" class="countdown text-center">
                    <b id="day">99</b><small>天</small>
                    &lt;!&ndash; <b id="hours"></b><small>小时</small> &ndash;&gt;
                  </div>
                </div>
                <div class="ribbon-center col-sm-4 col-xs-12 wow bounceIn" style="visibility: visible; animation-name: bounceIn;">
                  <p class="text-center">第n届中国人工智能学会<br>注册报名</p>
                  <div class="text-center">
                    <a href="/zbh/cn/19zc/">
                      &lt;!&ndash;              <img src="/resource/static/zbh/default/assets-2019/img/zhc.png">&ndash;&gt;
                    </a>
                  </div>
                </div>
                <div class="ribbon-left col-sm-4 col-xs-12 wow bounceInLeft u-kefu-box" style="visibility: visible; animation-name: bounceInLeft;">
                  <div>
                    <h4>服务热线</h4>
                    <h2 class="text-center">+86-</h2>
                  </div>
                  &lt;!&ndash;<a href="https://968888.ciie.org/static/page/imWork.html" title="24小时在线客服" target="_blank">
                      <i class="iconfont icon-kefu"></i>
                      <span>24小时<br>在线客服</span>
                  </a>&ndash;&gt;
                  <a class="u-kefu" href="https://968888.ciie.org/ciie/im/text/pczhongwen.html?comeType=pcurl&amp;orgi=809607146d5841839117cdd2c3c450ab" target="_blank" title="关注中国国际进口博览会参会服务">
                    &lt;!&ndash;            <img src="/resource/static/zbh/default/assets-2019/img/Topic/kefu.jpg" alt="">&ndash;&gt;
                  </a>
                </div>
              </div>
            </div>
-->

          </div>

          <div class="colTy col" v-for="section in sections">
            <h3 :id="section.title">
              <img :src="section.image" style="height: 25px; margin-bottom: -6px">
              {{ section.title }}
            </h3>
            <div v-html="section.content" :style="section.height"></div>
          </div>
        </div>
      </div>
      <el-backtop :right="100" :bottom="100" />

    </section>
  </div>
</template>
<style>
@import "../../assets/sbohui.css";
.main-box-2 {
  display: flex;
  flex-direction: column;
  margin-left: 3%; /* Adjust based on sidebar width */
}

@media screen and (max-width: 767px) {
  section{
    margin: 0;
  }
  .main-box-2 {
    margin-left: 0; /* Adjust based on sidebar width */
  }
  .u-date-box{
    display: flex;
  }
  .sidebar .sidebar-affix{
    display: none;
    border: 0px solid #e4e4e4;
  }
  .u-countdown-time-box
  {
    flex-direction: column;
    font-size: 30px

  }
  .u-countdown-time-box .u-bg>span
  {
    width: 30px;
    height: 47px;
  }
  .f-flex-c-sb {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 1206px) {
  section{
    margin: 5%;
  }
  .u-countdown-time-box
  {
    font-size: 50px

  }
  .u-countdown-time-box .u-bg>span
  {
    width: 40px;
    height: 60px;
  }

}

/*侧边栏*/
.sidebar-left
{
  padding: 10px;
  border-radius: 6%;
  background-color: white;
}

.main-box {
  display: flex;
}
.sidebar {
  width: 150px;
  /*  background-color: #f8f8f8;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);*/
}

@media  screen and (max-width: 700px) {
  .sidebar {
    width: 0;
  }
}

/*
.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar a {
  text-decoration: none;
  color: #333;
}

.sidebar a:hover {
  color: #007bff;
}
*/


/*最新消息*/
#icmsa {
  overflow:hidden;
  margin:20px;
  font-size:14px;
  color:#333;
  margin-top:30px;
}
.colTy
{
  margin-bottom: 20px;
  background-color:#FFF;
}
#screen {
  position: absolute;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

#screen img, canvas {
  position: absolute;
  left: -9999px;
  cursor: pointer;
  image-rendering: optimizeSpeed;
}

#screen .href {
  border: #FFF dotted 1px;
}

#screen .fog {
  position: absolute;
  background: #fff;
  opacity: 0.1;
  filter: alpha(opacity=10);
}

#command {
  position: absolute;
  left: 1em;
  top: 1em;
  width: 130px;
  z-index: 30000;
}

#bar {
  position: relative;
  left: 1em;
  top: 1em;
  height: 160px;
}

#bar .button {
  position: absolute;
  background: #222;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

#bar .loaded {
  background: rgba(235, 235, 235, 0.5);
}

#bar .viewed {
  background: #fff;
}

#bar .selected {
  background: #f00;
}

#urlInfo {
  position: absolute;
  visibility: hidden;
  z-index: 30000;
  padding-left: 12px;
  cursor: pointer;
}

del {
  color: red;
}


/*栏目内容区域*/
.article,.news{
  margin:18px 50px;}
.colTy .article,.news{
  overflow: auto;
 }
h5{
  line-height:40px;
  font-size:18px;}
b{
  line-height:40px;
  font-size:16px;}
.article p{
  line-height:30px;
  font-size:14px;
  font-weight:normal;
  text-indent:2em;}
.article p a{
  text-decoration:none;
  color:#09c;}
.article table{
  margin:40px auto;
  line-height:40px;
  vertical-align:bottom;
  border-collapse:separate;
  background-color:#FFF;
  font-size:16px;
  border:solid 1px #666;
  font-family:"微软雅黑";}
.article table tr td{
  border-color:#fff;
  text-align:center;
  border:1px #666 solid;}
.article table tr td a{
  text-decoration: none;
}
</style>
