
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
var body = document.querySelector('body');
isBlue = false;
setInterval(function(){
    if(isBlue){
        body.style.background = getRandomColor();
    }else{
        body.style.background = 'white';
    }
    isBlue = !isBlue;
},1000);
function calc(){
    var a = parseInt(document.querySelector('#value1').value);
    var b = parseInt(document.querySelector('#value2').value);
    var op = document.querySelector('#operator').value;
    var calculate;

    if( op == 'add'){
        calculate = a+b;
    }else if(op == 'subtract'){
        calculate = a - b;
    }else if(op == 'divide'){
        calculate = a/b;
    }else if(op == 'multiply'){
        calculate = a*b;
    }
 document.querySelector('#result').innerHTML = calculate;

}
var reset = document.querySelector('#reset');
reset.addEventListener('click',function(){
    document.querySelector('#value1').value = "";
    document.querySelector('#value2').value = "";
    document.querySelector('#result').innerHTML = "";
})
