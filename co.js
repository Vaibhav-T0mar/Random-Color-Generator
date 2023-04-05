const body = document.body;
const button = document.querySelector('button');
console.log(body);
 
const id = setInterval(()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const rgb =`rgb(${red},${green},${blue})`; 
    console.log(rgb)
    body.style.backgroundColor = rgb
},1000);
console.log(id)
button.addEventListener("click", ()=>{
    clearInterval(id);
    button.textContent = body.style.backgroundColor;
    button.style.color = body.style.backgroundColor;
})

button.addEventListener("dblclick", ()=>{
    button.textContent = 'you tab two times'
})
