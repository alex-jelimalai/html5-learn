class Control {
    constructor(snake, food, rows, cols) {
        this.food = food;
        this.snake = snake;
        this.rows = rows;
        this.cols = cols;
    }


    update (){
        if(this.#isSnakeOut()){
            this.snake.reset();
            return;
        }
        if(this.#isIntersected(this.snake, this.food)){
            this.snake.eat(this.food.food);
            this.food.regenarate(this.rows, this.cols);
        }
        this.snake.update()
        this.food.update();
    }

    #isIntersected(snake, food){
        const head = this.snake.head();
        return head.x === food.food.x && head.y === food.food.y;
    }

    #isSnakeOut(){
        const head = this.snake.head();
        return head.x < 0 || head.y <0  || head.x >= this.rows || head.y >= this.cols;
    }
}