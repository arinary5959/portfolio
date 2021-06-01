<template>
    <header>
        <div class="header_inner">
            <div class="logo">
                <router-link to="/home"><h1>HJLEE</h1></router-link>
            </div>
            <nav>
                <div class="nav_wrap">
                    <div class="nav_mainpg_portfolio_indexing">
                        <div class="title">
                            <span>her</span>
                            <div class="main-title">
                                <h2><span>P</span>ORTFOLIO</h2>
                                <span>-vol. 1</span>
                            </div>
                        </div>
                        <div class="summary-info">
                            <span>Position: Publisher</span>
                            <span>Name: 이 현 정</span>
                        </div>
                    </div>
                    <div class="nav_menu">
                        <ul>
                            <li><router-link to="/home"><h3>HOME</h3></router-link></li>
                            <li><router-link to="/work"><h3>WORKS</h3></router-link></li>
                            <li><router-link to="/about"><h3>ABOUT</h3></router-link></li>
                        </ul>
                    </div>
                    <div class="copyright_wrap">
                        <span class="copyright"><i class="far fa-copyright"></i> 2021. HJLEE. all rights reserved.</span>
                    </div>
                </div>
            </nav>
            <div class="nav_menubar">
                <div class="navbar1"></div>
                <div class="navbar2"></div>
                <div class="navbar3"></div>
            </div>
          </div>
            <!-- <div class="header-inner">
                <div class="logo">
                    <router-link to="/home"><h1>HJLEE</h1></router-link>
                </div>
                <i class="fas fa-bars navbar open"></i>
                <div class="navbar">
                    <div class="navbar1"></div>
                    <div class="navbar2"></div>
                    <div class="navbar3"></div>
                </div>
                <nav class="main-porfolio-index">
                    <div class="porfolio-index-inner">
                        <div class="index-text-wrap">
                            <div class="title">
                                <span>her</span>
                                <div class="main-title">
                                    <h2><span>P</span>ORTFOLIO</h2>
                                    <span>-vol. 1</span>
                                </div>
                            </div>
                            <div class="summary-info">
                                <span>Position: Publisher</span><br />
                                <span>Name: 이 현 정</span><br />
                            </div>
                            <div class="index">
                                <span>Index.</span>
                                <ul>
                                    <li><router-link to="/home">HOME</router-link></li>
                                    <li><router-link to="/work">WORK</router-link></li>
                                    <li><router-link to="/about">ABOUT</router-link></li>
                                    <li><router-link to="/about">CONTACT</router-link></li>
                                </ul>
                            </div>
                        </div>
                        <span class="copyright"><i class="far fa-copyright"></i> 2021. HJLEE. all rights reserved.</span>
                    </div>
                </nav>
            </div> -->
        </header>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
header{
    width: 100%;
    /* border: 1px solid goldenrod; */
    height: 10vh;
    min-height: 80px;
}
.header_inner {
    /* width: calc(100% - var(--col) * 2); */
    max-width: calc(1440px - var(--col) * 2);
    /* max-width: 1440px; */
    margin:0 auto;
    height: 10vh;
    min-height: 80px;
}
.logo {
    line-height: max(10vh, 80px);
    vertical-align: middle;
}
.logo h1{
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 3.5rem;
}
nav{
    position: relative;
}
.nav_wrap {
    width: 23%;
    height: 100vh;
    min-height: 600px;
    position: absolute;
    right:0;
    top: min(-10vh, -80px);
    padding-top: max(10vh, 80px);
    background: linear-gradient(135deg, rgba(255,255,255,.5) 0%, rgba(255,255,255,.3) 35%, rgba(255,255,255,0.1) 100%);
    -webkit-box-shadow:  inset 4px 4px 15px 0px rgb(255,255,255, 0.4), -9px -42px 3px -30px rgba(255, 255, 255, 0); 
    box-shadow: inset 4px 4px 15px 0px rgba(255,255,255, 0.4), -9px -42px 3px -30px rgba(255,255,255, 0);
}

