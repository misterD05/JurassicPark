let dinos = document.getElementById('dinos');
let gadgets  = document.getElementById('gadgets');
let aboutUs = document.getElementById('aboutUs');
let logo = document.getElementById('logo');
let menu = "    <nav id='menuBar'> <div class= 'but' id='logo'><div><img src='./img/logo.png' height='120px' width='120px'></div></div> <div class='but' id='dinos'> <div><img src='./img/bone.png'></div> <label class='lab' id='lab1'>Dinosaurs</label> </div> <div class='but' id='gadgets'> <div><img src='./img/shopping-bag.png' ></div> <label  class='lab' id='lab2'>Gadgets</label> </div> <div class='but id='aboutUs'> <div><img src='./img/users-round.png' ></div> <label class='lab' id='lab3'>About us</label> </div> <div class='but' id='mrdna'> <img src='./img/mrDNA.png ' height='60px' width='60px'> <label class='lab' id='lab4'>Mr. DNA</label> </div> </nav>"

dinos.addEventListener("click", async function (){
    let doc;
    let response = await fetch("./html/dinosaurs.html").then(function(response){return response.text()}).then(function (html){let parser = new DOMParser(); doc =  parser.parseFromString(html, 'text/html')});
    console.log(menu +  doc.getElementsByTagName('body').innerHTML);
    document.innerHTML = menu +  doc.getElementsByTagName('body').innerHTML;

})
gadgets.addEventListener("click", async function (){
    let response = await fetch("https://misterD05.github.io/JurassicPark/html/gadgets.html").then(function(response){return response.text()});
    document.innerHTML = menu +  response.body;

})
aboutUs.addEventListener("click", async function (){
    let response = await fetch("https://misterD05.github.io/JurassicPark/html/aboutus.html").then(function(response){return response.text()});
    document.innerHTML = menu +  response.body;

})
logo.addEventListener("click", async function (){
    let response = await fetch("https://misterD05.github.io/JurassicPark/indexOriginal.html").then(function(response){return response.text()});
    document.innerHTML = menu +  response.body;

})