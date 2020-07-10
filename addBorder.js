//function to add a border to an image
//link to website to test code https://www.dukelearntoprogram.com//course1/example/index.php
var img = new SimpleImage("smallpanda.png"); //create img
var border = 20;
addBorder();

print(img); //print image

function addBorder(){
    for (var pixel of img.values()){
        if (pixel.getX() <= border || pixel.getX() >= img.getWidth() - border || pixel.getY() <= border || pixel.getY() >= img.getHeight() - border)
            setBlack(pixel);
    } 
}




function setBlack(pixel){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}