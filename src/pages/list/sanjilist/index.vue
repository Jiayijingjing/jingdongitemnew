<template>
  <div class="main_1_1" @mousemove="erjilistshow" @mouseout="erjinone" @mouseleave="deleteblue">
    <div class="main_1_1_1">
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
import _ from "lodash"

export default {
  name: 'sanjilist',
  data() {
    return {
        erjishow:false,
        changeIndex:-1
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
.blue{
    background-color: rgb(141, 199, 238);
}
</style>
