
let curpos=0;
let positionValue=0;
const img_width=480;

const pBn=document.querySelector(".prev");
const pNn=document.querySelector(".next");
const imgs=document.querySelector(".imgs")

function next(){
    if(curpos<4){
        pBn.removeAttribute(`disabled`);
        positionValue=positionValue-img_width;
        imgs.style.transform = `translateX(${positionValue}px)`;
        curpos +=1;
        if (curpos === 4){
            pNn.setAttribute(`disabled`,`true`)
        }

    }
}


function prev(){
    if(curpos > 0){
        pNn.removeAttribute(`disabled`);
        positionValue=positionValue+img_width;
        imgs.style.transform = `translateX(${positionValue}px)`;
        curpos -=1;
        if (curpos===0){
            pBn.setAttribute(`disabled`,`true`)
        }
    }
}

function init(){
    pBn.setAttribute(`disabled`,`true`);
    pBn.addEventListener("click",prev)
    pNn.addEventListener("click",next);
}

init();
console.log(curpos)