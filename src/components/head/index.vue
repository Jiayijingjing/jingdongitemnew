<template>
   <div class="total_main">
        <div class="head">
            <div class="head_img" @click="gotohome">
                <div class="head_tu"><img src="./img/jing.png"   /></div>
                <div class="totalsold" @mouseover="showsanji"  @mouseleave="nosanji" >
                    <div class="totalbiaoti">全部商品分类</div>
                    <div class="sanjishowlist" >
                        <Nav v-show="sanjishowbtn"/>
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
export default {
  name: '',
  data() {
    return {
        searchvalue:"",
        sanjishowbtn:false
    };
  },
  computed:{
  },
  watch:{
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
        if(this.$route.name == 'searchlist'){
            this.sanjishowbtn = true;
        }
    },
    nosanji(){
        if(this.$route.name == 'searchlist'){
            this.sanjishowbtn = false;
        }
    }

  },
  mounted : function(){
    
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
    margin-right: 90px;
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
    line-height: 24px;
    height: 24px;
}
.sanjishowlist{
    background-color: red;
    color:black;
    margin-top:10px;
  
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
</style>
