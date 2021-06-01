<template>
  <div class="home-view-wrap">
      <!-- HOME! -->
      <canvas class="canvas"></canvas>
      <div class="main-wrap">
        <tool-bar></tool-bar>
        <section class="main-content-wrap">
            <div class="main-slogan">
                <!-- {{this.$route.path}} -->
                <h2>Flow</h2>
                <p>Live Colorfully In Flow Of Life.</p>
                <span>다채롭게 흐르다.</span>
            </div>
        </section>
      </div>
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar'
import canvasWork from '../js/canvasWork.js'

export default {
  components: {
      'tool-bar': Toolbar,
    },
  watch: {
      '$route'(to, from){
        // console.log(to)
        // console.log(from)
        // console.log(this.$route.path)
        // console.log(this.$store.state.crrPath)
        // console.log(`APP라우트와치 ${this.$route.path}`)
        if(from.path == '/home' && to.path !== '/home'){
          // console.log('애니메이션 중지하고 싶어요')
          // let stopWorkValue = 0;
          // this.$store.state.flowColor = this.bgWork(stopWorkValue)
          // console.log(this.$store.state.flowColor)
          // 애니메이션으로 인한 버벅거림 - 임시방편으로 리로드함 21.3.31
          if(to.path == '/work'){
            window.location.href='https://leehj.netlify.app/work';
          }else if(to.path == '/about'){
            window.location.href='https://leehj.netlify.app/work';
          }
        }
      }
  },
  mounted(){
    // console.log(this.$route.path)
    console.log(`crrpath현재경로 ${this.$store.state.crrPath}`)
    canvasWork()
    let stopWorkValue = 1;
    this.$store.state.flowColor = this.bgWork(stopWorkValue)
    // this.bgWork()
  },
  methods:{
    bgWork(stopWorkValue){
      console.log(stopWorkValue)
      return this.$store.state.flowColor = canvasWork(stopWorkValue)
    }
  },
  // beforeUnmounted() { 
  //   console.log('beforeunmounted'); 
    
  //   let stopWorkValue = 0;
  //   this.bgWork(stopWorkValue)
  // }
}
</script>

<style scoped>
html {
  height: 100vh;
  min-width: 1440px;
  font-family: 'Noto Sans KR', sans-serif;
  overflow: hidden;
}
body {
  height: 100vh;
  min-height: 600px;
}
.home-view-wrap {
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-color: rgb(37, 139, 235);
  background-color: #5270FB;
  overflow: hidden;
}
canvas {
    width: 100%;
    height: 100%;
}
.main-wrap{
  width: 100%;
  min-width: 1440px;
  height: 100vh;
  min-height: 600px;
  position: absolute;
  top:0;
  bottom: 0;
  /* border: 1px solid red; */
}
.main-content-wrap{
  /* width: calc(100% - var(--col) * 2); */
  /* height: max(90vh, 100vh - 75px); */
  /* margin: 0 auto; */
  /* border: 1px solid white; */
  /* display: flex;
  align-items: center; */
  max-width: calc(1440px - var(--col) * 2);
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  /* left: var(--col); */
  
}
.main-slogan {
  /* margin-top: 75px; */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #efefef
}
.main-slogan > h2 {
  font-size: 80px;
  margin-top: -10px;
}
/* .main-slogan > span {
 
} */
.main-slogan > p {
  font-size: 20px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  padding-bottom: 8px;
}
</style>