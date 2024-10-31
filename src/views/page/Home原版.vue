<script setup>
// const sections = ref(
//     [
//       {
//         title: '会议简介',
//         image: '../../../public/images/image/introduction.png',
//         height:' ',
//         content: `<div class="article">
//     <p>
//     由中国人工智能学会主办，中国人工智能学会粒计算与知识发现专委会协办，国际粗糙集学会支持，贵州大学承办的2025年中国粒计算与知识发现学术会议将于2025年7月17日-20日在“爽爽的贵阳”召开。</p>
//
//     <p>联合会议由三部分组成：CRSSC始于2001年，主要研讨Z. Pawlak教授所提出Rough集理论；CGrC于2007年加入，主要研讨L.A.
//     Zadeh和T.Y.
//     Lin提出的粒计算理论以及张钹院士和张铃教授提出的商空间理论；三支决策学术会议于2012年加入，主要研讨姚一豫教授提出的三支决策理论。</p>
//
//     <!--<p>历届会议均邀请著名学者作主题报告，包括张钹院士（清华大学）、李德毅院士（北京邮电大学）、戴琼海院士（清华大学）、柴天佑院士（东北大学）、赵春江院士（中国工程院）、姚一豫教授（加拿大Regina大学）、Hamido Fujita教授（日本岩手县立大学）、Thierry Denoeux教授（法国贡比涅技术大学）、Ning Zhong教授（日本前桥工业大学）、T.Y. Lin教授（美国San Jose州立大学）、吴信东教授（美国Louisiana大学）、王飞跃教授（中国科学研究院）、周志华教授（南京大学）、黄河燕教授（北京理工大学）、章毅教授（四川大学）、张铃教授（安徽大学）、任福继院士（日本德岛大学）、陈俊龙教授（华南理工大学）、姚静涛教授（加拿大Regina大学）、高新波教授（重庆邮电大学）、陈恩红教授（中国科大）、王震教授（西北工大）、曹飞龙教授（中国计量大学）、朱军教授（清华大学）、苗夺谦教授（同济大学）、梁吉业教授（山西大学）、王国胤教授（重庆邮电大学）等。</p>-->
//     <p>
//     历届会议均邀请著名学者作主题报告，包括张钹院士（清华大学）、李德毅院士（北京邮电大学）、戴琼海院士（清华大学）、柴天佑院士（东北大学）、赵春江院士（中国工程院）、姚一豫教授（加拿大Regina大学）、Hamido
//     Fujita教授（日本岩手县立大学）、Thierry Denoeux教授（法国贡比涅技术大学）、Ning Zhong教授（日本前桥工业大学）、T.Y.
//     Lin教授（美国San
//     Jose州立大学）、吴信东教授（美国Louisiana大学）、姚静涛教授（加拿大Regina大学）等数十位知名学者。</p>
//     </div>`
//       },
//       {
//         title: '最新消息',
//         image: '../../../public/images/image/message.png',
//         height:'height: 100px',
//         content: `
//     <div id="icmsa">
//     <div id="icmsa1">
//     <!--<table width="90%" border="0" cellspacing="0" cellpadding="0" class="new_c">-->
//     <!--<tr>-->
//     <!--<td width="4%"><img src="images/image/att-red.png" height="30" width="35" align="center" alt="" ></td>-->
//     <!--<td width="96%">&nbsp;论文投稿截止日期：2023年3月1日</td>-->
//     <!--</tr>-->
//     <!--</table>-->
//     <p><img src="../../../public/images/image/att-red.png" height="30" width="35" align="center" alt="">论文投稿截止日期：
//     <span>2025年3月31日</span>
//     </p>
//     </div>
//     </div>
//     `
//       },
//       {
//         title: '论文投稿',
//         height:'height: 300px',
//         image: '../../../public/images/image/paper.png',
//         content: `
//     <div class="article"><h5>投稿须知：</h5>
//     <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 重要日期</b>
//     <!--<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;论文摘要提交截止日期：暂定；</p>-->
//     <p> 论文投稿截止日期：
//     <span>2025年3月31日</span>
//     </p>
//     <p> 论文推荐期刊拟录用通知日期：2025年5月31日 以前</p>
//     <p><strong>详情请点击</strong><a href="pager-contributions.html" target="_blank">论文征稿</a></p>
//     <!--<p>  论文修改与终稿提交日期：2023年5月31日</br></p>-->
//     <p> 会议举办日期：2025年7月17日-20日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
//
//     <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 投稿地址</b>
//     <!--<p ><a href="https://easychair.org/conferences/?conf=cgckd2023" target="_blank">https://easychair.org/conferences/?conf=cgckd2023</a></p>-->
//   <!--<p ><a href="https://e-huizhan.com/conference_admin/#/login?model=3&turn=paper&conferenceId=1584726313053319169" target="_blank">https://e-huizhan.com/conference_admin/#/login?model=3&turn=paper&conferenceId=1584726313053319169</a></p>-->
//   <p>
//     <a href="https://ssssss"
//     target="_blank">还未发布</a>
//     </p>
//     </div>
//
//     `
//       },
//       {
//         title: '合作期刊',
//         height:'height: 800px',
//         image: '../../../public/images/image/periodical.png',
//         content: `
//     <div class="article">
//     <table>
//
//     <tr>
//     <td width="300"><a href="journals.html#1">《International Journal of Machine Learning and
//     Cybernetics》</a></td>
//     <td width="300"><a href="journals.html#2">《International Journal of Bio-inspired
//     Computation》</a></td>
//     <td width="300"><a href="journals.html#3">《CAAI Transactions on Intelligence Technology》</a>
//     </td>
//     </tr>
//     <tr>
//     <td width="300"><a href="journals.html#4">《International Journal of Computer Science and
//     Knowledge Engineering》</a></td>
//     <td width="300"><a href="journals.html#5">《Journal of Electronic Science and
//     Technology(JEST)》</a></td>
//     <td width="300"><a href="journals.html#6">《计算机研究与发展》</a></td>
//
//     </tr>
//     <tr>
//     <td width="300"><a href="journals.html#7">《模式识别与人工智能》</a></td>
//     <td width="300"><a href="journals.html#8">《计算机科学》</a></td>
//     <td width="300"><a href="journals.html#9">《计算机科学与探索》</a></td>
//
//     </tr>
//
//     <tr>
//     <td width="300"><a href="journals.html#10">《小型微型计算机系统》</a></td>
//     <td width="300"><a href="journals.html#11">《智能系统学报》</a></td>
//     <td width="300"><a href="journals.html#12">《模糊系统与数学》</a></td>
//     </tr>
//     <tr>
//     <td width="300"><a href="journals.html#13">《计算机应用》</a></td>
//     <td width="300"><a href="journals.html#14">《计算机工程与应用》</a></td>
//     <td width="300"><a href="journals.html#15">《数据采集与处理》</a></td>
//
//     </tr>
//     <tr>
//     <td width="300"><a href="journals.html#16">《南京大学学报（自然科学版）》</a></td>
//     <td width="300"><a href="journals.html#17">《山东大学学报（理学版）》</a></td>
//     <td width="300"><a href="journals.html#18">《郑州大学学报（理学版）》</a></td>
//
//     </tr>
//     <tr>
//     <td width="300"><a href="journals.html#19">《重庆邮电大学（自然科学版）》</a></td>
//     <td width="300"><a href="journals.html#20">《山西大学学报（自然科学版）》</a></td>
//     <td width="300"><a href="journals.html#21">《西南大学学报（自然科学版）》</a></td>
//
//     </tr>
//     <tr>
//     <td width="300"><a href="journals.html#22">《西北大学学报（自然科学版）》</a></td>
//     <td width="300"><a href="journals.html#23">《河北师范大学学报（自然科学版）》</a></td>
//     <td width="300"><a href="journals.html#24">《南京理工大学学报（自然科学版）》</a></td>
//
//     </tr>
//     <tr>
//     <td width="300"><a href="journals.html#25">《昆明理工大学学报（自然科学版）》</a></td>
//     <td width="300"><a href="journals.html#26">《江苏科技大学学报（自然科学版）》</a></td>
//     <td width="300"><a href="journals.html#27">《重庆理工大学学报 (自然科学版)》</a></td>
//
//     </tr>
//     <tr>
//     <td width="300"><a href="journals.html#28">《人工智能科学与工程》</a></td>
//     <td width="300"><a href="journals.html#29">《闽南师范大学学报》</a></td>
//     <td width="300"><a href="journals.html#30">《数码设计》</a></td>
//
//     </tr>
//     <tr>
//     <td width="300"><a href="journals.html#31">《厦门理工学院学报》</a></td>
//
//     </tr>
//     </table>
//
//     </div>
//
//     `
//       }
//     ]
// );
</script>

