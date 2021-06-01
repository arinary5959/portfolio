export default function (stopWorkValue) { 
    // if(routePath == '/home' || routePath == '/'){
    //     console.log('add')
    //     window.addEventListener('load', createAnimateGradient)
    //     createAnimateGradient()
    // }else{
    //     console.log('remove')
    //     // window.removeEventListener('load', createAnimateGradient)
    // }
    console.log('캔버스워크')
    class flowColor {
        constructor(){
            this.canvas = document.querySelector('.canvas'),
            this.ctx = document.querySelector('.canvas').getContext('2d');
            this.canvasAni;
            this.totalCircle = 6;
            // this.x = Math.floor(Math.random() * window.innerWidth),
            // this.y = Math.floor(Math.random() * window.innerHeight),
            this.maxRadius = 1900,
            this.minRadius = 1400,
            // this.radius =  Math.floor(Math.random() * (this.maxRadius - this.minRadius) + this.minRadius) 
            this.colors = [
                {r:255, g:75, b:92}, // 레드핑크
                // {r:48, g:93, b:255}, // 진한 블루 (보라)
                // {r:255, g:75, b:92}, // 레드핑크
                // {r:113, g:249, b:152}, //그린 + 화이트. 
                {r:75, g:43, b:255}, //퍼플
                {r:29, g:180, b:222}, //연한 블루 (파란)
                {r:113, g:249, b:152}, //그린 + 화이트. 
                
                // {r:249, g:248, b:113}, //레몬옐로우 페일,
            ],
            // console.log(this.ctx)
            // console.log(this.canvas.offCanvas)
            this.particles = [];
            this.canvas.height = `${window.innerHeight * 2}`
            // console.log(this.canvas.height)
            this.canvas.width = `${window.innerWidth * 2}`
            // this.ctx.globalCompositeOperation = 'color-dodge';
            this.ctx.globalCompositeOperation = 'saturation';

            

            this.createCircle()
        }

        createCircle(){
            let color;
            let crrColor= 0;
            for(let i = 0; i < this.totalCircle; i++ ){
                color = this.colors[crrColor];
                crrColor++;
                if(crrColor >= this.colors.length){
                    crrColor = 0;
                }
                // console.log(color)
                // new drawCircle(this.x, this.y, this.radius, color)
                // this.particles = [];
                const item = new drawCircle(
                    Math.floor(Math.random() * window.innerWidth), 
                    Math.floor(Math.random() * window.innerHeight), 
                    Math.floor(Math.random() * (this.maxRadius - this.minRadius) + this.minRadius), 
                    color
                );
                // console.log(i)
                this.particles[i] = item
                // console.log(this.particles)
                // console.log(item)
                this.animate()
            }
        }
        animate() {
            this.canvasAni = window.requestAnimationFrame(this.animate.bind(this));
            if( stopWorkValue == 0){
                console.log('애니메이션중지')
                cancelAnimationFrame(this.canvasAni)
            }
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
            // console.log(this.particles)
            for(let i = 0; i < this.totalCircle; i++){
                const item = this.particles[i];
                // console.log(this.particles[i])
                // console.log(item)
                if(item !== undefined){
                    item.animate(this.ctx);
                    // console.log(this.particles[i])
                    // console.log(item)
                }
            }
        }
    }
    
    class drawCircle {
        constructor(x, y, radius, color){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.rgb = color;
            // console.log(this.x)
            // console.log(this.y)
            this.vx = Math.random() * 2;
            this.vy = Math.random() * 2;
        }
        animate(ctx) {
            // console.log(ctx)
            // console.log('darw animate')
            ctx.globalCompositeOperation = 'saturation';
            if(this.x < 0 || this.x > window.innerWidth){
                this.vx *= -1;
            }else if(this.y < 0 || this.y > window.innerWidth){
                this.vy *= -1;
            }
            this.x += this.vx
            this.y += this.vy
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
            const g = ctx.createRadialGradient(this.x, this.y, this.radius * 0.001, this.x, this.y, this.radius);
            g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`)
            g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`)
            ctx.fillStyle = g
            // ctx.fillStyle = 'rgb(250, 255, 89)'
            ctx.fill()
        }
    }
    new flowColor();
}