<template>
  <div class="main_1_1" @mousemove="erjilistshow" @mouseout="erjinone">
    <div class="main_1_1_1">
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
        <div>家用电器/运营商/数码</div>
    </div>
    <div class="erji" v-show="erjishow">
        <div class="erji_title">
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
        </div>
        <div class="erji_list">
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
        </div>
        <div class="erji_list">
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
        </div>
        <div class="erji_list">
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
        </div>
        <div class="erji_list">
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
        </div>
        <div class="erji_list">
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
        </div>
        <div class="erji_list">
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
            <div>箱包</div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'sanjilist',
  data() {
    return {
        erjishow:false
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
    erjilistshow(){
        this.erjishow = true;
    },
    erjinone(){
        this.erjishow = false;
    }
  },
};
</script>

<style scoped>
.main_1_1{
    width: 190px;
    height: 450px;
    padding-top: 15px;
    padding-bottom: 15px;
    position:relative;
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
</style>