<template>
  <div>


  <!--内容区域-->
    <!--<div style="width: 100%;overflow: hidden;">-->
    <!--<img src="images/index/xmut6.jpg" style="width: 100%;height:100%"/>-->

    <!--</div>-->
    <!--动态图片-->
    <!--        <div style='text-align: center;overflow: hidden;background-image: url("img/mid.png")'>-->
    <!--<div style='text-align: center;overflow: hidden;'>-->
    <!--<div id="screen" style="position: relative;">-->
    <!--<div id="command">-->
    <!--<div id="bar"></div>-->
    <!--</div>-->
    <!--<div id="urlInfo"></div>-->
    <!--</div>-->
    <!--</div>-->

    <!--栏目内容区-->
    <section class="main-box">

      <div class="main-box-2">

        <div class="col1 col">

          <h3>
            <img src="../../../public/images/image/introduction.png" style="height: 25px; margin-bottom: -6px">
            会议简介
          </h3>
          <div class="article">
            <p>
              由中国人工智能学会主办，中国人工智能学会粒计算与知识发现专委会协办，国际粗糙集学会支持，贵州大学承办的2025年中国粒计算与知识发现学术会议将于2025年7月17日-20日在“爽爽的贵阳”召开。</p>

            <p>联合会议由三部分组成：CRSSC始于2001年，主要研讨Z. Pawlak教授所提出Rough集理论；CGrC于2007年加入，主要研讨L.A.
              Zadeh和T.Y.
              Lin提出的粒计算理论以及张钹院士和张铃教授提出的商空间理论；三支决策学术会议于2012年加入，主要研讨姚一豫教授提出的三支决策理论。</p>

            <!--<p>历届会议均邀请著名学者作主题报告，包括张钹院士（清华大学）、李德毅院士（北京邮电大学）、戴琼海院士（清华大学）、柴天佑院士（东北大学）、赵春江院士（中国工程院）、姚一豫教授（加拿大Regina大学）、Hamido Fujita教授（日本岩手县立大学）、Thierry Denoeux教授（法国贡比涅技术大学）、Ning Zhong教授（日本前桥工业大学）、T.Y. Lin教授（美国San Jose州立大学）、吴信东教授（美国Louisiana大学）、王飞跃教授（中国科学研究院）、周志华教授（南京大学）、黄河燕教授（北京理工大学）、章毅教授（四川大学）、张铃教授（安徽大学）、任福继院士（日本德岛大学）、陈俊龙教授（华南理工大学）、姚静涛教授（加拿大Regina大学）、高新波教授（重庆邮电大学）、陈恩红教授（中国科大）、王震教授（西北工大）、曹飞龙教授（中国计量大学）、朱军教授（清华大学）、苗夺谦教授（同济大学）、梁吉业教授（山西大学）、王国胤教授（重庆邮电大学）等。</p>-->
            <p>
              历届会议均邀请著名学者作主题报告，包括张钹院士（清华大学）、李德毅院士（北京邮电大学）、戴琼海院士（清华大学）、柴天佑院士（东北大学）、赵春江院士（中国工程院）、姚一豫教授（加拿大Regina大学）、Hamido
              Fujita教授（日本岩手县立大学）、Thierry Denoeux教授（法国贡比涅技术大学）、Ning Zhong教授（日本前桥工业大学）、T.Y.
              Lin教授（美国San
              Jose州立大学）、吴信东教授（美国Louisiana大学）、姚静涛教授（加拿大Regina大学）等数十位知名学者。</p>
          </div>

        </div>

        <div class="col2 col">
          <h3>
            <img src="../../../public/images/image/message.png" style="height: 25px; margin-bottom: -6px">
            最新消息
          </h3>
          <div id="icmsa">
            <div id="icmsa1">
              <!--<table width="90%" border="0" cellspacing="0" cellpadding="0" class="new_c">-->
              <!--<tr>-->
              <!--<td width="4%"><img src="images/image/att-red.png" height="30" width="35" align="center" alt="" ></td>-->
              <!--<td width="96%">&nbsp;论文投稿截止日期：2023年3月1日</td>-->
              <!--</tr>-->
              <!--</table>-->
              <p><img src="../../../public/images/image/att-red.png" height="30" width="35" align="center" alt="">论文投稿截止日期：
                <span>2025年3月31日</span>
              </p>
            </div>
          </div>
