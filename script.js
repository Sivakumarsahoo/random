const btn=document.querySelector("button");
console.log(btn);
const bg=document.querySelector("body");
const ti=document.querySelector("h1");
btn.addEventListener("click",act);
function act()
{
bg.style.backgroundColor=random();
ti.innerText=bg.style.backgroundColor;
btn.style.color=bg.style.backgroundColor;
}
function random()
{
    let r=Math.floor(Math.random()*256);
   let b=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    return `rgb(${r},${b},${g})`;
}