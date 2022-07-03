<template>
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
</template>

<script>
import Swiper from "swiper"; 

export default {
  name: '',
  data() {
    return {

    };
  },
  props:['list'],
  watch:{
    list:{
        immediate:true,
        handler(){
            this.$nextTick(( )=>{
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
            })
        }
    }
  },
  computed:{
    
  },
  watch:{
  },
  methods: {},
};
</script>

<style scoped>

</style>
