let ufo = document.querySelector("img");
let posTop = parseInt(getComputedStyle(ufo).top.split("px")[0]);
let posLeft = parseInt(getComputedStyle(ufo).left.split("px")[0]);
let speed = 20;

//To move ufo upward
let moveUp = () =>{
  if(posTop > 0 ){posTop -= speed;
    ufo.style.top = posTop + "px";}
    // ufo.style.top = "-115px";
};

//To move ufo left side
let moveLeft = () =>{
  if(posLeft > 48){posLeft -= speed;
    ufo.style.left = posLeft + "px";}
    // ufo.style.left = "45px";
};

//To move ufo right side
let moveRight = () =>{
   if(posLeft < innerWidth - 100){posLeft += speed;
    ufo.style.left = posLeft + "px";}
    // ufo.style.left = "1430px";
};

//To move ufo downward
let moveDown = () =>{
   if(posTop < innerHeight - 100){posTop += speed;
    ufo.style.top = posTop + "px";}
    // ufo.style.top = "500px";
};

let setSpeed = (e) => {
 let value = document.querySelector("#speed").value;
 speed = parseInt(value);
 let speedValue = document.querySelector("#value");
 speedValue.innerText = speed;
}

let toggleSpeed = (e) => {
  e.target.classList.toggle("rotate");
  let box = document.querySelector(".box");
  box.classList.toggle("hide");
}