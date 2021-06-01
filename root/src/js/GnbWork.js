export default function() {
        const navBar = document.querySelector('.navbar')
        const mainIndexMenu = document.querySelector('.main-porfolio-index')
        const navBars = navBar.children;
        console.log(navBar)
        console.log(navBars)
        navBar.addEventListener('click', clickWork)
        function clickWork(){
            if(navBar.classList.contains('on') ){
                navBar.classList.remove('on')
                mainIndexMenu.classList.remove('on')
            }else{
                navBar.classList.add('on')
                mainIndexMenu.classList.add('on')
            }

        }
}