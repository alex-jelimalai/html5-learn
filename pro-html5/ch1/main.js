

function pageLoaded() {
    // Get a handle to the canvas object
    var canvas = document.getElementById("testcanvas");
    // Get the 2d context for this canvas
     var context = canvas.getContext("2d");
    // Our drawing code here...
    // FILLED RECTANGLES
    // Draw a solid square with width and height of 100 pixels at (200,10)
    context.fillRect(200, 10, 100, 100);
    // Draw a solid square with width of 90 pixels and height of 30 pixels at (50,70)
    context.fillRect(50, 70, 90, 30);
    // STROKED RECTANGLES
    // Draw a rectangular outline with width and height of 50 pixels at (110, 10)
    context.strokeRect(110, 10, 50, 50);
    // Draw a rectangular outline with width and height of 50 pixels at (30, 10)
    context.strokeRect(30, 10, 50, 50);
    // CLEARING RECTANGLES
    // Clear a rectangle with width of 30 pixels and height of 20 pixels at (210, 20)
    context.clearRect(210, 20, 30, 20);
    // Clear a rectangle with width of 30 pixels and height of 20 pixels at (260, 20)
    context.clearRect(260, 20, 30, 20);

// DRAWING COMPLEX SHAPES
// Draw a filled triangle
context.beginPath();
context.moveTo(10, 120);
context.lineTo(10, 180);
context.lineTo(110, 150);
context.fill();
// Start drawing at 10, 120
// Close the shape and fill it out
// Draw a stroked triangle
context.beginPath();
context.moveTo(140, 160); // Start drawing at 140, 160
context.lineTo(140, 220);
context.lineTo(40, 190);
context.closePath();
context.stroke();
// Draw a more complex set of lines
context.beginPath();
context.moveTo(160, 160); // Start drawing at 160, 160
context.lineTo(170, 220);
context.lineTo(240, 210);
context.lineTo(260, 170);
context.lineTo(190, 140);
context.closePath();
context.stroke();
// DRAWING ARCS & CIRCLES
// Draw a semicircle
context.beginPath();
// Draw an arc at (400, 50) with radius 40 from 0 to 180 degrees, anticlockwise
// PI radians = 180 degrees
context.arc(100, 300, 40, 0, Math.PI, true);
context.stroke();
// Draw a full circle
context.beginPath();
// Draw an arc at (500, 50) with radius 30 from 0 to 360 degrees, anticlockwise
// 2*PI radians = 360 degrees
context.arc(100, 300, 30, 0, 2 * Math.PI, true);
context.fill();
// Draw a three-quarter arc
context.beginPath();
// Draw an arc at (400, 100) with radius 25 from 0 to 270 degrees, clockwise
// (3/2*PI radians = 270 degrees)
context.arc(200, 300, 25, 0, 3 / 2 * Math.PI, false);
context.stroke();


// DRAWING TEXT

context.fillText("This is some text...", 330, 40);
// Modify the font
context.font = "10pt Arial";
context.fillText("This is in 10pt Arial...", 330, 60);
// Draw stroked text
context.font = "16pt Arial";
context.strokeText("This is stroked in 16pt Arial...", 330, 80);

context.fillStyle = "red";
// Draw a red filled rectangle
context.fillRect(310, 160, 100, 50);
// Set stroke color to green
context.strokeStyle = "green";
// Draw a green stroked rectangle
context.strokeRect(310, 240, 100, 50);

// Set fill color to yellow using rgb()
context.fillStyle = "rgb(255, 255, 0)";
// Draw a yellow filled rectangle
context.fillRect(420, 160, 100, 50);
// Set fill color to green with an alpha of 0.6
context.fillStyle = "rgba(0, 255, 0, 0.6)";
// Draw a semi-transparent green filled rectangle
context.fillRect(450, 180, 100, 50);
// TEXTURES
// Get a handle to the Image object
var fireImage = document.getElementById("fire");
var pattern = context.createPattern(fireImage, "repeat");
// Set fill style to newly created pattern
context.fillStyle = pattern;
// Draw a pattern filled rectangle
context.fillRect(420, 240, 130, 50);


// DRAWING IMAGES
// Get a handle to the Image object
var image = document.getElementById("spaceship");
// Draw the image at (0, 350)
context.drawImage(image, 0, 350);
// Scale the image to half the original size
context.drawImage(image, 0, 400, 100, 25);
// Draw part of the image
context.drawImage(image, 0, 0, 60, 50, 0, 420, 60, 50);




}
