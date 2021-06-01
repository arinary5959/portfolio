<template>
  <div class="about-view-wrap">
    <div ref="gnbmenuwrap" class="gnbmenu_wrap">
      <!-- <toolbar-type2></toolbar-type2> -->
      <div class="gnbmenu">
        <div class="bar"></div>
        <nav class="gnbmenu">
          <div class="gnbbar"></div>
          <div class="gnbbar"></div>
          <div class="gnbbar"></div>
        </nav>
        <div class="bar"></div>
      </div>
      <div class="logo">
        <h1>HJLEE</h1>
      </div>
    </div>
    <section class="primary_1">
      <div ref="color_paint" class="color_paint">
        <div class="color_col_top max"></div>
        <div class="color_col_bottom max"></div>
        <div class="color_col_top half"></div>
        <div class="color_col_bottom half"></div>
        <div class="color_col_top half"></div>
        <div class="color_col_bottom half"></div>
        <div class="color_col_top max"></div>
        <div class="color_col_bottom max"></div>
        <div class="color_col_top max"></div>
      </div>
      <div class="info">
        <div class="info_title">
          <h4>WTAT'S YOUR COLR?</h4>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <p>
          <strong>당신의 색</strong>은 무엇인가요? <br />
          스텔라장의 노래 <strong>'What's Your Color'</strong>를 듣고 영감을 받았습니다. <br />
          예전에 읽었던 칙센트 미하이미하이의 <strong>'Folw'</strong>에 대해서도 깊이 생각해 보았습니다. <br />
          이 두 가지를 하나의 이야기로 묶고 싶었습니다. <br />
          <strong>흐르다와 색의 만남, 다채로운 삶의 흐름을 포트폴리오에 표현하고자 했습니다.</strong> <br />
          <br />
          책읽기와 드로잉북 낙서와 크로키를 하듯이 <br />
          인생이라는 책을, 드로잉북을 다채롭게 채우는 사람이고자 합니다. <br />
          웹개발이라는 길 위에 <strong>퍼블리셔로서 첫걸음</strong>을 내딛습니다. <br />
          <br />
          <strong>안녕하세요! 웹퍼블리셔 이현정입니다.</strong>
        </p>
      </div>
    </section>
      <!-- <section class="primary_2">
      </section> -->
  </div>
</template>

<script>
// import ToolbarType2 from '../components/ToolbarType2.vue'
export default {
  mounted(){
    // console.log(1)
    console.dir(this.$refs.color_paint)
    const colorPaint = this.$refs.color_paint
    const colorBars = this.$refs.color_paint.children
    const gnbMenuWrap = this.$refs.gnbmenuwrap
    console.dir(gnbMenuWrap)
    console.dir(colorPaint)
    console.dir(colorBars)
    window.setTimeout(()=>{
      for(let i = 0; i < colorBars.length; i++){
        if(colorBars[i].classList.contains('color_col_top')){
          colorBars[i].classList.add('top_to_bottom')
        }else if(colorBars[i].classList.contains('color_col_bottom')){
          colorBars[i].classList.add('bottom_to_top')
        }
      }
      
    },200)
    // window.setTimeout(()=>{
    //     gnbMenuWrap.classList.add('active')
    //   }, 1500)
  },
  // components: {
  //   'toolbar-type2': ToolbarType2,
  // },
}
</script>

