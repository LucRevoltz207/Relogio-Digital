setInterval(function(){
const display = document.getElementById('display');
let time = new Date();
let minutes = time.getMinutes();
let hours = time.getHours();
let seconds = time.getSeconds();

    if (hours < 10) hours = '0' + hours;

    if (minutes < 10) minutes = '0' + hours;

    if (seconds < 10) seconds = '0' + seconds;

display.innerHTML = `${hours}: ${minutes}: ${seconds}`


})