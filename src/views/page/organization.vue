<script setup>

import {onMounted, ref} from "vue";
import localData from '../../../public/data.json'

const organization = ref({});



organization.value =localData['organization']


function require(s) {
  console.log(s)
    return s;
}

</script>

<template>
  <section class="main-box sectionList">


    <div class="col1 col">
      <div class="format">
        <h3>
          <img src="../../../public/images/image/organization_png.png" style="height: 25px; margin-bottom: -4px">
          &nbsp;组织机构简介
        </h3>
        <p><b>中国人工智能学会（Chinese Association for Artificial Intelligence，CAAI）:</b>CAAI成立于1981年，是我国智能科学技术领域唯一的国家级学会，具有推荐“两院院士”的资格。学会拥有56个分支机构，包括47个专业委员会和9个工作委员会，覆盖智能科学与技术领域。中国人工智能学会粒计算与知识发现专委会从2013至2022年，连续10年获中国人工智能学会优秀专委会称号。</p>
        <!--                    <p><b>中国计算机学会（China Computer Federation，CCF）:</b>CCF成立于1962年，是中国计算机及相关领域的学术团体，宗旨是为本领域专业人士的学术和职业发展提供服务，进行学术评价，引领学术方向；学会下设12个工作委员会。</p>-->

        <p><b>国际粗糙集学会（The International Rough Set Society, IRSS）:</b>IRSS致力于推动粗糙集理论、基础、方法、扩展及应用。组织Transactions on Rough Sets期刊，以及RSCTC, RSKT等国际学术会议。</p>
      </div>
    </div>
    <div class="col1 col">
      <div class="format">
        <h3>
          <img src="../../../public/images/image/list.png" style="height: 25px; margin-bottom: -4px">
          &nbsp;组织机构列表
        </h3>
        <div class="col-lg-8 col-lg-offset-2 centered">

