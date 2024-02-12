const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const img = document.querySelector("img");
const counts = document.querySelector(".counts");
const lengths = document.querySelector(".lengths");
let count = 0;
const imgArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];

lengths.innerHTML =imgArray.length;

console.log(imgArray.length - 1);
next.addEventListener("click", ()=>{
    count++;
    if(count > imgArray.length - 1) count = 0;
    img.setAttribute("src",`images/${imgArray[count]}`)
    counts.innerHTML = count+1;
});



prev.addEventListener("click", ()=>{
    count--;
    if(count < 0) count = imgArray.length - 1;
    img.setAttribute("src",`images/${imgArray[count]}`)
});