//function to add horizontal red green blue strips to an image
//link to website to test code https://www.dukelearntoprogram.com//course1/example/index.php
var img = new SimpleImage("hilton.jpg");
for (var pixel of img.values()){
    var w = img.getWidth();
    var x = pixel.getX();
        if (x <= w/3) {
    pixel.setRed(255);
        }
    else{
        if (x <= w/3*2) {
            pixel.setGreen(255);
        }
        else {
            pixel.setBlue(255);
        }
    }
}
print(img);