// Write your code here
const aBackBtn= document.getElementById("aBack");
const backBtn= document.getElementById("back");
const stopsBtn= document.getElementById("stops");
const forwardBtn= document.getElementById("forward");
const aForwardBtn= document.getElementById("aForward");
const img = document.querySelector("img");

const img1 = "https://placekitten.com/g/500/500";
const img2 = "https://placekitten.com/g/500/400";
const img3 = "https://placekitten.com/g/500/300";
const img4 = "https://placekitten.com/g/500/600";
const images = [img1,img2,img3,img4];

let index = 0;
let interval;
img.src = images[index];

function forwarding(){
    index ++
    if(index > images.length-1){
        index = 0
    }
    img.src = images[index]
}

function backing(){
    index --
    if(index<0){
        index = images.length-1
    }
    img.src = images[index]
}

forwardBtn.addEventListener("click",()=>{
    forwarding()
});

backBtn.addEventListener("click",()=>{
    backing()
});

aForwardBtn.addEventListener("click",()=>{
    clearInterval(interval)
    interval = setInterval(forwarding,1000)
});

aBackBtn.addEventListener("click",()=>{
    clearInterval(interval)
    interval = setInterval(backing,1000)
});

stopsBtn.addEventListener("click",()=>{
    clearInterval(interval)
});
