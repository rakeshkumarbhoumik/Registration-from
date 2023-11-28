var a=document.querySelector("h1")
a.addEventListener("mouseover",function(){
    a.textContent="moye moyw";
    a.style.color="aqua";
})
a.addEventListener("mouseout",function(){
    a.textContent="welcome to my page";
    a.style.color="black";
})

var b=document.querySelector("h2")
b.addEventListener("click",function(){
    b.textContent="sabu bhala ta!!!";
    b.style.color="red";
})
b.addEventListener("dblclick",function(){
    b.textContent="kan khabar";
    b.style.color="black";
})