<template>
   <div class="total_main">
        <div class="head">
            <div class="head_img" >
                <div class="head_tu"><img src="./img/jing.png"   @click="gotohome" /></div>
                 <div class="totalsold" @mouseover="showsanji"  @mouseleave="nosanji" > 
                     
                    <div class="totalbiaoti">全部商品分类</div>
                    <div class="sanjishowlist" v-show="sanjilistshowa">
                        <div class="main_1_1" @mousemove="erjilistshow" @mouseout="erjinone" @mouseleave="deleteblue" >
                                <div class="main_1_1_1" >
                                    <div @mouseenter="changeblue(1)" index=1 :class="{blue:changeIndex == 1}" >家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(2)" index=2 :class="{blue:changeIndex == 2}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(3)" index=3 :class="{blue:changeIndex == 3}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(4)" index=4 :class="{blue:changeIndex == 4}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(5)" index=5 :class="{blue:changeIndex == 5}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(6)" index=6 :class="{blue:changeIndex == 6}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(7)" index=7 :class="{blue:changeIndex == 7}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(8)" index=8 :class="{blue:changeIndex == 8}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(9)" index=9 :class="{blue:changeIndex == 9}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(10)" index=10 :class="{blue:changeIndex == 10}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(11)" index=11 :class="{blue:changeIndex == 11}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(12)" index=12 :class="{blue:changeIndex == 12}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(13)" index=13 :class="{blue:changeIndex == 13}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(14)" index=14 :class="{blue:changeIndex == 14}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(15)" index=15 :class="{blue:changeIndex == 15}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(16)" index=16 :class="{blue:changeIndex == 16}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(17)" index=17 :class="{blue:changeIndex == 17}">家用电器/运营商/数码</div>
                                    <div @mouseenter="changeblue(18)" index=18 :class="{blue:changeIndex == 18}">家用电器/运营商/数码</div>
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
            </div>
            <div class="head_search">
                <div class="search"><input type="text" value="111" v-model="searchvalue" ref="searchvalue" @change="searchinput"/></div>
                <div class="btn_search" @click="gotosearchhome" >搜索</div>
                <div class="search_tishi">
                    <div>环球影城</div>
                    <div>环球影城</div>
                    <div>环球影城</div>
                    <div>环球影城</div>
                    <div>环球影城</div>
                    <div>环球影城</div>
                    <div>环球影城</div>
                </div>
                <div class="main_btn">
                    <div>秒杀</div>
                    <div>优惠券</div>
                    <div>PLUS会员</div>
                    <div>品牌闪购</div>
                    <div>拍卖</div>
                    <div>京东家电</div>
                    <div>京东超市</div>
                    <div>京东生鲜</div>
                    <div>京东国际</div>
                    <div>京东云</div>
                </div>
            </div>
            <div class="shopcar">我的购物车</div>
            <div class="erweima"><div></div></div>
        </div>
    </div>
</template>

<script>
import _ from "lodash"


export default {
  name: '',
  data() {
    return {
        searchvalue:"",
        sanjishowbtn:true,
        erjishow:false,
        changeIndex:-1,
        sanjilistshowa:true,
        
    };
  },
 
  watch:{
     $route: {
         // 监听路由参数
         handler(newvalue,oldvalue){
                
             if(newvalue.name !== 'home'){
                 this.sanjilistshowa = false;
                 
             }else{
                this.sanjilistshowa = true;
             }
         },
        
     }

  
  },
  methods: {
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
    showsanji(){
        if(this.$route.name == 'searchlist')  {
        this.sanjilistshowa = true;
          
        }
    },
    nosanji(){
        if(this.$route.name == 'searchlist'){
            this.sanjilistshowa = false;
        }
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
  mounted : function(){
    // if(this.$route.name == 'home')  {
    //     this.sanjilistshowa = true;
          
    // }
    this.showsanji();
  },
  
};
</script>

<style scoped>
 .total_main{
    width: 1190px;
    margin:0 auto;
}
.head{
    width: 100%;
    height: 134px;
    background-color: white;
    display: flex;
    flex-direction: wrap;
}
.head_img{
    margin-right: 30px;
    display: flex;
    flex-direction: column;
}
.head_tu img{
    width: 98px;
    height: 98px;
     background-image: url('./img/jing.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 9999999;
}
.totalsold{
    width: 190px;
    
    background-color: rgb(184, 4, 4);
    text-align: center;
    z-index: 9999999;
}
.totalbiaoti{
    font-size: 16px;
    color:white;
    font-weight: 700;
    line-height: 34px;
    height: 34px;
}
.sanjishowlist{
    background-color: red;
    color:black;
    
  
    z-index: 9999;
}
.head_search{
    margin-top: 18px;
    width:620px ;
    height: 32px;
    position: relative;

}
.search{
    width: 578px;
    height: 28px;
    line-height: 28px;
    border: 2px solid red;
    position: relative;
    margin-left: 40px;
   
}
.search input{
    width: 480px;
    height: 28px;
    position: absolute;
    left: 20px;
  
}

.btn_search{
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    line-height: 32px;
    width: 56px;
    background-color: red;
    color: white;
    font-size: 14px;
}
.shopcar{
    flex:0.5;
    margin-top:18px;
    margin-left: 30px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    color: red;
    border: 1px solid rgb(226, 226, 226);
}
.erweima{
    width: 90px;
    height: 90px;
    margin-left: 60px;
    margin-top: 4px;
    position: relative;
    box-shadow: 
    0px -3px 6px 0px  #fffefe, 
    3px 0px 3px 0px  #f0efef, 
    0px 3px 8px 0px  #f0efef,
    0px 3px 8px 0px  #f0efef;
    background-color: white;
}
.erweima div{
        width:76px;
        height: 76px;
        position: absolute;
        top: 7px;
        left: 7px;
        background-image: url('./img/erwei.png');
        background-size: 100% 100%;
}
.search_tishi{
    width: 640px;
    display: flex;
    flex-direction: wrap;
    height: 30px;
    line-height: 30px;
    margin-top: 6px;
    font-size: 14px;
    color: rgb(160, 158, 158);
    padding-left: 40px;
}

.search_tishi :nth-child(1){
    color: red;
}
.search_tishi div{
    margin-left: 6px;
}
.main_btn{
    height: 50px;
    width: 690px;
    flex-direction: wrap;
    display: flex;
}
.main_btn div{
    padding-right: 5px;
    font-size: 15px;
    margin-right: 12px;
    height: 50px;
    line-height: 50px;
    
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
