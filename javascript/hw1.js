let name = prompt('Adiniz: ');
document.querySelector('#myName').innerHTML = name;


const today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();

document.querySelector('#myClock').innerHTML = h + ':' + m + ':' + s;
