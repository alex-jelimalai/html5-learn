 class Snake{
    constructor(cellWidth, cellHeight){
        this.#addKeyboadListener();
        this.snake = [{ x: 25, y: 0 }, { x: 25, y: 1 }, { x: 25, y: 2 },{x:25, y:3}, {x:25, y:4}, {x:25, y:5}];
        this.cellHeight = cellHeight;
        this.cellWidth = cellWidth;
       
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
    }


    update(){
        if(this.#isMoving()){
            this.snake.splice(0,1);
            const head = this.snake[this.snake.length - 1];
            if(this.down){
                this.snake.push({x:head.x, y:head.y + 1});
            }else if(this.right){
                this.snake.push({x:head.x + 1, y:head.y});
            }else if(this.up){
                this.snake.push({x:head.x, y:head.y - 1});
            }else if(this.left){
                this.snake.push({x:head.x - 1, y:head.y})
            }
        }
    }

    head(){
        return this.snake[this.snake.length - 1];
    }

    eat(food){
        this.snake.push(food);
    }

    draw(ctx){
        ctx.fillStyle = 'brown';
        this.snake.forEach(e => {
            ctx.fillRect(e.x * this.cellWidth, e.y * this.cellHeight, this.cellHeight, this.cellHeight)
        });
    }



    #isMoving() {
        return this.up || this.down || this.left || this.right;
    }


    reset() {
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
    }


    #addKeyboadListener() {
        document.onkeydown = (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.reset()
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.reset()
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.reset()
                    this.up = true;
                    break;
                case "ArrowDown":
                    this.reset()
                    this.down = true;
                    break;
            }
        }
    }



}

