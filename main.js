canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
mars_array = ["Mars1.jpeg","mars2.jpg","mars3.jpg","mars4.jpg"]
random_number = Math.floor(Math.random()*4)
rover_width = 100;
rover_height = 90;
background_image = mars_array[random_number]
rover_image = "rover.png"

rover_X = 30
rover_Y = 40

function add(){
    background_imgTag = new Image()
    background_imgTag.onload = uploadBackground
    background_imgTag.src = background_image
     
    rover_imgTag = new Image()
    rover_imgTag.onload = uploadRover
    rover_imgTag.src = rover_image
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_X,rover_Y,rover_width,rover_height)
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed =="37"){
        left()
        console.log("left")
    }
    if (keypressed == "38"){
        up()
        console.log("up")
    } 
    if (keypressed == "39"){
        right()
        console.log("right")
    }
    if (keypressed == "40"){
        down()
        console.log("down")
    }
} 
function up(){
    if(rover_Y>=0){
        rover_Y = rover_Y-10;
        uploadBackground()
        uploadRover()
    }
}
function down(){
    if(rover_Y<=600){
        rover_Y = rover_Y+10;
        uploadBackground()
        uploadRover()
    }
}
function left(){
    if(rover_X>=0){
        rover_X = rover_X-10;
        uploadBackground()
        uploadRover()
    }
}
function right(){
    if(rover_X<=800){
        rover_X = rover_X+10;
        uploadBackground()
        uploadRover()
    }
}
