<template>
<div class="main">
<div class="line"></div>
  <div class="search_home">
    <div class="biaogetitle">全部结果</div>
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

  </div>
  </div>
</template>

<script>
export default {
  name: 'Searchhome',
  props: {
    
  },
  methods:{
    jumpsanji(){
      
       this.$router.push({
             name: 'searchlist',
             query:{cccc:777,kkk:789}
         });
    }
  },
  mounted : function(){
    
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
  padding-left: 30px;
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
</style>