.nav_mainpg_portfolio_indexing {
    /* display: none; */
    width: 90%;
    margin: 0 auto;
    padding-top: 10%;
    padding-bottom: 100px;
}
.nav_mainpg_portfolio_indexing .title, .summary-info span{
    color: #fff;
}
.nav_mainpg_portfolio_indexing .title > span{
     color: rgba(255,255,255, .5);
     font-size: 1.8rem;
}
.nav_mainpg_portfolio_indexing .title > .main-title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: -5px;
}
.nav_mainpg_portfolio_indexing .title > .main-title > span{
    font-size: 1.8rem;
    font-weight: 700;
}
.nav_mainpg_portfolio_indexing .title > .main-title > h2 {
    font-size: 2.4rem;
    display: inline-block;
}
.nav_mainpg_portfolio_indexing .title > .main-title > h2 > span {
    font-size: 4rem;    
}
.nav_mainpg_portfolio_indexing .summary-info {
    text-align: right;
    font-size: 1.6rem;
    margin-top: 40px;
}
.nav_mainpg_portfolio_indexing .summary-info span {
    display: block;
    margin-top: 4px;
}
.nav_menu {
    width: 90%;
    margin: 0 auto;
    text-align: center;
}
.nav_menu > ul > li:not(:first-child) {
    margin-top:20%;
}
.nav_menu > ul > li > a > h3 {
    font-size: 2rem;
    color: #fff;
}
.nav_menu > ul > li > a:hover h3{
    color: var(--navColor);
    color: rgb(52, 58, 64);
    text-decoration: underline;
}
.copyright_wrap {
    width: 90%;
    /* border:1px solid green; */
    position: absolute;
    bottom: 4%;
    left: 5%;
    text-align: center;
    font-size: 1.2rem;
    color: rgba(255,255,255, .5);
}
/* header{
    width: 100%;
    height: 10vh;
    min-height: 75px;
    text-align: left;
}
.header-inner {
    width: calc(100% - var(--col) * 2);
    border:1px solid black;
    margin:0 auto;
    height: 10vh;
    min-height: 75px;
    position:relative;
    display: flex;
    justify-content: space-between;
}
.logo {
    line-height: max(10vh, 75px);
    vertical-align: middle;
}
.logo h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    display: inline-block;
    color: #efefef;
    font-weight: 700;
}
.main-porfolio-index{
    width: 23%;
    height: 100vh;
    background: linear-gradient(135deg, rgba(255,255,255,.5) 0%, rgba(255,255,255,.3) 35%, rgba(255,255,255,0.1) 100%);
    -webkit-box-shadow:  inset 4px 4px 15px 0px rgb(255,255,255, 0.4), -9px -42px 3px -30px rgba(255, 255, 255, 0); 
    box-shadow: inset 4px 4px 15px 0px rgba(255,255,255, 0.4), -9px -42px 3px -30px rgba(255,255,255, 0);
}
.porfolio-index-inner {
    box-sizing: border-box;
    width: 90%;
    height: min(100vh - 10vh, 100vh - 75px) ;
    margin: 0 auto;
    margin-top: max(10vh, 75px);
    border:1px solid transparent;
    position: relative;
    color:rgb(255,255,255)
}
.index-text-wrap{
    margin-top: 12%;
    border:1px solid green;
}
.title > span{
    color: rgba(255,255,255, .5)
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
}
.index {
    margin-top: 50px;
}
.index > ul {
    margin-top: 30px;
    text-align: center;
}
.index > ul > li:not(:first-child){
    margin-top: 16%;
}
.index > ul > li > a{
    color: rgb(255,255,255);
    text-decoration: underline;
}
.index > ul > li > a:hover {
    color: rgba(0,0,0, 0.8);
    text-decoration:none;
    font-weight: 700;
}
.index span {
    font-size: 18px;
    font-weight: 700;
    margin-left: 25px;
}
.navbar {
    position: absolute;
    top:50%;
    right:20px;
    transform:translateY(-50%);
    cursor: pointer;
    color: #efefef;
}
.copyright{
    position: absolute;
    display: block;
    width:fit-content;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    color:rgba(255,255,255,0.5);
} */
</style>