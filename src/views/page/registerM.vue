<script setup>
import {onMounted, ref} from "vue";

const registerM = ref({});

import {getH5StaticJson} from "@/api/getJSON.js";
onMounted(() => {
  getH5StaticJson({}).then(json  => {
    registerM.value =json["data"]['registerM']

  });
})
</script>
<template>
  <section class="main-box sectionList">
    <div class="colTy col" v-for="section in registerM">
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
            <div class="format" >
                <h3>会议注册 </h3>
                <p><b>会议通知：</b><a title="CGCKD2023会议通知.pdf" download href="../../../public/images/register/CGCKD2023huiyitongzhi.pdf">CGCKD2023会议通知.pdf（点击进行下载）</a></p>
                <p><b>打开微信扫描二维码进行会议人员注册:</b></p>
                <table  border="0" align="center" style="margin: 47px auto">

                    <tr>
                        <td height="20" align="right" valign="middle">&nbsp;</td>
                        <td height="20" align="left" valign="middle"><span class="large"></span></td>
                    </tr>

                    <tr>
                    <td align="right" valign="middle">&nbsp;</td>
                    <td height="20" colspan="2" align="left" valign="middle">&nbsp;</td>
                    </tr>
                </table>

      </div>
      </div>
    </section>

</template>

<script setup>

</script>

<style scoped>

</style>

-->
