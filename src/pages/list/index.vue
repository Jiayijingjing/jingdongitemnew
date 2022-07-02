<template>
  <div class="total">
    <div class="main">
        <div class="main_text">
            <div class="main_1">
                <Nav />
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
  props: {
    
  },
  methods:{
    
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

</style>
