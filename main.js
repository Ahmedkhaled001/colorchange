
var buttonEl = document.querySelector(".btn")
var divEl = document.querySelector(".mydiv")
var colors = ["red", "blue","green"]
var i = 0

buttonEl.onclick = function() {
    divEl.style.backgroundColor = colors[i];
    i++;

    if( i==3 ){
        i = 0
    }


}