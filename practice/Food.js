class Food{
    constructor(cellWidth, cellHeight){
        this.food = {x:10,y: 10};
        this.cellHeight = cellHeight;
        this.cellWidth = cellWidth;
    }


    update(){

    }

    draw(ctx){
        ctx.fillStyle = 'green';
            ctx.fillRect(this.food.x * this.cellWidth, this.food.y * this.cellHeight, this.cellHeight, this.cellHeight)
    }

    regenarate(maxX, maxY){
        this.food = {x: parseInt(Math.random() * maxX), y: parseInt(Math.random() * maxY)}
    }

}