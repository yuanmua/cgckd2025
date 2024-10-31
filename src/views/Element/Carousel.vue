<template>
    <div>
        <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item v-for="(index, item) in list" :key="item">
<!--                <h3 class="medium">{{ item.name }}</h3>
                <image :src="item.img" mode=""></image>-->
                <img
                    style="width: 100%;height: 100%"
                    class="cobot"
                    :src="index"
                    :title="index.split('/')[3].split('.')[0]"
                />
            </el-carousel-item>
        </el-carousel>


      <div style="width: 1050px;margin: auto">
          <div id="L1" class="table">
              <el-card class="box-card">
                  <div slot="header" class="clearfix">
                      <div class="tiao"></div>   <span class="text_table">感悟新时代的伟大成就</span>
                      <!--                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                  </div>
                  <div v-for="(item, index) in card1" :key="index" class="text item">
                      <a v-bind:href="item.href">{{item.name}}</a>
                  </div>
              </el-card>
          </div>

          <div id="L2" class="table">
              <el-card class="box-card">
                  <div slot="header" class="clearfix">
                      <div class="tiao"></div> <span class="text_table">身边的榜样，启迪我前行</span>
                      <!--                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                  </div>
                  <div v-for="(item, index) in card2" :key="index" class="text item">
                      <a v-bind:href="item.href">{{item.name}}</a>
                  </div>
              </el-card>
          </div>
          <div id="L3" class="table">
              <el-card class="box-card">
                  <div slot="header" class="clearfix">
                      <div class="tiao"></div>  <span class="text_table">个人成长，见证社会发展</span>
                      <!--                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                  </div>
                  <div v-for="(item, index) in card3" :key="index" class="text item">
                      <a v-bind:href="item.href">{{item.name}}</a>
                  </div>
              </el-card>
          </div>
          <div id="L4" class="table">
              <el-card class="box-card">
                  <div slot="header" class="clearfix">
                      <div class="tiao"></div>  <span class="text_table">中国共产党领导下的伟大变革</span>
                      <!--                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
                  </div>
                  <div v-for="(item, index) in card4" :key="index" class="text item">
                      <a v-bind:href="item.href">{{item.name}}</a>
                  </div>
              </el-card>
          </div>
      </div>
</div>
</template>

<script>
export default {
    name: "CarouselV",
    data (){
        return {
            list :
                [
                    // 'https://ts1.cn.mm.bing.net/th/id/R-C.1d2d10282cfe11fa9339d445a31f9110?rik=uFeYRP9u9qUuFA&riu=http%3a%2f%2fimages.china.cn%2fattachement%2fjpg%2fsite1000%2f20170504%2f6c0b8408cdd81a74d1c95b.jpg&ehk=VuAVFCNcSgFfxP%2fe0nPqloDC7mv10Ldpfjp%2ffe77PSM%3d&risl=&pid=ImgRaw&r=0',
                    'https://file.rrxh5.cc/2016/11/14/1479101893322.png',
                    '/img/download.png',
                  /*  'E:\\项目\\untitled1\\网页设计大赛\\sys\\public\\img\\1111.png',*/
                    'https://ts1.cn.mm.bing.net/th/id/R-C.9ac6993c8203d15d5f91385d3b40ee7c?rik=oc%2fqNDVt%2b0Z86Q&riu=http%3a%2f%2fwww.bzuu.edu.cn%2f_upload%2farticle%2fimages%2faf%2f0a%2f0fd3d8cf46d59d57c05668135079%2fcae1ed89-3714-4c9d-92f9-877a58340fb2_d.png&ehk=0hbZ6iQEnaRD4sPDoIErEcWt24wG6%2bfWoamOMa3ikDk%3d&risl=&pid=ImgRaw&r=0'
                ],

            card1:[
                    {
                        name : "自信自强 守正创新——新时代中国特色社会主义伟大成就综述",
                        href:"https://www.gov.cn/xinwen/2021-07/24/content_5627100.htm"
                    },
                    {
                        name:"伟大时代的历史跨越（奋进新征程 建功新时代）",
                        href:"http://politics.people.com.cn/n1/2022/0218/c1001-32354373.html"
                    },
                    {
                        name:"感悟伟大成就 汲取奋进力量",
                        href:"http://politics.people.com.cn/n1/2022/1005/c1001-32539560.html"
                    },
                   /* {
                        name:"自信自强 守正创新——新时代中国特色社会主义伟大成就综述",
                        href:"https://www.gov.cn/xinwen/2021-07/24/content_5627100.htm"
                    },
                    {
                        name:"伟大时代的历史跨越（奋进新征程 建功新时代）",
                        href:"http://politics.people.com.cn/n1/2022/0218/c1001-32354373.html"
                    },*/
                ],
            card2:[ { name : "向榜样看齐 行奋斗之路", href:"https://difang.gmw.cn/2022-03/03/content_35561274.htm" },
                    { name : "汲取榜样力量 砥砺奋进前行", href:"https://www.12371.cn/2022/07/06/ARTI1657073634014660.shtml" },
                    { name : "学习身边榜样,活动走深走实——汲取榜样力量 砥砺奋进前行", href:"https://www.hxw.gov.cn/content/2022/07/12/13840728.html" }
            ],
            card3: [
                {
                    name: "新时代的中国青年--时政--人民网",
                    href: "http://politics.people.com.cn/n1/2022/0421/c1001-32405095.html"
                },
                {
                    name: "新时代的中国青年_滚动新闻_中国政府网",
                    href: "https://www.gov.cn/zhengce/2022-04/21/content_5686435.htm"
                },
                {
                    name: "人民日报评论部：为实现中国梦贡献青春和力量--观点--人民网",
                    href: "http://opinion.people.com.cn/n1/2019/0430/c1003-31058386.html"
                }
            ],
            card4: [
                {
                    name: "新时代十年的伟大变革 - 求是网",
                    href: "http://www.qstheory.cn/dukan/qs/2022-11/16/c_1129126428.htm"
                },
                {
                    name: "人民日报整版观察：新时代10年的伟大变革--观点--人民网",
                    href: "http://opinion.people.com.cn/n1/2022/0909/c1003-32522719.html"
                },
                {
                    name: "新时代10年的伟大变革及重大意义 - 求是网",
                    href: "http://www.qstheory.cn/dukan/hqwg/2022-11/26/c_1129162101.htm"
                }
            ]

        }
    }
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}




.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
.table{
    text-align: left;
    float: left;
    margin: 20px;
}
.tiao{
    display: inline-block;
    margin-top: -2px;
    content: "";
    float: left;
    background: red;
    margin-left: 38px;
    width: 2px;
    height: 25px;

}
.text_table{
    margin: 20px;
    color: red;
    font-weight: 700;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}

.box-card {
    width: 480px;
}
</style>
