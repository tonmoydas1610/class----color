let incrementBtn = document.querySelector("#increment");
let decrementBtn = document.querySelector("#decrement");
let input= document.querySelector("input");

incrementBtn.addEventListener('click',function(){
    input.value++;
});


decrementBtn.addEventListener('click',function(){
    if(input.value>=1){
        input.value--;
    }
});

// color part start


let colourBtn = document.querySelector(".colour_btn");
let colourGen = document.querySelector("#colour");

colourBtn.addEventListener("click", function () {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    colourGen.style.backgroundColor = `rgb(${red}, ${blue},${green})`;
});

// color part end

window.addEventListener('scroll', function(){
    let btnScroll = document.querySelector('.btn')
    if(window.scrollY > 200){
        btnScroll.classList.add('active');
    }
    else{
        btnScroll.classList.remove('active');

    }
});
