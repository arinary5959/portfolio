<template>
  <div class="wrap">
    <router-view></router-view>
  </div>
</template>

<script>
// import Toolbar from './components/Toolbar.vue'
// import canvasWork from './js/canvasWork.js'


export default {
  name: 'App',
  // components: {
  //   'tool-bar': Toolbar,
  // }
  watch: {
    '$route'(to, from){
      console.log(from)
      console.log(to)
      console.log(`APP라우트와치 ${this.$route.path}`)
      this.$store.state.crrPath = this.$route.path
// mounted 될 때마다canvasWork가 실행, /home시 리로드하는 방식으로 우회함.
      // if((from.path == '/work' || from.path == '/about') && to.path == '/home'){
      //   // document.location.href='http://localhost:8080/home';
      //   // console.log('home으로 이동했다')
      //   window.location.reload()
      // }
      // console.log(this.$store.state.flowColor)
    // window.onpageshow = function(event) {
    //   console.log('페이지쇼')
    //   console.log(event.persisted)
    //   if(event.persisted == false){
    //     // window.location.reload()
    //     // document.location.href='http://localhost:8080/home';
    //   }
    // }
    }
  },
}
</script>

<style>
/* 공통 common css */
@font-face {
    font-family: 'S-CoreDream-8Heavy';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-8Heavy.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
/* 변수 */
/* 1440grid columns 12, gutter 12px, margin 0, col width: 109px */
:root{
    --col: calc(109px + 12px);
    --navColor: rgb(52, 58, 64);
    --color: rgb(255, 111, 111);
}
html {
  width: 100%;
  height: 100%;
  min-width: 1440px;
  font-family: 'Noto Sans KR', sans-serif;
}
body {
  width: 100%;
  height: 100%;
  min-width: 1440px;
  -ms-overflow-style:none;
}
body::-webkit-scrollbar { display:none; }
.wrap{
  width: 100%;
  height: 100%;
  min-width: 1440px;
  min-height: 600px;
}

</style>
