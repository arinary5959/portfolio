 /*eslint-disable*/
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './routes/index.js'; // 라우터 추가하고 
import { store } from './store/index.js';

// js
// import modules from './js/GnbWork.js'
// import canvasWork from './js/canvasWork.js'
// Create Vue Instance
createApp(App).use(router).use(store).mount('#app')
// const modulesWork = modules.default
// console.log(modules)
// console.log(modulesWork.gnbMenu())
// modules.gnbMenu()
// canvasWork()
// modules.canvasWork()

//  const app = createApp(App);
 
//  // console.log(router)
//  console.log(app)
//  console.log(Vuex)
//  app.use(router); // 사용 설정 하기
//  app.use(store); // 사용 설정 하기
 
//  app.mount('#app');
