//function to filter an image, changing blue values to yellow
//link to website to test code https://www.dukelearntoprogram.com//course1/example/index.php
var img = new SimpleImage("duke_blue_devil.png");
for (var pixel of img.values()){
var red = pixel.getRed();
var green = pixel.getGreen();
var blue = pixel.getBlue();
if (blue >= 240 && red >= 240 && green >= 240)
    {
    }
        else {
    makeBlueYellow();}
}
print(img);

function makeBlueYellow(red, green, blue){
    var newR = 255;
    var newG = 255;
    var newB = 0;
    pixel.setRed(newR);
    pixel.setGreen(newG);
    pixel.setBlue(newB);
}