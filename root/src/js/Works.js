export default function(itemCount) {
    console.log('WorkItem');
    // console.log(itemCount)
    // console.log(this.$store.state.cloneItems)
    // console.log(window.innerHeight);
    const workItemsEl = document.querySelectorAll('.workitem_inner');
    const html = document.querySelector('html');
    const qMenuLiItemsEl = document.querySelectorAll('.quickmenu_list > li')
    const toTopbtn = document.querySelector('.to_top')
    console.log(qMenuLiItemsEl)
    window.addEventListener('resize', workItemsHeight);
    window.addEventListener('scroll', scrollWork);
    toTopbtn.addEventListener('click', toTopWork);
    Array.prototype.forEach.call(qMenuLiItemsEl, qMenuLiItemsEl => {
        qMenuLiItemsEl.addEventListener('click', moveWork)
    })

    // 로드이벤트 대신 실행
    workItemsHeight()

    function workItemsHeight() {
        Array.prototype.forEach.call(workItemsEl, workItemsEl => {
            workItemsEl.style.height = `${window.innerHeight}px`;
        })
    }
    function moveWork(e) {
        console.log(e.target);
        if(e.target.tagName == 'LI')return;
        console.log(e.target.textContent);
        let targetClassName = e.target.textContent;
        // console.log(findWorkItems())
        let workEl
        findWorkItems()
        function findWorkItems() {
            for(let i = 0; i < workItemsEl.length; i++){
                if(workItemsEl[i].classList.contains(`${targetClassName}`)){
                    workEl = workItemsEl[i]
                }
            }
            return workEl
        }
        Array.prototype.indexOf.call(workItemsEl, workEl)
        console.log(Array.prototype.indexOf.call(workItemsEl, workEl))
        html.scrollTop = window.innerHeight * (Array.prototype.indexOf.call(workItemsEl, workEl) + 1)
    }

    let start;
    let scrollLocation = 0;
    function scrollWork(){
        // console.log('resize')
        clearTimeout(start);
        start = setTimeout(scrollTodo, 150);
    }
    function scrollTodo() {
        // console.log(html.scrollTop)
        if(scrollLocation < html.scrollTop){
            // console.log('증가')
            for(let i = 1; i <= itemCount; i++){
                if(html.scrollTop > window.innerHeight && html.scrollTop < window.innerHeight) {
                    html.scrollTop = window.innerHeight
                }else if(html.scrollTop > (window.innerHeight * (i - 1)) &&  html.scrollTop < (window.innerHeight * i)) {
                    html.scrollTop = window.innerHeight * i
                }
            }
            scrollLocation = html.scrollTop
        }else if(scrollLocation > html.scrollTop){
            for(let i = itemCount; i >= 1; i--){
                if(html.scrollTop < window.innerHeight * 0.5){
                    html.scrollTop = window.innerHeight * (0)
                }else if (Math.ceil(html.scrollTop) <  window.innerHeight * i && Math.ceil(html.scrollTop) > (window.innerHeight * (i - 1))){
                    html.scrollTop = window.innerHeight * (i - 1)
                }
            }
            scrollLocation = html.scrollTop
        }
    }
    function toTopWork() {
        if(html.scrollTop == 0)return;
        html.scrollTop = 0;
        console.log('click')
    }
}