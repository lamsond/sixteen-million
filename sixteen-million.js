//get elements
var bg = document.getElementById("bg");
var fg = document.getElementById("fg");
var red_amount = document.getElementById("red_qty");
var green_amount = document.getElementById("green_qty");
var blue_amount = document.getElementById("blue_qty");
var comp_div = document.getElementById("comps");
var fg = document.getElementById("fg");
var fg = document.getElementById("fg");

var hex = 0;
//var hex = 16706000;

var red = 0;
var green = 0;
var blue = 0;
function update_colors(){
    bg.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    fg.style.color = "rgb("+(255-red)+","+(255-green)+","+(255-blue)+")";
    comp_div.style.color = "rgb("+(255-red)+","+(255-green)+","+(255-blue)+")";
    fg.style.fontSize = "100px";
    if(hex < 0xFFFFFF){
        hex = hex + 1;
        if(blue <= 255){
            blue = hex % 256;
        }
        else{
            blue = 0;
        }
        if(green <= 255){
            green = Math.floor((hex % 65536)/256);
        }
        else{
            green = 0;
        }
        if(red <= 255){
            red = Math.floor(hex/65536);
        }
        else{
            red = 0;
        }
    }
    fg.innerHTML = hex;
    red_amount.innerHTML = red;
    green_amount.innerHTML = green;
    blue_amount.innerHTML = blue;
}
function roll(){
    setInterval(update_colors, 1);
}

