<template>
<div class="main">
<div class="line"></div>
  <div class="search_home">
    <div class="biaogetitle">
        <div>全部结果</div>
        <div v-if="aaa" @click="deleme">{{aaa}}</div>
       
    </div>
    <div class="biaoge">
      <div class="biaoti">
        <div class="biaogehui" @click="jumpsanji">品牌</div>
        <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
      </div>
       <div class="biaoti" @click="jumpsanji">
        <div class="biaogehui">品牌</div>
        <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
      </div>
       <div class="biaoti" @click="jumpsanji">
        <div class="biaogehui">品牌</div>
        <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
      </div>
       <div class="biaoti">
        <div class="biaogehui">品牌</div>
        <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
      </div>
      <div class="biaoti">
        <div class="biaogehui">品牌</div>
        <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
      </div>
      <div class="biaoti">
        <div class="biaogehui" >品牌</div>
        <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
      </div>
      <div class="biaoti">
        <div class="biaogehui">品牌</div>
        <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
      </div>
      <div class="biaoti">
        <div class="biaogehui">品牌</div>
        <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
      </div>
      <div class="biaoti">
        <div class="biaogehui">品牌</div>
        <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
      </div>
       <div class="biaoti biaogelast" >
        <div class="biaogehui">品牌</div>
        <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
         <div>小米</div>
      </div>
    </div>
    <div class="paixu">
      <div class="zonghe" @click="paixulist" :class="{redlist:redinfo == 1}" data-in=1>综合<span >排序</span></div>
      <div class="price" @click="paixulist" :class="{redlist:redinfo ==2}" data-in=2>价格<span >排序</span></div>
    </div>
    <div class="ceshimingmingkongjian">{{ceshidataa }}+{{ceshidatab }}</div>
    <i class="el-icon-upload2"></i>
   <div>
    <el-button @click="show2 = !show2">点击我</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-zoom-in-center">
        <div v-show="show2" class="transition-box">测试1</div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="show2" class="transition-box">测试2</div>
      </transition>

      <transition name="el-zoom-in-bottom">
        <div v-show="show2" class="transition-box">测试3</div>
      </transition>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Searchhome',
  props: {
    
  },
  computed:{
    aaa(){
      return this.$store.state.home.ddd;
    },
    ...mapGetters('home',['ceshidataa','ceshidatab']),
   
  },
  data(){
    return {
      paramshow:false,
      paramval:'',
      redinfo:1,
       show2: true
    }
      
  },
  methods:{
    jumpsanji(){
      
       this.$router.push({
             name: 'searchlist',
             query:{cccc:777,kkk:789}
         });
    },
    deleme(){
      this.$store.state.home.ddd = '';
      this.$store.state.home.inputdom.value = '';
      this.$router.push({
             name: 'searchlist',
            
         });
    },
    paixulist(e){
      
      this.redinfo = e.currentTarget.dataset.in;
      
    }
  },
  mounted : function(){
     if(this.$route.params.keyword){
            this.paramshow = true;
            this.paramval = this.$route.params.keyword;
      }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  width:100%;
  height: 800px;

}
.line{
  width:100%;
  height: 1px;
  border-top:1px solid red;
}

.biaogetitle{
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
}
.biaogetitle div{
  width: 120px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.search_home{
  width: 1190px;
  height: 800px;
  
  margin:0 auto;
}

.biaoti{
  display: flex;
  flex-direction: row;
  border-top: 1px solid rgb(230, 229, 229) ;
  border-right:1px solid rgb(230, 229, 229) ;
}
.biaoti div{
  width:100px;
  height: 60px;
  line-height: 60px;
  text-align:center;
  
}
.biaogehui{
  background-color: rgb(250, 250, 250);
  border-left:1px solid rgb(230, 229, 229) ;
  border-right: 1px solid rgb(230, 229, 229) ;
}
.biaogelast{
  border-bottom:1px solid rgb(230, 229, 229) ;
}
.paixu{
  display: flex;
  flex-direction: row;
  font-size:16px;
 
}
.paixu div{
  width: 100px;
  height: 30px;
  line-height: 30px;
  border: 4px solid rgb(240, 124, 124);
  text-align: center;
   margin-right:30px;
   margin-top:20px;
}
.paixu span{
  color:rgb(109, 3, 3);
  font-weight: 800;
  point-events: none;
}
.redlist{
  background-color:rgb(240, 124, 124);
}
.ceshimingmingkongjian{
  height: 12px;
  line-height: 12px;
 
}
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }

</style>
