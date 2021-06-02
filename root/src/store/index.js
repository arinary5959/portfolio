import { createStore } from 'vuex'
// import mutations from './mutations.js'
// import actions from './actions.js'
console.log(createStore)
export const store = createStore({
    state: {
        // crrPath:'',
        flowColor:{},
        cloneItems: [
            {
                name: 'Starbucks',
                description: '반응형웹 스타벅스 홈페이지 클론코딩',
                contribution: '퍼블리싱 100%',
                tech:'HTML, CSS, Javascript',
                content:'MainPage',
                imgsrc: require('../assets/workitemvisual/starbucks.png'),
                href:'https://arinary5959.github.io/starbucks/index.html',
            },
            {
                name: 'Microsoft',
                description: '반응형웹 마이크로소프트 홈페이지 클론코딩',
                contribution: '퍼블리싱 100%',
                tech:'HTML, CSS, Javascript',
                imgsrc: require('../assets/workitemvisual/microsoft.png'),
                href:'https://arinary5959.github.io/microsoft/index.html',
            },
            {
                name: 'KaKao.Corp',
                description: '스태틱웹 카카오코퍼레이션 홈페이지 클론코딩',
                contribution: '퍼블리싱 100%',
                tech:'HTML, CSS, Javascript',
                imgsrc: require('../assets/workitemvisual/kakaocorp.png'),
                href:'https://arinary5959.github.io/kakaocorp/index.html',
            }
        ],
        projectItems:[
            {
                name: 'Weather',
                description: '날씨 정보 제공 웹',
                contribution: '퍼블리싱 100%',
                tech:'Vue, API, HTML, CSS, Javascript',
                imgsrc: require('../assets/workitemvisual/weather.jpg'),
                href:'./workItems/calendar/calendar.html',
            },
            {
                name: 'ToDoList',
                description: '마이크로소프트 홈페이지 클론코딩',
                contribution: '퍼블리싱 100%',
                tech:'Vue, Firebase, HTML, CSS, Javascript',
                imgsrc: require('../assets/workitemvisual/todolist.png'),
                href:'https://tasklisst.netlify.app',
            },
            // {
            //     name: 'MusicPlayList',
            //     description: '유투브 API를 활용하여 음악 재생 리스트를 만들어 사용할 수 있도록 만든 웹',
            //     contribution: '퍼블리싱 및 디자인 100%',
            //     tech:'Vue, API, HTML, CSS, Javascript',
            //     imgsrc: '',
            //     href:'./workItems/calendar/calendar.html',
            // }
        ],
        uiItems:[
            {
                name: 'H-Slider',
                description: '슬라이더 라이브러리처럼 만든 미니 라이브러리.',
                contribution: '퍼블리싱 100%',
                tech:'HTML, CSS, Javascript',
                imgsrc: require('../assets/workitemvisual/slider.jpg'),
                href:'https://arinary5959.github.io/hslider/HSlider.html',
            },
            {
                name: 'Login-Api',
                description: '로그인 API를 활용한 UI.',
                contribution: '퍼블리싱 100%',
                tech:'API, HTML, CSS, Javascript',
                imgsrc: require('../assets/workitemvisual/loginapi.png'),
                href:'https://arinary5959.github.io/loginapi/index.html',
            },
            {
                name: 'Calendar',
                description: '만년 달력 UI, 오늘 날짜 기준으로 여러 해의 날짜정보 표현.',
                contribution: '퍼블리싱 100%',
                tech:'Vue(CDN), HTML, CSS, Javascript',
                imgsrc: require('../assets/workitemvisual/calendar_1.jpg'),
                href:'https://arinary5959.github.io/calendar/calendar.html',
            },
            {
                name: 'Calculator 구현중',
                description: '계산기 UI 구현. 기본 기능을 갖춘 계산기입니다.',
                contribution: '퍼블리싱 100%',
                tech:'HTML, CSS, Javascript',
                imgsrc: '',
                href:'https://arinary5959.github.io/calculator/index.html',
            }
        ]
    }
    // getters: {
    //     fetchUser(state){
    //         return state.user;
    //     },
    // },
    // mutations,
    // actions
  })