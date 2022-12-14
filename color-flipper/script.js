const buttons = document.querySelector('button');
const h2e = document.querySelector('h2');
const bge = document.querySelector('main');

buttons.addEventListener('click', function(){
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    console.log(color);
    bge.style.backgroundColor = color;

    h2e.innerText = ('background color :' + color) ;

})