<!--          <script type="text/javascript">-->
<!--            var icmsa = document.getElementById("icmsa");-->
<!--            var icmsa1 = document.getElementById("icmsa1");-->
<!--            var icmsa2 = document.getElementById("icmsa2");-->
<!--            var speed = 35;-->
<!--            icmsa2.innerHTML = icmsa1.innerHTML;-->

<!--            function myMarquee() {-->
<!--              if (icmsa2.offsetHeight - icmsa.scrollTop <= 0) {-->
<!--                icmsa.scrollTop -= icmsa1.offsetHeight;-->
<!--              } else {-->
<!--                icmsa.scrollTop++;-->
<!--              }-->
<!--            }-->

<!--            var myMar = setInterval(myMarquee, speed);-->
<!--            icmsa.onmouseover = function () {-->
<!--              clearInterval(myMar);-->
<!--            }-->
<!--            icmsa.onmouseout = function () {-->
<!--              myMar = setInterval(myMarquee, speed);-->
<!--            }-->
<!--          </script>-->

        </div>


        <div class="col3 col">
          <h3>
            <img src="../../../public/images/image/paper.png" style="height: 25px; margin-bottom: -6px">
            论文投稿
          </h3>
          <div class="article"><h5>投稿须知：</h5>
            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. 重要日期</b>
            <!--<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;论文摘要提交截止日期：暂定；</p>-->
            <p> 论文投稿截止日期：
              <span>2025年3月31日</span>
            </p>
            <p> 论文推荐期刊拟录用通知日期：2025年5月31日 以前</p>
            <p><strong>详情请点击</strong><a href="pager-contributions.html" target="_blank">论文征稿</a></p>
            <!--<p>  论文修改与终稿提交日期：2023年5月31日</br></p>-->
            <p> 会议举办日期：2025年7月17日-20日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

            <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. 投稿地址</b>
            <!--<p ><a href="https://easychair.org/conferences/?conf=cgckd2023" target="_blank">https://easychair.org/conferences/?conf=cgckd2023</a></p>-->
            <!--<p ><a href="https://e-huizhan.com/conference_admin/#/login?model=3&turn=paper&conferenceId=1584726313053319169" target="_blank">https://e-huizhan.com/conference_admin/#/login?model=3&turn=paper&conferenceId=1584726313053319169</a></p>-->
            <p>
              <a href="https://ssssss"
                 target="_blank">还未发布</a>
            </p>
          </div>

        </div>


        <div id="qk" class="col4 col">
          <h3>
            <img src="../../../public/images/image/periodical.png" style="height: 25px; margin-bottom: -6px">
            合作期刊
          </h3>

          <div class="article">
            <!-- <table>
                <tr>
                    <td width=50%><b>1、主办单位</b></td>
                    <td width=50%></td>
                </tr>
                <tr> -->
            <!--<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国石油学会石油储运专业委员会</td>-->
            <!-- <td><img src="../image/hh.jpg" alt="中国石油学会室友储运专业委员会"></td>
        </tr>
        <tr>
            <td> <b>2、承办单位</b></td>
            <td></td>
        </tr>
        <tr> -->
            <!--<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;西南石油大学</td>-->
            <!--  <td><img src="../image/xh.jpg" alt="西南石油大学"></td>
         </tr>
     </table>-->
    <!--<p>-->

            <!--<a href="journals.html#1">《International Journal of Machine Learning and Cybernetics》</a>、-->
            <!--<a href="journals.html#2">《International Journal of Bio-inspired Computation》</a>、-->
            <!--<a href="journals.html#3">《CAAI Transactions on Intelligence Technology》</a>、-->
            <!--<a href="journals.html#4">《International Journal of Computer Science and Knowledge Engineering》</a>、-->
            <!--<a href="journals.html#5">《计算机研究与发展》</a>、-->
            <!--<a href="journals.html#6">《模式识别与人工智能》</a>、-->
            <!--<a href="journals.html#7">《计算机科学》</a>、-->
            <!--<a href="journals.html#8">《计算机科学与探索》</a>、-->
            <!--<a href="journals.html#9">《小型微型计算机系统》</a>、-->
            <!--<a href="journals.html#10">《智能系统学报》</a>、-->
            <!--<a href="journals.html#11">《模糊系统与数学》</a>、-->
            <!--<a href="journals.html#12">《计算机应用》</a>、-->
            <!--<a href="journals.html#13">《计算机工程与应用》</a>、-->
            <!--<a href="journals.html#14">《数据采集与处理》</a>、-->
            <!--<a href="journals.html#15">《南京大学学报（自然科学版）》</a>、-->
            <!--<a href="journals.html#16">《山东大学学报（理学版）》</a>、-->
            <!--<a href="journals.html#17">《郑州大学学报（理学版）》</a>、-->
            <!--<a href="journals.html#18">《重庆邮电大学（自然科学版）》</a>、-->
            <!--<a href="journals.html#19">《山西大学学报（自然科学版）》</a>、-->
            <!--<a href="journals.html#20">《西南大学学报（自然科学版）》</a>、-->
            <!--<a href="journals.html#21">《西北大学学报（自然科学版）》</a>、-->
            <!--<a href="journals.html#22">《河北师范大学学报（自然科学版）》</a>、-->
            <!--<a href="journals.html#23">《南京理工大学学报（自然科学版）》</a>、-->
            <!--&lt;!&ndash;<a href="journals.html#18">1《郑州大学学报（工学版）》</a>、&ndash;&gt;-->
            <!--&lt;!&ndash;<a href="http://xdxbzk.nwu.edu.cn/homeNav/xbdz/zh/">《西北大学学报（自然科学版）》</a>、&ndash;&gt;-->
            <!--<a href="journals.html#24">《昆明理工大学学报（自然科学版）》</a>、-->
            <!--<a href="journals.html#25">《江苏科技大学学报（自然科学版）》</a>、-->
            <!--&lt;!&ndash;<a href="journals.html#27">1《集美大学学报（自然科学版）》</a>、&ndash;&gt;-->
            <!--<a href="journals.html#26">《数码设计》</a>、-->
            <!--<a href="http://xb.xmut.edu.cn/">《厦门理工学院学报》</a>。-->
            <!--</p>-->

            <table>

              <tr>
                <td width="300"><a href="journals.html#1">《International Journal of Machine Learning and
                  Cybernetics》</a></td>
                <td width="300"><a href="journals.html#2">《International Journal of Bio-inspired
                  Computation》</a></td>
                <td width="300"><a href="journals.html#3">《CAAI Transactions on Intelligence Technology》</a>
                </td>
              </tr>
              <tr>
                <td width="300"><a href="journals.html#4">《International Journal of Computer Science and
                  Knowledge Engineering》</a></td>
                <td width="300"><a href="journals.html#5">《Journal of Electronic Science and
                  Technology(JEST)》</a></td>
                <td width="300"><a href="journals.html#6">《计算机研究与发展》</a></td>

              </tr>
              <tr>
                <td width="300"><a href="journals.html#7">《模式识别与人工智能》</a></td>
                <td width="300"><a href="journals.html#8">《计算机科学》</a></td>
                <td width="300"><a href="journals.html#9">《计算机科学与探索》</a></td>

              </tr>

              <tr>
                <td width="300"><a href="journals.html#10">《小型微型计算机系统》</a></td>
                <td width="300"><a href="journals.html#11">《智能系统学报》</a></td>
                <td width="300"><a href="journals.html#12">《模糊系统与数学》</a></td>
              </tr>
              <tr>
                <td width="300"><a href="journals.html#13">《计算机应用》</a></td>
                <td width="300"><a href="journals.html#14">《计算机工程与应用》</a></td>
                <td width="300"><a href="journals.html#15">《数据采集与处理》</a></td>

              </tr>
              <tr>
                <td width="300"><a href="journals.html#16">《南京大学学报（自然科学版）》</a></td>
                <td width="300"><a href="journals.html#17">《山东大学学报（理学版）》</a></td>
                <td width="300"><a href="journals.html#18">《郑州大学学报（理学版）》</a></td>

              </tr>
              <tr>
                <td width="300"><a href="journals.html#19">《重庆邮电大学（自然科学版）》</a></td>
                <td width="300"><a href="journals.html#20">《山西大学学报（自然科学版）》</a></td>
                <td width="300"><a href="journals.html#21">《西南大学学报（自然科学版）》</a></td>

              </tr>
              <tr>
                <td width="300"><a href="journals.html#22">《西北大学学报（自然科学版）》</a></td>
                <td width="300"><a href="journals.html#23">《河北师范大学学报（自然科学版）》</a></td>
                <td width="300"><a href="journals.html#24">《南京理工大学学报（自然科学版）》</a></td>

              </tr>
              <tr>
                <td width="300"><a href="journals.html#25">《昆明理工大学学报（自然科学版）》</a></td>
                <td width="300"><a href="journals.html#26">《江苏科技大学学报（自然科学版）》</a></td>
                <td width="300"><a href="journals.html#27">《重庆理工大学学报 (自然科学版)》</a></td>

              </tr>
              <tr>
                <td width="300"><a href="journals.html#28">《人工智能科学与工程》</a></td>
                <td width="300"><a href="journals.html#29">《闽南师范大学学报》</a></td>
                <td width="300"><a href="journals.html#30">《数码设计》</a></td>

              </tr>
              <tr>
                <td width="300"><a href="journals.html#31">《厦门理工学院学报》</a></td>

              </tr>
            </table>

          </div>


        </div>
      </div>
    </section>
  </div>


  <!--    <div style="position: fixed;bottom: 20px;left: 10px;z-index: 40000;" id="leftbanner">-->
  <!--        <div style="position: absolute;left: 100px;top: 0;padding: 5px;cursor: pointer;font-weight: bold;color: #FFF;" onclick="$('#leftbanner').hide(500)">关闭</div>-->
  <!--        <img src="images/left.png" style="height: 600px;" />-->
  <!--    </div>-->
  <!--    <div style="position: fixed;bottom: 20px;right: 10px;z-index: 40000;" id="rightbanner">-->
  <!--        <div style="position: absolute;right: 100px;top: 0;padding: 5px;cursor: pointer;font-weight: bold;color: #FFF;" onclick="$('#rightbanner').hide(500)">关闭</div>-->
  <!--        <img src="images/right.png" style="height: 600px;" />-->
  <!--    </div>-->


