
<script setup>

import {onMounted, ref} from "vue";

const sections = ref({});

import {getH5StaticJson} from "@/api/getJSON.js";
onMounted(() => {
  getH5StaticJson({}).then(json  => {
    sections.value =json["data"]['PagerContributions']

  });
})


</script>


<template>
    <section class="main-box sectionList paperContr">
      <div class="colTy col" v-for="section in sections">
        <h3 :id="section.title">
          <img :src="section.image" style="height: 25px; margin-bottom: -6px">
          {{ section.title }}
        </h3>
        <div v-html="section.content" :style="section.height"></div>
      </div>



<!--
        <div class="col1 col">
            <h3>重要节点日期 </h3>

            <table>

                <tr>
                    <td class="bold" width="300">论文投稿截止日期</td>
                    <td  width="300">2023 年 4 月 10 日</td>
                </tr>

                <tr>
                    <td class="bold" width="300">论文推荐期刊拟录用通知</td>
                    <td  width="300">2023 年 5 月 31 日 以前</td>
                </tr>
                &lt;!&ndash;<tr>&ndash;&gt;
                &lt;!&ndash;<td class="bold" width="300">论文修改与终稿提交日期</td>&ndash;&gt;
                &lt;!&ndash;<td  width="300">2023 年 5 月 31 日</td>&ndash;&gt;
                &lt;!&ndash;</tr>&ndash;&gt;

                <tr>
                    <td class="bold" width="300">会议举办日期</td>
                    <td  width="300">2023 年 7月 17 日 - 20 日</td>
                </tr>
            </table>


        </div>
-->



<!--
        <div class="col3 col"  id="about">
            <div class="format">

                <h3>投稿须知</h3>
                &lt;!&ndash;<p> 1.会议采用网上征稿方式，投稿地址:<a href="https://easychair.org/conferences/?conf=cgckd2023" target="_blank">https://easychair.org/conferences/?conf=cgckd2023</a></p>&ndash;&gt;
                &lt;!&ndash;                            <font color="red">已经截止收稿！</font></p>&ndash;&gt;
                <p> 1.会议采用网上征稿方式，投稿地址:<a href="https://e-huizhan.com/conference_paper/#/login?model=12&turn=paper&conferenceId=1601144277369470978" target="_blank">https://e-huizhan.com/conference_paper/#/login?model=12&turn=paper&conferenceId=1601144277369470978</a></p>
                <p> 2.会议接收中英文论文。中文稿件请按照《计算机研究与发展》:<a href="https://crad.ict.ac.cn/news_list.htm?column=ziliaoxiazai">https://crad.ict.ac.cn/news_list.htm?column=ziliaoxiazai</a>模版排版，英文稿件请按照 IEEE 常规格式排版，原则上不超过 8000 字。会议将履行严格的审稿程序，遵循宁缺毋滥的原则，杜绝抄袭、数据不实、一稿多投等学术不端行为。</p>
                <p> 3.投稿内容应突出作者的创新与成果，具有较重要的学术价值与应用推广价值， 且未在公开发行的刊物上发表或会议上宣读。请在稿件最后附上通讯作者姓名、 性别、职务/职称、所属单位、通信地址、邮政编码、联系电话和 E-mail 地址。</p>
                <p> 4.根据论文评审情况，所有录用论文将根据论文质量推荐到以下期刊：</p>
                <p>《International Journal of Machine Learning and Cybernetics》</p>
                <p>《International Journal of Bio-inspired Computation》</p>
                <p>《CAAI Transactions on Intelligence Technology》</p>
                <p>《International Journal of Computer Science and Knowledge Engineering》</p>
                <p>《Journal of Electronic Science and Technology(JEST)》</p>
                <p>《计算机研究与发展》</p>
                <p>《模式识别与人工智能》</p>
                <p>《计算机科学》</p>
                <p>《计算机科学与探索》</p>
                <p>《小型微型计算机系统》</p>
                <p>《智能系统学报》</p>
                <p>《模糊系统与数学》</p>
                <p>《计算机应用》</p>
                <p>《计算机工程与应用》</p>
                <p>《数据采集与处理》</p>
                <p>《南京大学学报（自然科学版）》</p>
                <p>《山东大学学报（理学版）》</p>
                <p>《郑州大学学报（理学版）》</p>
                &lt;!&ndash;<p>1《郑州大学学报（工学版）》</p>&ndash;&gt;
                <p>《重庆邮电大学学报（自然科学版）》</p>
                <p>《山西大学学报（自然科学版）》</p>
                <p>《西南大学学报（自然科学版）》</p>
                <p>《西北大学学报（自然科学版）》</p>
                <p>《河北师范大学学报（自然科学版）》</p>
                <p>《南京理工大学学报（自然科学版）》</p>
                <p>《昆明理工大学学报（自然科学版）》</p>
                <p>《江苏科技大学学报（自然科学版）》</p>
                &lt;!&ndash;<p>《集美大学学报（自然科学版）》</p>&ndash;&gt;
                <p>《重庆理工大学学报 (自然科学版)》</p>
                <p>《人工智能科学与工程》</p>
                <p>《闽南师范大学学报》</p>
                <p>《数码设计》</p>
                <p>《厦门理工学院学报》</p>
                <p> 在各期刊发表前，作者须按照审稿意见和期刊要求修改论文。每篇录用论文至少有一名作者注册参会。</p>
                <p>5.<strong>投稿时，请作者在论文首页左上角注明“希望本论文被大会推荐至×××期刊”，每篇论文可以选择2-3个期望被推荐的期刊。如果希望推荐到英文期刊，请用英文撰写。期刊列表详情请见</strong><a href="index.html#qk"target="_blank">合作期刊。</a></p>
                <p>6. 会议将评选优秀学生论文若干。候选的优秀学生论文第一作者必须是在校的学生，且必须由学生到会宣讲。如希望参评，投稿时请注明第一作者是学生。</p>
                <p>&nbsp; </p>
            </div>
        </div>
-->
        <p></p>


    </section>

</template>


<style>
.paperContr .format p {
    font-size: 14px;
    text-indent: 2em;
    line-height: 35px;
    text-align: initial;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 14px;
}
.paperContr .format p a {
    color: #09c;
}
.paperContr .bold {
    font-weight: bold;
}
.paperContr table {
    margin: 40px auto;
    line-height: 40px;
    vertical-align: bottom;
    border-collapse: separate;
    background-color: #FFF;
    font-size: 16px;
    border: solid 1px #666;
    font-family: "微软雅黑";
}
.paperContr table tr td {
    border-color: #fff;
    text-align: center;
    border: 1px #666 solid;
}
.paperContr .col
{
    padding-bottom: 40px;
}

</style>
