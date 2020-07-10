//function to overlay an image on top of another image
//link to website to test code https://www.dukelearntoprogram.com//course1/example/index.php
var fgImage = new SimpleImage("drewRobert.png"); //add images
var bgImage = new SimpleImage("dinos.png");

for (var pixel of fgImage.values()) { //start for loop to cycle through fgImage pixels
if (pixel.getRed() < 150 && pixel.getBlue() < 150 && pixel.getGreen() > 200) { //if pixel is green then
    pixelSwap(pixel);
}
}
print(fgImage);
//print(image);

function pixelSwap(pixel) {
    var x = pixel.getX(); //get coords of fgPixel
    var y = pixel.getY();
    var bgPixel = bgImage.getPixel(x, y); //set of bgPixel
    fgImage.setPixel(x, y, bgPixel); //set colors to fgImage pixel at cord x, y to those from bgPixel
    return pixel;
}