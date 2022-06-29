<template>
  <div class="top">
    <div class="top_main">
        <div class="top_pisition">浙江</div>
        <div class="top_shoose">
            <div class="top_choose_inner">
                <div>请登录</div>
                <div>免费注册</div>
                <div>我的订单</div>
                <div>我的京东</div>
                <div>京东会员</div>
                <div>企业采购</div>
                <div>客户服务</div>
                <div>网站导航</div>
                <div>手机京东</div>
                <div>网站无障碍</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'top',
  data() {
    return {

    };
  },
  computed:{

  },
  watch:{

  },
  methods: {
    
  },
};
</script>

<style scoped>
.top{
    width: 100%;
    background-color: rgb(245, 241, 241);
    height: 30px;
    font-size: 14px;
    color: rgb(139, 137, 137);
}
.top_main{
    width: 1190px;
    height: 30px;
   
    margin: 0 auto;
    display: flex;
    flex-direction: wrap;
    flex-direction: row;
    justify-content: space-between;
}
.top_pisition{

    width: 60px;
    height: 30px;
    line-height: 30px;
   
}
.top_shoose{
    width: 850px;
    height: 30px;
    
    display: flex;
    flex-direction: wrap;
   
    justify-content: center;
    align-items: center;
}
.top_choose_inner{
    display: flex;
    flex-direction: wrap;
    width: 850px;
    height: 18px;
    
}
.top_choose_inner :nth-child(n+2){
    border-left: 1px solid #ccc;
}
.top_choose_inner div{
    flex:1;
    text-align: center;
    height: 18px;
}
.top_ch{
    width: 850px;
    height: 40px;
}
</style>
