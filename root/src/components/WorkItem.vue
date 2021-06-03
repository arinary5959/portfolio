<template>
    <div v-for="item in propsdata" v-bind:key="item" class="workitem">
        <div v-bind:class="item.name" class="workitem_inner" :ref="setItemRef" >
            <div class="workitem_info_wrap">
                <div class="workitem_text">
                    <strong class="workitem_name">{{ item.name }}</strong>
                    <p class="workitem_des" v-html="item.description"></p>
                    <span class="workitem_contribution">기여도: {{ item.contribution }}</span>
                    <span class="workitem_tech">{{ item.tech }}</span>
                    <span class="workitem_content">{{ item.content }}</span>
                    <a :href="item.href" class="workitem_btn"><span>View</span></a>
                </div>
            </div>
            <div class="workitem_img">
                <img :src="item.imgsrc" :class="item.name" alt="">
            </div>
        </div>
    </div>          
</template>item

<script>
// import Works from '../js/Works.js'
import { ref, onBeforeUpdate, onUpdated } from 'vue'

export default {
    props:['propsdata'],
    data(){
        return{
            workItemRefs: []
        }
    },
    setup() {
        let itemRefs = [];
        const setItemRef = el => {
            itemRefs.push(el);
            itemRefs.forEach(itemRefs => {
                // console.log(itemRefs)
                itemRefs.style.height = `${window.innerHeight}px`;
            });
        }
        // onBeforeUpdate(() => {
        //     itemRefs = [];
        // });
        // onUpdated(() => {
        //     console.log(itemRefs);
        // });
        // console.log(itemRefs);
        // const workItemRefs = (itemRefs) =>{
        //     console.log(itemRefs);
        //     itemRefs.reduce((res, item )=>{
        //         return res.push(item)
        //     }, this.workItemRefs)
        // }
        // console.log(workItemRefs)
        return {
            itemRefs,
            setItemRef,
            // workItemsRefs
        }
    },
    created(){
        window.addEventListener('resize', this.workItemsHeight);
    },
    destroyed(){
        window.removeEventListener('resize', this.workItemsHeight);
    },
    methods:{
        workItemsHeight(){
            this.itemRefs.forEach(itemRefs => {
                itemRefs.style.height = `${window.innerHeight}px`;
            });
        },
        moveWork(targetClassName, itemCount){
            console.log('moveWork');
            let self = this;
            let number;
            itemLocation()
            function itemLocation(){
                for(let i = 0; i < itemCount; i++){
                    if(self.itemRefs[i].classList.contains(`${targetClassName}`)){
                        console.log(self.itemRefs[i])
                        console.log(i)
                        number = i;
                    }
                }
                return number
            }
            
            console.log(number)
            console.log(window.innerHeight)
            // 수정필요!
            const html = document.querySelector('html');
            html.scrollTop = window.innerHeight * (number + 1);
            this.$store.state.scrollLocation = html.scrollTop
            console.log(this.$store.state.scrollLocation)
        },
        
    }

}
</script>

<style scoped>
.workitem {
    /* border:1px solid green; */
    width: 100%;
    /* background-image: ; */
}
.workitem_inner {
    /* border:1px solid red; */
    max-width: 1440px;
    min-height: 600px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}
.workitem_info_wrap {
    width: calc(var(--col) * 5);
    background-color: #f8f9fa;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    left: var(--col);
    color: var(--navColor)
}
.workitem_text {
    /* padding: 100px 30px 100px; */
    margin: 18% 10%;
}
.workitem_img {
    /* width: calc(var(--col) * 4); */
    width: calc(var(--col) * 3);
    /* height: 100%; */
    max-height: 90%;
    position: absolute;
    top:50%;
    right: var(--col);
    transform: translateY(-50%);
    overflow: hidden;
    box-shadow: 6px 6px 10px rgba(0,0,0, .2);
    /* border:1px solid white; */
}
.workitem_img img{
    width: 100%;
}
.workitem_info_wrap strong {
    font-size: 8rem;
}
.workitem_info_wrap p {
    font-size: 1.8rem;
    margin-top:20px;
    line-height: 2.4rem;
}
.workitem_info_wrap span {
    font-size: 1.8rem;
    display: block;
    margin-top: 8px;
}
.workitem_btn {
    /* border:1px solid rgba(255,255,255, 0.5); */
    display: inline-block;
    text-align: center;
    border:1px solid var(--navColor);
    width: 160px;
    height: 40px;
    font-size: 1.8rem;
    margin-top: 20px;
}

</style>