<template>
  <div class="total">
    <div class="main">
        <div class="main_text">
            <div class="main_1">
                <div class="aaa">
                    <div class="sanjishowlist"  @mouseleave="deleteblue">
                        <div class="main_1_1" @mousemove="erjilistshow" @mouseout="erjinone" >
                                <div class="main_1_1_1" >
                                    <div @mouseenter="changeblue(1)" index=1 :class="{blue:changeIndex == 1}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(2)" index=2 :class="{blue:changeIndex == 2}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(3)" index=3 :class="{blue:changeIndex == 3}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(4)" index=4 :class="{blue:changeIndex == 4}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(5)" index=5 :class="{blue:changeIndex == 5}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(6)" index=6 :class="{blue:changeIndex == 6}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(7)" index=7 :class="{blue:changeIndex == 7}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(8)" index=8 :class="{blue:changeIndex == 8}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(9)" index=9 :class="{blue:changeIndex == 9}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(10)" index=10 :class="{blue:changeIndex == 10}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(11)" index=11 :class="{blue:changeIndex == 11}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(12)" index=12 :class="{blue:changeIndex == 12}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(13)" index=13 :class="{blue:changeIndex == 13}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(14)" index=14 :class="{blue:changeIndex == 14}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(15)" index=15 :class="{blue:changeIndex == 15}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(16)" index=16 :class="{blue:changeIndex == 16}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(17)" index=17 :class="{blue:changeIndex == 17}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(18)" index=18 :class="{blue:changeIndex == 18}" >家用电器/运营商/数码</div>
                                </div>
                                <div class="erji" v-show="erjishow">
                                    <div class="erji_title">
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                    </div>
                                    <div class="erji_list">
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                    </div>
                                    <div class="erji_list">
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                    </div>
                                    <div class="erji_list">
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                    </div>
                                    <div class="erji_list">
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                    </div>
                                    <div class="erji_list">
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                    </div>
                                    <div class="erji_list">
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                        <div @click="searchlist_2" data-search="5">箱包</div>
                                    </div>

                                </div>
                            </div>
                    </div>
                </div>
                <div class="main_hui"></div>
                <div class="main_1_2">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="./img/datu.jpg" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./img/zhutu02.jpg" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./img/zhutu03.jpg" />
                            </div>
                        </div>
                        <!-- 如果需要分页器 -->
                        <div class="swiper-pagination">1</div>
                        
                        <!-- 如果需要导航按钮 -->
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                        
                        <!-- 如果需要滚动条 -->
                        <!-- <div class="swiper-scrollbar"></div> -->
                    </div>
                </div>
                <div class="main_hui"></div>
                <div class="main_1_3">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="main_hui"></div>
                <div class="main_1_4">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="hui"></div>
            <div class="main_2">
                <div class="main_2_1"></div>
                <div class="main_2_2">
                    <div class="shui">
                        <div><img src="./img/jing.png" /></div>
                        <div>亿能 加锌无糖无汽弱碱 </div>
                        <div>￥43.90</div>
                    </div>
                    <div class="shui">
                        <div><img src="./img/jing.png" /></div>
                        <div>亿能 加锌无糖无汽弱碱 </div>
                        <div>￥43.90</div>
                    </div>
                    <div class="shui">
                        <div><img src="./img/jing.png"  /></div>
                        <div>亿能 加锌无糖无汽弱碱 </div>
                        <div>￥43.90</div>
                    </div>
                    <div class="shui">
                        <div><img src="./img/jing.png"  /></div>
                        <div>亿能 加锌无糖无汽弱碱 </div>
                        <div>￥43.90</div>
                    </div>     
                </div>
                <div class="main_2_3">
                    <div><img src="./img/jing.png"  /></div>
                    <div>京东药房秒杀专场 </div>
                    <div>品类秒杀</div>
                </div>
            </div>
            <div class="hui"></div>
            <div class="main_3">
                <div class="main_3_1">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';


export default {
  name: 'HelloWorld',
 data() {
    return {
        searchvalue:"",
        sanjishowbtn:true,
        erjishow:false,
        changeIndex:-1,
        
    };
  },
  props: {
    
  },
  methods:{
    gotosearchhome(){
        this.$router.push({
            name:'searchlist',
            params:{keyword:this.searchvalue || undefined }  //undefined 解决所传数据为空字符串报错
        })
    },
    gotohome(){
        
        this.$router.push({
            name:'home'
        })
        this.searchvalue='';
    },
    searchinput(){
        this.$store.state.home.bbb=this.$refs.searchvalue;
    },
    
    erjilistshow(){
        this.erjishow = true;
    },
    erjinone(){
        this.erjishow = false;

    },
  
        //用户移入某一个一级分类元素的索引值
        //正常情况（用户缓慢操作）：鼠标移入，每一个一级分类h3，都会触发鼠标进入事件
        //非正常情况（用户操作过快）：本身全部一级分类都应该触发鼠标进入事件，但经过测试，只有部分h3触发
        //由于用户操作过快，导致浏览器反应不过来，如果当前回调函数中有一些大量业务，有可能出现卡顿现象
        //防抖   lodash插件  大于这个时间间隔才会触发 把频繁触发变成少量触发 _.debounce(function(){ },1000)
        //节流 lodash插件    前面触发都取消 最后一次执行在规定时间之后才会触发，就是快速触发只会执行一次  _.throttle(function(){},1000) 使用此功能给三级联动 
   
    changeblue:_.throttle(function(index){
        this.changeIndex = index;
    },50),

    deleteblue(){
        this.changeIndex = -1;
    },
    searchlist_2(e){
        let a = e.target.dataset.search;
        this.$router.push({
            name:'searchlist',
            query:{searchval: a}  //undefined 解决所传数据为空字符串报错
        })
    },
  },
  components:{
  
  },
  mounted(){
    var mySwiper = new Swiper ('.swiper-container ', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        clickable:true,
        },
        
        // 如果需要前进后退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        // scrollbar: {
        // el: '.swiper-scrollbar',
        // },
    })        
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aaa{
    width: 190px;
    height: 450px;
}
.total{
  
    margin: 0 auto;
    background-color: white;
    
}