<!-- --------------------------------------------->

          <div class="organization-section">
            <!-- Unit section -->
            <div v-for="(unit, index) in organization" :key="index" class="unit-section">
              <div v-if="unit.unit" class="unit">
                <div v-for="(unitItem, i) in unit.unit" :key="i" class="unit-item">
                    <div class="fenGe">
                      <div class="unit-title">{{ unitItem[Object.keys(unitItem)[0]].title }}</div>
                      <div class="unit-name">{{ unitItem[Object.keys(unitItem)[0]].name }}</div>
                    </div>
                    <a :href="unitItem[Object.keys(unitItem)[0]].link" target="_blank" class="unit-link">
                    <img :src="unitItem[Object.keys(unitItem)[0]].logo" alt="logo" class="logo"/>
                  </a>
                </div>
              </div>

              <!-- People section -->
              <div v-if="unit.categories" class="people-section">
                <div v-for="(category, catIndex) in unit.categories" :key="catIndex" class="category">
                  <div class="category-title">{{ category.title }}</div>
                  <ul class="people-list">
                    <li v-for="(person, personIndex) in category.people" :key="personIndex" class="person-item">
                      {{ person }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


<!--          <table  border="0" align="center" style="margin: 47px auto">-->

<!--            <td width="89" align="right" valign="middle">&nbsp;</td>-->
<!--            <td height="20" colspan="2" align="left" valign="middle"><span class="large"><strong>会议主办单位</strong>：</span><span class="large">&nbsp;&nbsp;&nbsp;</span></td>-->
<!--            <tr>-->
<!--              <td height="20" align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="20" align="left" valign="middle"><span class="large">中国人工智能学会</span></td>-->
<!--              <td height="20" align="left" valign="middle"><span class="large"><a href="http://caai.cn/" target="_blank">&nbsp;&nbsp;<img src="../../../public/images/image/caai_logo.png" width="90" height="82"></a></span></td>-->
<!--            </tr>-->
<!--            &lt;!&ndash;                        <tr>&ndash;&gt;-->
<!--            &lt;!&ndash;                            <td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;                            <td height="20" align="left" valign="middle"><span class="large"><strong>会议主办单位<strong>：</strong></strong></span></td>&ndash;&gt;-->
<!--            &lt;!&ndash;                            <td height="20" align="left" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;                        </tr>&ndash;&gt;-->
<!--            &lt;!&ndash;                        <tr>&ndash;&gt;-->
<!--            &lt;!&ndash;                            <td height="20" align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;                            <td width="293" height="20" align="left" valign="middle"><span class="large">中国计算机学会</span></td>&ndash;&gt;-->
<!--            &lt;!&ndash;                            <td width="328" height="20" align="left" valign="middle"><span class="large"><a href="http://www.ccf.org.cn/" target="_blank">&nbsp;&nbsp;<img src="images/image/ccf_logo.png" width="90" height="70"></a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!&ndash; ==== <a href="http://gaitc.caai.cn/" target="_blank"><img src="image/AI60.jpg" width="87" height="83"></a>  ==== &ndash;&gt; </span></td>&ndash;&gt;-->
<!--            &lt;!&ndash;                        </tr>&ndash;&gt;-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="20" align="left" valign="middle"><span class="large"><strong>会议支持单位<strong>：</strong></strong></span></td>-->
<!--              <td height="20" align="left" valign="middle">&nbsp;</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td height="20" align="right" valign="middle">&nbsp;</td>-->
<!--              <td width="293" height="20" align="left" valign="middle"><span class="large">国际粗糙集学会</span></td>-->
<!--              <td width="328" height="20" align="left" valign="middle"><span class="large"><a href="https://www.roughsets.org/" target="_blank">&nbsp;&nbsp;<img src="../../../public/images/image/irss_logo.png" width="90" height="90"></a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!&ndash; ==== <a href="http://gaitc.caai.cn/" target="_blank"><img src="image/AI60.jpg" width="87" height="83"></a>  ==== &ndash;&gt; </span></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="20" align="left" valign="middle"><span class="large"><strong>会议承办单位：</strong></span></td>-->
<!--              <td height="20" align="left" valign="middle">&nbsp;</td>-->
<!--            </tr>-->


<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="20" align="left" valign="middle"><span class="large">厦门理工学院</span></td>-->
<!--              <td height="20" align="left" valign="middle"><a href="https://www.xmut.edu.cn/" target="_blank">&nbsp;&nbsp;<img src="../../../public/images/image/xmut.jpeg" width="80" height="100"></a></td>-->
<!--              &lt;!&ndash;                            <td height="20" align="left" valign="middle"><a href="//www.sxu.edu.cn/" target="_blank">&nbsp;&nbsp;</a></td>&ndash;&gt;-->
<!--            </tr>-->


<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="34" colspan="2" align="left" valign="middle"><span class="large"><strong>名誉主席： </strong></span></td>-->
<!--            </tr>-->

<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">张&nbsp;&nbsp;&nbsp;&nbsp;钹（清华大学）</td>-->
<!--              <td height="30" align="left" valign="middle">王国胤（重庆邮电大学）</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">梁吉业（山西大学）</td>-->

<!--            </tr>-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="20" colspan="2" align="left" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="31" colspan="2" align="left" valign="middle"><span class="large"><strong><strong>会议主席： </strong></strong></span></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">苗夺谦（同济大学）</td>-->
<!--              <td height="30" align="left" valign="middle">吴伟志（浙江海洋大学）</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">胡清华（天津大学）</td>-->
<!--              <td height="30" align="left" valign="middle">吴克寿（厦门理工学院）</td>-->
<!--            </tr>-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="30" align="left" valign="middle">吴伟志（浙江海洋大学）</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="30" align="left" valign="middle">朱顺痣（厦门理工学院）</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="30" align="left" valign="middle">陈占葵（厦门理工学院）</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="20" colspan="2" align="left" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="32" colspan="2" align="left" valign="middle"><span class="large"><strong>程序委员会主席：</strong></span></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">高&nbsp;&nbsp;&nbsp;&nbsp;阳（南京大学）</td>-->
<!--              <td height="30" align="left" valign="middle">李天瑞（西南交通大学）</td>-->

<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">张清华（重庆邮电大学）</td>-->
<!--              <td height="30" align="left" valign="middle">朱顺痣（厦门理工学院）</td>-->
<!--            </tr>-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>                           &ndash;&gt;-->
<!--            &lt;!&ndash;<td height="30" align="left" valign="middle">钱宇华（山&nbsp;&nbsp;西&nbsp;&nbsp;大&nbsp;&nbsp;学）</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="30" align="left" valign="middle">王大寒（厦门理工学院）</td>&ndash;&gt;-->

<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="30" align="left" valign="middle">张&nbsp;&nbsp;&nbsp;&nbsp;瑞（厦门理工学院）</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="20" colspan="2" align="left" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="33" colspan="2" align="left" valign="middle"><span class="large"><strong>程序委员会委员： </strong></span></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">丁世飞（中国矿业大学）</td>-->
<!--              <td height="30" align="left" valign="middle">胡学钢（合肥工业大学）</td>-->

<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">黄&nbsp;&nbsp;&nbsp;&nbsp;兵（南京审计大学）</td>-->
<!--              <td height="30" align="left" valign="middle">李德玉（山西大学）</td>-->

<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">李凡长（苏州大学）</td>-->
<!--              <td height="30" align="left" valign="middle">李进金（闽南师范大学）</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">梁久祯（常州大学）</td>-->
<!--              <td height="30" align="left" valign="middle">刘贵龙（北京语言大学）</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">闵&nbsp;&nbsp;&nbsp;&nbsp;帆（西南石油大学）</td>-->
<!--              <td height="30" align="left" valign="middle">钱&nbsp;&nbsp;&nbsp;&nbsp;进（华东交通大学）</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">商&nbsp;&nbsp;&nbsp;&nbsp;琳（南京大学）</td>-->
<!--              <td height="30" align="left" valign="middle">邵明文（中国石油大学）</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">魏&nbsp;&nbsp;&nbsp;&nbsp;玲（西北大学）</td>-->
<!--              <td height="30" align="left" valign="middle">魏&nbsp;&nbsp;&nbsp;&nbsp;巍（山西大学）</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">谢&nbsp;&nbsp;&nbsp;&nbsp;刚（太原理工大学）</td>-->
<!--              <td height="30" align="left" valign="middle">徐久成（河南师范大学）</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">于&nbsp;&nbsp;&nbsp;&nbsp;洪（重庆邮电大学）</td>-->
<!--              <td height="30" align="left" valign="middle">于&nbsp;&nbsp;&nbsp;&nbsp;剑（北京交通大学）</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">詹建明（湖北民族大学）</td>-->
<!--              <td height="30" align="left" valign="middle">张红云（同济大学）</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">张&nbsp;&nbsp;&nbsp;&nbsp;楠（烟台大学）</td>-->
<!--              <td height="30" align="left" valign="middle">张燕平（安徽大学）</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">赵&nbsp;&nbsp;&nbsp;&nbsp;姝（安徽大学）</td>-->
<!--              <td height="30" align="left" valign="middle">邹&nbsp;&nbsp;&nbsp;&nbsp;丽（山东建筑大学）</td>-->
<!--            </tr>-->

<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="32" colspan="2" align="left" valign="middle"><span class="large"><strong>讲习班主席：</strong></span></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">钱宇华（山西大学）</td>-->
<!--              <td height="30" align="left" valign="middle">李金海（昆明理工大学）</td>-->
<!--            </tr>-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="20" colspan="2" align="left" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="32" colspan="2" align="left" valign="middle"><span class="large"><strong>特邀论文报告主席：</strong></span></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">折延宏（西安石油大学）</td>-->
<!--              <td height="30" align="left" valign="middle">代建华（湖南师范大学）</td>-->
<!--            </tr>-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="20" colspan="2" align="left" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" colspan="2" align="left" valign="middle"><strong>青年学者论坛主席：</strong></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">岳晓冬（上海大学）</td>-->
<!--              <td height="30" align="left" valign="middle">李飞江（山西大学）</td>-->
<!--            </tr>-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="30" align="left" valign="middle">余&nbsp;&nbsp;&nbsp;&nbsp;鹰（华东交通大学）</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="30" align="left" valign="middle">李华雄（南&nbsp;&nbsp;京&nbsp;&nbsp;大&nbsp;&nbsp;学）</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="20" colspan="2" align="left" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" colspan="2" align="left" valign="middle"><strong>评奖委员会主席：</strong></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">米据生（河北师范大学）</td>-->
<!--              <td height="30" align="left" valign="middle">刘&nbsp;&nbsp;&nbsp;&nbsp;盾（西南交通大学）</td>-->
<!--            </tr>-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="30" align="left" valign="middle">李凡长（苏&nbsp;&nbsp;州&nbsp;&nbsp;大&nbsp;&nbsp;学）  </td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="30" align="left" valign="middle">李天瑞（西南交通大学）</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="20" colspan="2" align="left" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" colspan="2" align="left" valign="middle"><strong>出版主席：</strong></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">杨习贝（江苏科技大学）</td>-->
<!--              <td height="30" align="left" valign="middle">夏书银（重庆邮电大学）</td>-->
<!--            </tr>-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="20" colspan="2" align="left" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" colspan="2" align="left" valign="middle"><strong>宣传主席：</strong></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">余&nbsp;&nbsp;&nbsp;&nbsp;鹰（华东交通大学）</td>-->
<!--              <td height="30" align="left" valign="middle">王&nbsp;&nbsp;&nbsp;&nbsp;煜（天津大学）</td>-->
<!--            </tr>-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="20" colspan="2" align="left" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" colspan="2" align="left" valign="middle"><strong>组织委员会主席：</strong></td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">陈占葵（厦门理工学院）</td>-->
<!--              <td height="30" align="left" valign="middle">徐伟华（西南大学）</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">林耀进（闽南师范大学）</td>-->
<!--            </tr>-->
<!--            &lt;!&ndash;<tr>&ndash;&gt;-->
<!--            &lt;!&ndash;<td align="right" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;<td height="20" colspan="2" align="left" valign="middle">&nbsp;</td>&ndash;&gt;-->
<!--            &lt;!&ndash;</tr>&ndash;&gt;-->

<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="33" colspan="2" align="left" valign="middle"><span class="large"><strong>组织委员会委员： </strong></span></td>-->
<!--            </tr>-->

<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">李&nbsp;&nbsp;&nbsp;&nbsp;晖（厦门理工学院）</td>-->
<!--              <td height="30" align="left" valign="middle">邓&nbsp;&nbsp;&nbsp;&nbsp;健（厦门理工学院）</td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td align="right" valign="middle">&nbsp;</td>-->
<!--              <td height="30" align="left" valign="middle">李&nbsp;&nbsp;&nbsp;&nbsp;伟（厦门理工学院）</td>-->
<!--            </tr>-->


<!--          </table>-->
          <p>&nbsp;</p>
          <p><br>
          </p>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.organization-section {
  margin: 47px auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  unicode-bidi: isolate;
  border-spacing: 2px;
  border-color: gray;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
/*  margin-inline-start: auto;
  margin-inline-end: auto;
  margin: 30px;
  margin-left: 150px;
  border-collapse: separate;*/
  line-height: 30px;
  font-size: 13px;
  border-collapse: collapse;

}
.fenGe{
  width: 50%;
}
.unit-section, .people-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.unit {
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.unit-item {
  width: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px;
  text-align: center;
}
@media screen and (max-width: 767px) {
  .unit-item {
    width: 100%;
  }
}

.unit-link {
  text-decoration: none;
  color: inherit;
}

.unit-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.logo {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.unit-name {
  color: #000;
}

.people-section {
  margin-top: 20px;
}

.category-title {
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
}

.people-list {
  list-style: none;
  padding: 0;
  text-align: center;
}

.person-item {
  margin-bottom: 5px;
}


.col1 p {
  text-indent: 2em;
}
.format p {
  font-size: 14px;
  text-indent: 2em;
  line-height: 35px;
  text-align: initial;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 14px;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}
table{
  border-collapse:collapse;/* 取消表格边框 */
}
table {
  margin: 30px;
  margin-left: 150px;
  border-collapse: separate;
  line-height: 30px;
  font-size: 13px;
}

table {
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  margin-inline-start: auto;
  margin-inline-end: auto;
}
table {
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  unicode-bidi: isolate;
  border-spacing: 2px;
  border-color: gray;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  unicode-bidi: isolate;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  unicode-bidi: isolate;
  border-color: inherit;
}
td {
  display: table-cell;
  vertical-align: inherit;
  unicode-bidi: isolate;
}
</style>
