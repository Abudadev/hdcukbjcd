var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");
image = "Birthdayimage.jpg";
img = "";
var name_value = "";

function Birthdayimage(get_image)
{
    fabric.Image.fromURL(get_image, function(img){
        image = img;

            img.set({
                top:0,
                left:0
            });
            canvas.add(img);    
        });
}

function put_name(){
name_value = document.getElementById("name").value;
document.getElementById("display_name").innerHTML = name_value;
}

function playSound(){
 x.play();	
}