.main{
    width: 100%;
    
    background-color: rgb(245, 243, 243);
    position: relative;
    border-top:1px solid rgb(228, 227, 227);
    padding-top: 10px;
}
.main_text{
    width: 1190px;
    
    margin: 0 auto;
    background-color: white;
}
.main_1{
    width: 100%;
    height:480px;
    display: flex;
    flex-direction: wrap;
}
.main_2{
    width: 100%;
    height:480px;
}

.hui{
    height: 30px;
    background-color:rgb(245, 243, 243); ;
}

.main_hui{
    width: 10px;
    height: 100%;
    background-color: white
}
.main_1_2{
    
    height: 480px; 
    
    
} 
.swiper-container {
   width:590px ;
   height: 480px;
} 
.swiper-slide img{
    width: 100%;
    height: 100%;
}
.main_1_3{
    width:190px;
    height: 480px;
}
.main_1_4{
    width:190px;
    height: 480px;
    word-wrap:break-word;
}

.main_1_3 :nth-child(1){
    background-image:url(./img/mini1.jpg);
    background-size: 100% 100%;
    width: 190px;
    height: 154px;
    margin-bottom: 9px;
}
.main_1_3 :nth-child(2){
    background-image:url(./img/mini1.jpg);
    background-size: 100% 100%;
    width: 190px;
    height: 154px;
    margin-bottom: 9px;
}
.main_1_3 :nth-child(3){
    background-image:url(./img/mini1.jpg);
    background-size: 100% 100%;
    width: 190px;
    height: 154px;
}
.main_1_4 :nth-child(1){
    background-image:url(./img/mini1.jpg);
    background-size: 100% 100%;
    width: 190px;
    height: 154px;
    margin-bottom: 9px;
}
.main_1_4 :nth-child(2){
    background-image:url(./img/mini1.jpg);
    background-size: 100% 100%;
    width: 190px;
    height: 154px;
    margin-bottom: 9px;
}
.main_1_4 :nth-child(3){
    background-image:url(./img/mini1.jpg);
    background-size: 100% 100%;
    width: 190px;
    height: 154px;
}
.main_2{
    height: 260px;
    flex-direction: wrap;
    display: flex;
}
.main_2_1{
    width: 190px;
    height: 260px;
    background-image: url(./img/miaosha.png);
    background-size: 100% 100%;
}
.main_2_2{
    width: 800px;
    height: 260px;
    display: flex;
    flex-direction:row;
    font-size: 12px;
}
.main_2_3{
    width: 140px;
    height: 240px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    padding-left: 30px;
    padding-right: 30px;
    background-image: linear-gradient(to top, #e7e6e6,#ffffff, white);
}
.shui :nth-child(1){
    width: 200px;  
    height: 170px;
    
}
.shui :nth-child(1) img{
    width: 140px;
    height: 140px;
    margin-top: 30px;
    margin-left:15px;
}
.shui :nth-child(2){
    width: 200px;  
    height: 18px;
    text-align: center;
    line-height: 18px;
    margin-top: 13px;

}
.shui :nth-child(3){
    width: 200px;  
    height: 26px;
    text-align: center;
    line-height: 26px;
    margin-top: 7px;
    color:red;
    font-weight: 800;
}
.main_2_3 div{
    width: 120px;
    
    
}
.main_2_3 img{
    width: 120px;
    height: 120px;
    margin-top: 20px;
}
.main_2_3 :nth-child(1){
    margin-right: 30px;
}
.main_2_3 :nth-child(2){
    height: 40px;
    line-height: 30px;
    margin-right: 30px;
    
}
.main_2_3 :nth-child(3){
    border-radius:20px;
    border: 1px solid red;
    line-height: 26px;
    text-align: center;
    width: 76px;
    margin-left: 22px;
    
}
.main_3{
    width: 100%;
    
}
.main_3_1{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap:wrap;
    width: 100%;
    
    background-color: rgb(245, 243, 243);
    
}
.main_3_1 div{
    width: 230px;
    height: 312px;
    background-image: url(./img/jing.png);
    background-size: 100% 100%;
    margin-bottom: 10px;
}
.main_1_1{
    width: 190px;
    height: 450px;
    padding-top: 15px;
    padding-bottom: 15px;
    position:relative;
    background-color: white;
    

}
.main_1_1_1 div{
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    padding-left: 18px;
}
.erji{
    width: 956px;
    height: 436px;
    position: absolute;
    left: 190px;
    top:0;
    background-color: white;
    padding: 20px;
    border: 2px solid rgb(228, 225, 225);
    z-index:999999999999999;
}
.erji_title{
    display: flex;
    flex-direction: row;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    color: white;
}
.erji_title div{
    width: 100px;
    text-align: center;
    background-color: rgb(58, 57, 57);
    margin-right:30px;
}
.erji_list {
    display: flex;
    flex-direction: row;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
}
.erji_list  div{
    width: 100px;
    text-align: center;
   
    margin-right:30px;
}
.blue{
    background-color: rgb(141, 199, 238);
}
</style>
