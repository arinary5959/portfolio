<template>
  <div class="workview">
      <toolbar-type2></toolbar-type2>
      <section class="primary_quickmenu">
        <div class="quickmenu">
          <div class="quickmenu_item">
            <div class="quickmenu_img">
              <img src="../assets/WorkIcon/clonecoding_color.png" alt="">
            </div>
            <div class="quickmenu_text">
              <h4>Clone Coding</h4>
              <p>:웹사이트 클론 코딩</p>
              <span>:Html5, Css3, Javascript</span>
              <ul class="quickmenu_list">
                <li>
                  <strong>Starbucks</strong>
                  <!-- <router-link to="/work">Starbucks</router-link> -->
                </li>
                <li>
                  <strong>Microsoft</strong>
                    <!-- <router-link to="/work">MicroSoft</router-link> -->
                </li>
                <li>
                  <strong>KaKao.Corp</strong>
                    <!-- <router-link to="/work">KaKao.CORP</router-link> -->
                </li>
                <li>
                  <strong>Naver.Corp</strong>
                </li>
              </ul>
          </div>
          </div>
          <div class="quickmenu_item">
            <div class="quickmenu_img">
              <img src="../assets/WorkIcon/project_color.png" alt="">
            </div>
            <div class="quickmenu_text">
              <h4>Toy Project</h4>
              <!-- <p>:개인 프로젝트 &amp; 팀 프로젝트</p> -->
              <p>:개인 프로젝트</p>
              <span>:Vue, API, Html5, Css3, Javascript</span>
              <ul class="quickmenu_list">
                <li>
                  <strong>Weather_오류수정중</strong>
                  <!-- <router-link to="/work">Starbucks</router-link> -->
                </li>
                <li>
                  <strong>ToDoList</strong>
                    <!-- <router-link to="/work">MicroSoft</router-link> -->
                </li>
                <li>
                  <!-- <strong>PetTaxi</strong> -->
                    <!-- <router-link to="/work">KaKao.CORP</router-link> -->
                </li>
                <!-- <li>
                  <strong>MyPlayRecord</strong>
                </li> -->
              </ul>
            </div>
          </div>
          <div class="quickmenu_item">
            <div class="quickmenu_img">
              <img src="../assets/WorkIcon/uicodig_color.png" alt="">
            </div>
            <div class="quickmenu_text">
              <h4>Play With Code</h4>
              <p>:기능 구현</p>
              <span>:Vue, Html5, Css3, Javascript </span>
              <ul class="quickmenu_list">
                <li>
                  <strong>H-Slider</strong>
                  <!-- <router-link to="/work">Starbucks</router-link> -->
                </li>
                <li>
                  <strong>Login-Api</strong>
                  <!-- <router-link to="/work">MicroSoft</router-link> -->
                </li>
                <li>
                  <strong>Calendar</strong>
                  <!-- <router-link to="/work">KaKao.CORP</router-link> -->
                </li>
                <li>
                  <strong>Calculator_구현중</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!-- 컴포넌트 -->
      <section class="primary_workitems">
        <work-item v-bind:propsdata="$store.state.cloneItems"></work-item>
      </section>
      <section class="primary_workitems">
        <work-item v-bind:propsdata="$store.state.projectItems"></work-item>
      </section>
      <section class="primary_workitems">
        <work-item v-bind:propsdata="$store.state.uiItems"></work-item>
      </section>
      <aside>
        <div class="to_top">
          <span>TOP</span>
        </div>
      </aside>
  </div>
</template>

<script>
import ToolbarType2 from '../components/ToolbarType2.vue'
import WorkItem from '../components/WorkItem.vue'
import Works from '../js/Works.js'

export default {
  components: {
    'toolbar-type2': ToolbarType2,
    WorkItem
  },
  watch: {
    '$route'(to, from) {
      console.log(from)
      console.log(to)
    }
  },
  mounted(){
      // console.log(this.$store.state.cloneItems.length)
      let itemCount = this.$store.state.cloneItems.length + this.$store.state.projectItems.length + this.$store.state.uiItems.length
      // console.log(itemCount)
      Works(itemCount) 
      
  },
}
</script>

<style scoped>
.workview{
  width: 100%;
  min-width: 1440px;
  /* height: 100vh; */
  min-height: 600px;
  /* background-color: rgb(255, 190, 93); */
}
.workview section {
  width: 100%;
  /* background-color: rgb(255, 200, 200); */
}
.workview > .primary_quickmenu {
  /* width: calc(100% - var(--col) * 2); */
  /* width: 100%;
  max-width: 1440px; */
  /* min-width: 1440px; */
  margin: 0 auto;
  height: min(100vh - 10vh, 100vh - 80px);
  min-height: 600px;
  position: relative;

}
.quickmenu {
  width: 100%;
  /* border:1px solid black; */
  margin: 0 auto;
  text-align: center;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
}
.quickmenu_item {
  /* border:1px solid red; */
  width: calc(var(--col) * 3);
  vertical-align: top;
  display: inline-block;
  vertical-align: top;
}
.quickmenu_item:nth-child(2){
  margin: 0 30px 0;
}
.quickmenu_img{
  width: var(--col);
  display: inline-block;
}
.quickmenu_img > img{
  width:100%;
}
.quickmenu_text h4 {
  font-size: 2.4rem;
  margin-top: 16px;
}
.quickmenu_text p {
  font-size: 1.8rem;
  margin:10px 0 4px;
}
.quickmenu_text span {
  font-size: 1.8rem;
}
.quickmenu_text ul {
  margin-top: 24px;
}
.quickmenu_text .quickmenu_list li {
  font-size: 1.8rem;
  margin-top:16px;
  cursor: pointer;
  /* color: #5270FB; */
  /* text-decoration: underline; */
}
.quickmenu_text .quickmenu_list li:hover {
  text-decoration: underline;
  /* color: #258BEB; */
  /* color: #3C5064; */
  /* color: var(--navColor); */
  color: #5270FB;
}
.primary_clonecoding {
  width: calc(100% - var(--col) * 2);
  margin: 0 auto;
}
aside{
  width: 100vw;
  min-width: 1440px;
  max-width: 1440px;
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  /* border: 1px solid green; */
  /* text-align: right; */
}
aside .to_top {
  width: 50px;
  height: 50px;
  border-radius: 50% 50%;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, .1);
  text-align: center;
  /* margin-right: var(--col); */
  float: right;
  cursor: pointer;
  /* position: fixed;
  right: 10%;
  bottom: 10%;
   */
}
aside .to_top span {
  font-size: 1.8rem;
  line-height: 50px;
  vertical-align: middle;
  color: #ADB5BD;
}
</style>