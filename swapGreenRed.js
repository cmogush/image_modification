//function to filter an image, swapping green values for Red
//link to website to test code https://www.dukelearntoprogram.com//course1/example/index.php
var img = new SimpleImage("smallpanda.png");
for (var pixel of img.values()){
var green = pixel.getGreen();
var red = pixel.getRed();
swapRedGreen();
}
print(img);

function swapRedGreen(green, red){
    var newR = green;
    var newG = red;
    pixel.setGreen(newG);
    pixel.setRed(newR);
}