window.onload = ()=>{
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');
    
    
    
    
    
    
    class Screen{
        constructor(){
            this.width = canvas.width;
            this.height = canvas.height;
            this.color = '#ababab';
        }
        draw(){
            ctx.fillStyle = this.color;
            ctx.fillRect(0,0,this.width,this.height)
        }
    }
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.onresize = ()=>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const screen  = new Screen()
        screen.draw()
        
    }
    const screen  = new Screen()
    screen.draw()

    // map config 
    const mapW = 20;
    const mapH = 20;
    const tileW = window.innerWidth / mapW;
    const tileH = window.innerHeight / mapH;
    
    // map Scheme generator

    function mapScheme(){
        let mapScheme = [];
        for(let i = 0 ; i < (mapH * mapW) ; i++){
            mapScheme.push(Math.floor(Math.random() * 2))
        }
        return mapScheme;
    }

    const map = mapScheme(); // map

    // const map =[1,0,1,0,0,1,1,1,1,0,
    //             0,0,0,1,1,1,1,1,1,1,
    //             1,1,1,0,0,1,1,0,0,0,
    //             1,1,1,1,1,1,1,1,1,1,
    //             1,1,0,1,1,1,1,0,1,1,
    //             1,1,1,1,0,0,0,1,1,0,
    //             1,0,0,0,1,1,1,1,0,1,
    //             0,1,0,0,1,0,0,1,0,0,
    //             1,0,1,1,0,0,0,1,0,0,
    //             1,1,0,1,1,1,0,1,0,1];

    // draw the tiles 
    for(let col=0;col < mapW;col++){
        for(let row = 0 ; row < mapH ; row++){
            console.log(map[(row * mapW) + col])
            if(map[(row * mapW) + col] == 1){
                ctx.fillStyle = 'indigo'
                ctx.fillRect(row*tileW,col*tileH,tileW,tileH)
            }
        }
    }
    
    // player config 




}



