console.clear()
console.log("Application Started...")

let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let button3 = document.getElementById('btn3');
let button4 = document.getElementById('btn4');
let button5 = document.getElementById('btn5');
let button6 = document.getElementById('btn6');
let button7 = document.getElementById('btn7');
let button8 = document.getElementById('btn8');
let button0 = document.getElementById('btn0');

button1.addEventListener('click', function () 
{ console.log("Button Clicked"); 
    // alert("Buton Clicked");
})
button2.addEventListener('mousedown', function () 
{ 
    console.log("Mouse Down"); 
    // alert("Mouse Down");
})
button3.addEventListener('mouseup', function () 
{ 
    console.log("Mouse Up"); 
    // alert("Mouse Up");
})
button4.addEventListener('mousemove', function () 
{ 
    console.log("Mouse Move"); 
    // alert("Mouse Move");
})
button5.addEventListener('mouseover', function () 
{ 
    console.log("Mouse Over"); 
    // alert("Mouse Over");
})
button6.addEventListener('mouseout', function ()
{ 
    console.log("Mouse Out"); 
    // alert("Mouse Out");
})
button7.addEventListener('mouseenter', function () 
{ 
    console.log("Mouse Enter"); 
    // alert("Mouse Enter");
})
button8.addEventListener('mouseleave', function () 
{ 
    console.log("Mouse Leave"); 
    // alert("Mouse Leave");
})

button0.addEventListener('click', function () { console.log("Button Clicked"); })
button0.addEventListener('mousedown', function () { console.log("Mouse Down"); })
button0.addEventListener('mouseup', function () { console.log("Mouse Up"); })
button0.addEventListener('mousemove', function () { console.log("Mouse Move"); })
button0.addEventListener('mouseover', function () { console.log("Mouse Over"); })
button0.addEventListener('mouseout', function () { console.log("Mouse Out"); })
button0.addEventListener('mouseenter', function () { console.log("Mouse Enter"); })
button0.addEventListener('mouseleave', function () { console.log("Mouse Leave"); })