<!--
  <script type="text/javascript" src="js/jquery.min.js"></script>
-->
  <!--<script type="text/javascript" src="js/indeximage.js"></script>-->

  <!--<script type="text/javascript">-->
  <!--    // function codefans(){-->
  <!--    //     var box1=document.getElementById("leftbanner");-->
  <!--    //     var box2=document.getElementById("rightbanner");-->
  <!--    //     box1.style.display="none";-->
  <!--    //     box2.style.display="none";-->
  <!--    // }-->
  <!--    // setTimeout("codefans()",10000);//10秒之后隐藏两个图片-->
  <!--    var mycamera;-->
  <!--    var inittime;-->
  <!--    var mylunhuan = [];-->
  <!--    var myRandom = parseInt(Math.random()*10)-->

  <!--    var m3D = function () {-->
  <!--        /* &#45;&#45;&#45;&#45; private vars &#45;&#45;&#45;&#45; */-->
  <!--        var diapo = [],-->
  <!--            imb,-->
  <!--            scr,-->
  <!--            bar,-->
  <!--            selected,-->
  <!--            urlInfo,-->
  <!--            imagesPath = "images/",-->
  <!--            camera = {x:0, y:0, z:-650, s:0, fov: 500},-->
  <!--            nw = 0,-->
  <!--            nh = 0;-->
  <!--        /* ==== camera tween methods ==== */-->
  <!--        camera.setTarget = function (c0, t1, p) {-->
  <!--            if (Math.abs(t1 - c0) > .1) {-->
  <!--                camera.s = 1;-->
  <!--                camera.p = 0;-->
  <!--                camera.d = t1 - c0;-->
  <!--                if (p) {-->
  <!--                    camera.d *= 2;-->
  <!--                    camera.p = 9;-->
  <!--                }-->
  <!--            }-->
  <!--        }-->
  <!--        camera.tween = function (v) {-->
  <!--            if (camera.s != 0) {-->
  <!--                camera.p += camera.s;-->
  <!--                camera[v] += camera.d * camera.p * .01;-->
  <!--                if (camera.p == 10) camera.s = -1;-->
  <!--                else if (camera.p == 0) camera.s = 0;-->
  <!--            }-->
  <!--            return camera.s;-->
  <!--        }-->
  <!--        /* ==== diapo constructor ==== */-->
  <!--        var Diapo = function (n, img, x, y, z) {-->
  <!--            var wherethis;-->
  <!--            if (img) {-->
  <!--                this.url = img.url;-->
  <!--                this.title = img.title;-->
  <!--                this.color = img.color;-->
  <!--                this.isLoaded = false;-->
  <!--                if (document.createElement("canvas").getContext) {-->
  <!--                    /* &#45;&#45;&#45;&#45; using canvas in place of images (performance trick) &#45;&#45;&#45;&#45; */-->
  <!--                    this.srcImg = new Image();-->
  <!--                    this.srcImg.src = imagesPath + img.src;-->
  <!--                    this.img = document.createElement("canvas");-->
  <!--                    this.canvas = true;-->
  <!--                    scr.appendChild(this.img);-->
  <!--                } else {-->
  <!--                    /* &#45;&#45;&#45;&#45; normal image &#45;&#45;&#45;&#45; */-->
  <!--                    this.img = document.createElement('img');-->
  <!--                    this.img.src = imagesPath + img.src;-->
  <!--                    scr.appendChild(this.img);-->
  <!--                }-->
  <!--                wherethis = this.img;-->
  <!--                /* &#45;&#45;&#45;&#45; on click event &#45;&#45;&#45;&#45; */-->
  <!--                this.img.onclick = function () {-->
  <!--                    clearInterval(inittime);-->
  <!--                    if (camera.s) return;-->
  <!--                    if (this.diapo.isLoaded) {-->
  <!--                        if (this.diapo.urlActive) {-->
  <!--                            /* &#45;&#45;&#45;&#45; jump hyperlink &#45;&#45;&#45;&#45; */-->
  <!--                            top.location.href = this.diapo.url;-->
  <!--                        } else {-->
  <!--                            /* &#45;&#45;&#45;&#45; target positions &#45;&#45;&#45;&#45; */-->
  <!--                            camera.tz = this.diapo.z - camera.fov;-->
  <!--                            camera.tx = this.diapo.x;-->
  <!--                            camera.ty = this.diapo.y;-->
  <!--                            /* &#45;&#45;&#45;&#45; disable previously selected img &#45;&#45;&#45;&#45; */-->
  <!--                            if (selected) {-->
  <!--                                selected.but.className = "button viewed";-->
  <!--                                selected.img.className = "";-->
  <!--                                selected.img.style.cursor = "pointer";-->
  <!--                                selected.urlActive = false;-->
  <!--                                urlInfo.style.visibility = "hidden";-->
  <!--                            }-->
  <!--                            /* &#45;&#45;&#45;&#45; select current img &#45;&#45;&#45;&#45; */-->
  <!--                            this.diapo.but.className = "button selected";-->
  <!--                            interpolation(false);-->
  <!--                            selected = this.diapo;-->
  <!--                        }-->
  <!--                    }-->
  <!--                };-->
  <!--                /* &#45;&#45;&#45;&#45; command bar buttons &#45;&#45;&#45;&#45; */-->
  <!--                this.but = document.createElement('div');-->
  <!--                this.but.className = "button";-->
  <!--                bar.appendChild(this.but);-->
  <!--                this.but.diapo = this;-->
  <!--                this.but.style.left = Math.round((this.but.offsetWidth  * 1.2) * (n % 4)) + 'px';-->
  <!--                this.but.style.top  = Math.round((this.but.offsetHeight * 1.2) * Math.floor(n / 4)) + 'px';-->
  <!--                this.but.onclick = this.img.onclick;-->
  <!--                imb = this.img;-->
  <!--                this.img.diapo = this;-->
  <!--                this.zi = 25000;-->
  <!--            } else {-->
  <!--                /* &#45;&#45;&#45;&#45; transparent div &#45;&#45;&#45;&#45; */-->
  <!--                this.img = document.createElement('div');-->
  <!--                this.isLoaded = true;-->
  <!--                this.img.className = "fog";-->
  <!--                scr.appendChild(this.img);-->
  <!--                this.w = 300;-->
  <!--                this.h = 300;-->
  <!--                this.zi = 15000;-->
  <!--            }-->
  <!--            /* &#45;&#45;&#45;&#45; object variables &#45;&#45;&#45;&#45; */-->
  <!--            this.x = x;-->
  <!--            this.y = y;-->
  <!--            this.z = z;-->
  <!--            this.css = this.img.style;-->
  <!--            if(img != null){-->
  <!--                mylunhuan.push(wherethis)-->
  <!--            }-->


  <!--        }-->
  <!--        /* ==== main 3D animation ==== */-->
  <!--        Diapo.prototype.anim = function () {-->
  <!--            if (this.isLoaded) {-->
  <!--                /* &#45;&#45;&#45;&#45; 3D to 2D projection &#45;&#45;&#45;&#45; */-->
  <!--                var x = this.x - camera.x;-->
  <!--                var y = this.y - camera.y;-->
  <!--                var z = this.z - camera.z;-->
  <!--                if (z < 20) z += 5000;-->
  <!--                var p = camera.fov / z;-->
  <!--                var w = this.w * p;-->
  <!--                var h = this.h * p;-->
  <!--                /* &#45;&#45;&#45;&#45; HTML rendering &#45;&#45;&#45;&#45; */-->
  <!--                this.css.left   = Math.round(nw + x * p - w * .5) + 'px';-->
  <!--                this.css.top    = Math.round(nh + y * p - h * .5) + 'px';-->
  <!--                this.css.width  = Math.round(w) + 'px';-->
  <!--                this.css.height = Math.round(h) + 'px';-->
  <!--                this.css.zIndex = this.zi - Math.round(z);-->
  <!--            } else {-->
  <!--                /* &#45;&#45;&#45;&#45; image is loaded? &#45;&#45;&#45;&#45; */-->
  <!--                this.isLoaded = this.loading();-->
  <!--            }-->
  <!--        }-->
  <!--        /* ==== onload initialization ==== */-->
  <!--        Diapo.prototype.loading = function () {-->
  <!--            if ((this.canvas && this.srcImg.complete) || this.img.complete) {-->
  <!--                if (this.canvas) {-->
  <!--                    /* &#45;&#45;&#45;&#45; canvas version &#45;&#45;&#45;&#45; */-->
  <!--                    this.w = this.srcImg.width;-->
  <!--                    this.h = this.srcImg.height;-->
  <!--                    this.img.width = this.w;-->
  <!--                    this.img.height = this.h;-->
  <!--                    var context = this.img.getContext("2d");-->
  <!--                    context.drawImage(this.srcImg, 0, 0, this.w, this.h);-->
  <!--                } else {-->
  <!--                    /* &#45;&#45;&#45;&#45; plain image version &#45;&#45;&#45;&#45; */-->
  <!--                    this.w = this.img.width;-->
  <!--                    this.h = this.img.height;-->
  <!--                }-->
  <!--                /* &#45;&#45;&#45;&#45; button loaded &#45;&#45;&#45;&#45; */-->
  <!--                this.but.className += " loaded";-->
  <!--                return true;-->
  <!--            }-->
  <!--            return false;-->
  <!--        }-->
  <!--        ////////////////////////////////////////////////////////////////////////////-->
  <!--        /* ==== screen dimensions ==== */-->
  <!--        var resize = function () {-->
  <!--            nw = scr.offsetWidth * .5;-->
  <!--            nh = scr.offsetHeight * .5;-->
  <!--        }-->
  <!--        /* ==== disable interpolation during animation ==== */-->
  <!--        var interpolation = function (bicubic) {-->
  <!--            var i = 0, o;-->
  <!--            while( o = diapo[i++] ) {-->
  <!--                if (o.but) {-->
  <!--                    o.css.msInterpolationMode = bicubic ? 'bicubic' : 'nearest-neighbor'; // makes IE8 happy-->
  <!--                    o.css.imageRendering = bicubic ? 'optimizeQuality' : 'optimizeSpeed'; // does not really work...-->
  <!--                }-->
  <!--            }-->
  <!--        }-->
  <!--        /* ==== init script ==== */-->
  <!--        var init = function (data) {-->
  <!--            /* &#45;&#45;&#45;&#45; containers &#45;&#45;&#45;&#45; */-->
  <!--            scr = document.getElementById("screen");-->
  <!--            bar = document.getElementById("bar");-->
  <!--            urlInfo = document.getElementById("urlInfo");-->
  <!--            resize();-->
  <!--            /* &#45;&#45;&#45;&#45; loading images &#45;&#45;&#45;&#45; */-->
  <!--            var i = 0,-->
  <!--                o,-->
  <!--                n = data.length;-->
  <!--            while( o = data[i++] ) {-->
  <!--                /* &#45;&#45;&#45;&#45; images &#45;&#45;&#45;&#45; */-->
  <!--                var x = 1000 * ((i % 4) - 1.5);-->
  <!--                var y = Math.round(Math.random() * 4000) - 2000;-->
  <!--                var z = i * (5000 / n);-->
  <!--                diapo.push( new Diapo(i - 1, o, x, y, z));-->
  <!--                /* &#45;&#45;&#45;&#45; transparent frames &#45;&#45;&#45;&#45; */-->
  <!--                var k = diapo.length - 1;-->
  <!--                for (var j = 0; j < 3; j++) {-->
  <!--                    var x = Math.round(Math.random() * 4000) - 2000;-->
  <!--                    var y = Math.round(Math.random() * 4000) - 2000;-->
  <!--                    diapo.push( new Diapo(k, null, x, y, z + 100));-->
  <!--                }-->
  <!--            }-->
  <!--            inittime = setInterval(function (args) {-->
  <!--                var curimg = parseInt(Math.random()*mylunhuan.length);-->
  <!--                mylunhuan[curimg].diapo.but.className = "button selected";-->
  <!--                selected = (mylunhuan[curimg].diapo);-->
  <!--                camera.tz = mylunhuan[curimg].diapo.z - camera.fov;-->
  <!--                camera.tx = mylunhuan[curimg].diapo.x;-->
  <!--                camera.ty = mylunhuan[curimg].diapo.y;-->
  <!--                // camera.tz = this.img[0].diapo.z - camera.fov;-->
  <!--                // camera.tx = this.img[0].diapo.x;-->
  <!--                // camera.ty = this.img[0].diapo.y;-->
  <!--            },5000);-->
  <!--            /* &#45;&#45;&#45;&#45; start engine &#45;&#45;&#45;&#45; */-->
  <!--            run();-->
  <!--        }-->
  <!--        ////////////////////////////////////////////////////////////////////////////-->
  <!--        /* ==== main loop ==== */-->
  <!--        var run = function () {-->
  <!--            /* &#45;&#45;&#45;&#45; x axis move &#45;&#45;&#45;&#45; */-->
  <!--            //console.log(camera)-->
  <!--            if(camera.tx){-->
  <!--                console.log(camera)-->
  <!--                camera.tx == 100;-->
  <!--            }-->
  <!--            if (camera.tx) {-->
  <!--                if (!camera.s) camera.setTarget(camera.x, camera.tx);-->
  <!--                var m = camera.tween('x');-->
  <!--                if (!m) camera.tx = 0;-->
  <!--                /* &#45;&#45;&#45;&#45; y axis move &#45;&#45;&#45;&#45; */-->
  <!--            } else if (camera.ty) {-->
  <!--                if (!camera.s) camera.setTarget(camera.y, camera.ty);-->
  <!--                var m = camera.tween('y');-->
  <!--                if (!m) camera.ty = 0;-->
  <!--                /* &#45;&#45;&#45;&#45; z axis move &#45;&#45;&#45;&#45; */-->
  <!--            } else if (camera.tz) {-->
  <!--                if (!camera.s) camera.setTarget(camera.z, camera.tz);-->
  <!--                var m = camera.tween('z');-->
  <!--                if (!m) {-->
  <!--                    /* &#45;&#45;&#45;&#45; animation end &#45;&#45;&#45;&#45; */-->
  <!--                    camera.tz = 0;-->
  <!--                    interpolation(true);-->
  <!--                    /* &#45;&#45;&#45;&#45; activate hyperlink &#45;&#45;&#45;&#45; */-->
  <!--                    if (selected.url) {-->
  <!--                        selected.img.style.cursor = "pointer";-->
  <!--                        selected.urlActive = true;-->
  <!--                        selected.img.className = "href";-->
  <!--                        urlInfo.diapo = selected;-->
  <!--                        urlInfo.onclick = selected.img.onclick;-->
  <!--                        urlInfo.innerHTML = selected.title || selected.url;-->
  <!--                        urlInfo.style.visibility = "visible";-->
  <!--                        urlInfo.style.color = selected.color || "#fff";-->
  <!--                        urlInfo.style.top = Math.round(selected.img.offsetTop + selected.img.offsetHeight - urlInfo.offsetHeight - 5) + "px";-->
  <!--                        urlInfo.style.left = Math.round(selected.img.offsetLeft + selected.img.offsetWidth - urlInfo.offsetWidth - 5) + "px";-->
  <!--                    } else {-->
  <!--                        selected.img.style.cursor = "default";-->
  <!--                    }-->
  <!--                }-->
  <!--            }-->
  <!--            /* &#45;&#45;&#45;&#45; anim images &#45;&#45;&#45;&#45; */-->
  <!--            var i = 0, o;-->
  <!--            while( o = diapo[i++] ) o.anim();-->
  <!--            /* &#45;&#45;&#45;&#45; loop &#45;&#45;&#45;&#45; */-->
  <!--            setTimeout(run, 32);-->
  <!--        }-->
  <!--        return {-->
  <!--            ////////////////////////////////////////////////////////////////////////////-->
  <!--            /* ==== initialize script ==== */-->
  <!--            init : init-->
  <!--        }-->
  <!--    }();-->

  <!--    setTimeout(function() {-->
  <!--        m3D.init(-->
  <!--            [-->
  <!--                { src: '2012.jpg'},-->
  <!--                { src: '2013.jpg'},-->
  <!--                { src: '2014.jpg'},-->
  <!--                { src: '2015.jpg'},-->
  <!--                { src: '2016.jpg'},-->
  <!--                { src: '2017.jpg'},-->
  <!--                { src: '2018.jpg'},-->
  <!--                { src: '2019.jpg'},-->
  <!--                { src: '2012.jpg'},-->
  <!--                { src: '2013.jpg'},-->
  <!--                { src: '2014.jpg'},-->
  <!--                { src: '2015.jpg'},-->
  <!--                { src: '2016.jpg'},-->
  <!--                { src: '2017.jpg'},-->
  <!--                { src: '2018.jpg'},-->
  <!--                { src: '2019.jpg'},-->
  <!--            ]-->
  <!--        );-->
  <!--    }, 500);-->


  <!--</script>-->


</template>

<style>
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

span {
  color: black;
}

/*栏目内容区域*/
.article,.news{
  margin:18px 50px;}
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