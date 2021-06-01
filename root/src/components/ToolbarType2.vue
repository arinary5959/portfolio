<template>
    <header>
        <div class="header-inner">
            <div class="logo">
                <router-link to="/home"><h1>HJLEE</h1></router-link>
            </div>
            <div class="header_menu">
                <ul>
                    <li><router-link to="/home">HOME</router-link></li>
                    <li><router-link to="/work">WORKS</router-link></li>
                    <li><router-link to="/about">ABOUT</router-link></li>
                    <!-- <li><router-link to="/about">CONTACT</router-link></li> -->
                </ul>
            </div>
            <div class="navbar">
                <div class="navbar1"></div>
                <div class="navbar2"></div>
                <div class="navbar3"></div>
            </div>
            <!-- <nav class="main-porfolio-index">
                <div class="porfolio-index-inner">
                    <div class="index-text-wrap">
                        <div class="title">
                            <span>her</span>
                            <div class="main-title">
                                <h2><span>W</span>orks.</h2>
                            </div>
                        </div>
                        <div class="index">
                            <ul>
                                <li>
                                    <router-link to="/home">CLONE CODING</router-link>
                                
                                </li>
                                <li>
                                    <router-link to="/work">PROJECT</router-link>
                                </li>
                                <li>
                                    <router-link to="/about">UI CODING</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <span class="copyright"><i class="far fa-copyright"></i> 2021. HJLEE. all rights reserved.</span>
                </div>
            </nav> -->
        </div>
    </header>
</template>

<script>
import gngMenuWork from '../js/GnbWork.js'
export default {
    mounted(){
        gngMenuWork()
    }
}

</script>

<style scoped>
header{
    width: 100%;
    height: 10vh;
    min-height: 75px;
    text-align: left;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0, 0.1); 
    box-shadow: 0px 5px 5px 0px rgba(0,0,0, 0.1);
}
.header-inner {
    /* width: calc(100% - var(--col) * 2); */
    /* max-width: 1440px; */
    max-width: calc(1440px - var(--col) * 2);
    /* border:1px solid black; */
    margin:0 auto;
    height: 10vh;
    min-height: 75px;
    position:relative;
    /* display: flex; */
    /* justify-content: space-between; */
}
.logo {
    line-height: max(10vh, 75px);
    vertical-align: middle;
    float: left;
}
.logo h1 {
    /* font-family: 'S-CoreDream-8Heavy'; */
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Poppins', sans-serif;
    font-size: 3.5rem;
    /* display: inline-block; */
    color: var(--navColor);
    font-weight: 700;
}
.main-porfolio-index{
    position: absolute;
    top:0;
    right: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    background-color: #fff;
    /* background: linear-gradient(135deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 100%);
    -webkit-box-shadow:  inset 4px 4px 15px 0px rgb(255,255,255, 0.4), -9px -42px 3px -30px rgba(255, 255, 255, 0); 
    box-shadow: inset 4px 4px 15px 0px rgba(255,255,255, 0.4), -9px -42px 3px -30px rgba(255,255,255, 0); */
}
.main-porfolio-index.on{
    transition: all .3s ease-in-out;
    width:23%;
    height: 100vh;
    -webkit-box-shadow: 0px 0px 5px 5px rgba(0,0,0, 0.1); 
    box-shadow: 0px 0px 5px 5px rgba(0,0,0, 0.1);
}
.porfolio-index-inner {
    box-sizing: border-box;
    width: 90%;
    height: min(100vh - 10vh, 100vh - 75px) ;
    margin: 0 auto;
    margin-top: max(10vh, 75px);
    border:1px solid transparent;
    position: relative;
    color:#343A40
}
.index-text-wrap{
    margin-top: 12%;
    /* border:1px solid green; */
}
.title > span{
    color: rgba(52, 58, 64, .5);
}
.main-title {
    display: flex;
    justify-content: space-between;
    margin-top: -8px;
}
.title > .main-title > h2 {
    display: inline-block;
}
.title > .main-title > h2 > span {
    font-size: 40px;
}
.title > .main-title > span {
    margin-top: 21px;
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
}
.summary-info {
    text-align: right;
    margin-top: 30px;
    /* font-size: 16px; */
}
.index {
    margin-top: 50px;
}
.index > ul {
    margin-top: 30px;
    text-align: center;
}
.index > ul > li:not(:first-child){
    /* margin-top: 30px; */
    margin-top: 16%;
}
.index > ul > li > a{
    color: var(--navColor);
    text-decoration: underline;
}
.index > ul > li > a:hover {
    /* color: rgba(0,0,0, 0.8); */
    text-decoration:none;
    font-weight: 700;
}
.index span {
    font-size: 18px;
    font-weight: 700;
    margin-left: 25px;
}
.navbar {
    width: 22px;
    height: 19px;
    position: absolute;
    top:50%;
    right:20px;
    transform:translateY(-50%);
    cursor: pointer;
    color: #efefef;
    z-index: 1000;
    display: none;
    /* background-color: black; */
}
.navbar:hover .navbar2 {
    width: 75%;
    transition: all .3s ease-in-out;
}
.navbar > div {
    width: 100%;
    height: 3px;
    border-radius: 3px 3px;
    background-color: #343A40;
}
.navbar > .navbar2{
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.navbar > .navbar3{
    position: absolute;
    bottom: 0;
}
.navbar.on > .navbar2{
    display: none;
}
.navbar.on > .navbar1 , .navbar.on > .navbar3 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%); 
    transform-origin: center;
    transition: transform .3s ease-in-out;
}
.navbar.on > .navbar1{
    transform: rotate(45deg);
}
.navbar.on > .navbar3{
    transform: rotate(135deg);
}
.copyright{
    position: absolute;
    display: block;
    width:fit-content;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
     color: rgba(52, 58, 64, .3);
}
.header_menu{
    overflow: hidden;
    text-align: center;
    /* text-align: end; */
}
.header_menu > ul > li {
    display: inline-block;
    /* margin: 0 60px 0; */
    line-height: max(10vh, 75px);
    vertical-align: center;
}
.header_menu > ul > li:nth-child(2){
    margin: 0 120px 0;
}
.header_menu > ul > li > a {
    color: #343A40;
    font-weight: 700;
    font-size: 1.8rem;
}
.header_menu > ul {
    /* margin-left: -90px; */
    margin-left: -50px;
}

</style>