<style scoped>
/* .gnbmenu_wrap{
  width: 100%;
  height: 0vh;
  min-height: 0px;
  overflow: hidden;
  transition: all 2s ease-in-out;
}
.gnbmenu_wrap.active{
  height: calc(10vh + 5vh);
  min-height: calc(75px + 10px);
} */
.about-view-wrap{
  width: 100%;
  min-width: 1440px;
}
.gnbmenu_wrap{
  width: 4%;
  min-width: 75px;
  min-height: 900px;
  /* height: 100vh; */
  position: fixed;
  z-index: 10000;
  top:0;
  bottom:0;
  right: 0;
  /* border:1px solid red; */
  background-color:white;
}
.gnbmenu_wrap > .gnbmenu{
  /* border:1px solid green; */
  position: absolute;
  top:50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);  
}
.gnbmenu_wrap > .gnbmenu > .bar{
  margin: 0 auto;
  width: 1px;
  height: 100px;
  background-color: var(--navColor);
  opacity: 0.4;
}
.gnbmenu_wrap > .gnbmenu > .bar:first-child{
  /* margin-top: 180px; */
  margin-bottom: 40px;
}
.gnbmenu_wrap > .gnbmenu > .bar:last-child{
  margin-top: calc(40px + 38px + 40px);
}
section.primary_1{
  max-width: calc(1440px - var(--col) * 2);
  margin:0 auto;
  overflow: hidden;
  /* border:1px solid red; */
  position: relative;
}
.gnbmenu_wrap > .gnbmenu > nav:after {
  content:"";
  display: block;
  clear: both;
}
.gnbmenu_wrap > .gnbmenu > nav{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.gnbmenu_wrap > .gnbmenu > nav > .gnbbar{
  /* width: 1px; */
  height: 38px;
  float: left;
  border-left:1px solid var(--navColor);
  /* background-color: var(--navColor); */
  /* opacity: 0.8; */
}
.gnbmenu_wrap > .gnbmenu > nav > .gnbbar:nth-child(2){
  /* border-left:2px solid var(--navColor); */
  margin: 0 8px;
  /* opacity: 1; */
}
.gnbmenu_wrap > .gnbmenu > nav > .gnbbar:nth-child(3){
  border-left:2px solid var(--navColor);
  /* margin: 0 8px; */
  /* opacity: 1; */
}
.gnbmenu_wrap > .logo{
  position: absolute;
  top: 80%;
  right: -12.5% ;
  transform: rotate(90deg);
}
.gnbmenu_wrap > .logo > h1{
  font-family: 'Poppins', sans-serif;
  font-size: 3.5rem;
  color: var(--navColor);
  font-weight: 700;
}
.color_paint {
  display: flex;
  justify-content: space-between;
}
.color_paint > div[class^=color_col_top]{
  width: 4%;
  height: 100vh;
  /* background-color:#25ccc9; */
  transform: translateY(-100vh);
  background-color:var(--navColor);
  transition: all 1.5s ease-in-out;
   opacity: .2;
}
.color_paint > div[class^=color_col_bottom]{
  width: 4%;
  height: 100vh;
  background-color:var(--navColor);
  transform: translateY(100vh);
  transition: all 1.5s ease-in-out;
  opacity: .1;
}
.color_col_bottom_1{
}
.color_paint > .color_col_top.max.top_to_bottom{
   transform: translateY(100vh);
}
.color_paint > .color_col_top.half.top_to_bottom{
   transform: translateY(100vh);
}
.color_paint > .color_col_bottom.max.bottom_to_top{
   transform: translateY(-100vh);
}
.color_paint > .color_col_bottom.half.bottom_to_top{
   transform: translateY(-100vh);
}
.info{
  position: absolute;
  top:50%;
  transform: translateY(-50%);
}
.info h4{
  font-size: 80px;
}
.info .info_title{
  width: fit-content;
  position: relative;
  /* border: 1px solid green; */
}
.info > .info_title > .bar{
  height: 6px;
  background-color: var(--navColor);
  position: absolute;
}
.info .info_title .bar:nth-child(2){
  width: 260px;
  right: -20px;
  bottom: -6px;
}
.info > .info_title > .bar:nth-child(3), .info .bar:nth-child(4){
  width: 6px;
  right: -30px;
  bottom: -6px;
}
.info > .info_title > .bar:nth-child(4){
  right: -40px;
}
.info p{
  font-size: 2.8rem;
  margin: 60px 0 0;
  line-height: 1.5;
  /* text-indent: 1.4rem */
}
</style>