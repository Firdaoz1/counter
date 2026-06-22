let heading = document.querySelector("h1");
let increase = document.querySelector(".increaseBtn");
let decrease = document.querySelector(".decreaseBtn");
let reset = document.querySelector(".resetBtn");

let count = 0;
increase.addEventListener("click", function(){
  count++;
  heading.textContent = count;
});
decrease.addEventListener("click", function(){
  count--;
  heading.textContent = count;
});
reset.addEventListener("click", function(){
  count = 0;
  heading.textContent = count;
})
