

function pageLoaded() {


    // Get a handle to the canvas object
    var canvas = document.getElementById("testcanvas");
    // Get the 2d context for this canvas
    var context = canvas.getContext("2d");

    context.strokeStyle = 'gray'
    const cols = 50;
    const rows = 50;
    const cellWidth = canvas.width / rows;
    const cellHeight = canvas.height / cols;


    const snake = new Snake(cellWidth, cellHeight);
    const food =new Food(cellWidth, cellHeight);
    const control = new Control(snake, food,rows, cols);

    const objects = [snake, food]


    function animate() {
        canvas.height = canvas.height
        control.update();
        objects.forEach(element => {
            element.draw(context);
        });
    }

    setInterval(animate, 100);

  





}