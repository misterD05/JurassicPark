let button = document.getElementById("trex");
let visible = false;
button.addEventListener('click', async function () {
    if(visible){
        document.getElementById("title").innerHTML = ("<h1>Tirannosaurus Rex</h1>")
        document. getElementById("Trextext").innerHTML = ("<div></div>");
        visible = !visible;
        document.getElementById("trex").innerHTML = "View";
    }else{
        let response = await fetch("https://misterd05.github.io/JurassicPark/trexInfo.json").then(function (response) { return response.json() });

        console.log(response);
        document.getElementById("title").innerHTML = ("<img src='../img/trexInfo.png' height='auto' width='100%' id='imgTrex'  alt=''>")
        document. getElementById("Trextext").innerHTML= ("<h2>Name: " + response.name + "</h2>");
        document. getElementById("Trextext").insertAdjacentHTML('beforeend', '<h2>scientificName: ' + response.scientificName + '</h2>');
        document. getElementById("Trextext").insertAdjacentHTML('beforeend', '<h2>type: ' + response.type + '</h2>');
        document. getElementById("Trextext").insertAdjacentHTML('beforeend', '<h2>diet: ' + response.diet + '</h2>');
        document. getElementById("Trextext").insertAdjacentHTML('beforeend', '<h2>length: ' + response.length + '</h2>');
        document. getElementById("Trextext").insertAdjacentHTML('beforeend', '<h2>height: ' + response.height + '</h2>');
        document. getElementById("Trextext").insertAdjacentHTML('beforeend', '<h2>weight: ' + response.weight + '</h2>');
        visible = !visible;
        document.getElementById("trex").innerHTML = "Close";
    }
})


let button2 = document.getElementById("quetz");
let visible2 = false;
button2.addEventListener('click', async function () {
    if(visible){
        document.getElementById("title2").innerHTML = ("<h1>Quetzalcoatlus</h1>")
        document. getElementById("Quetztext").innerHTML = ("<div></div>");
        visible = !visible;
        document.getElementById("quetz").innerHTML = "View";
    }else{
        let response = await fetch("https://misterd05.github.io/JurassicPark/quetzInfo.json").then(function (response) { return response.json() });

        console.log(response);
        document.getElementById("title2").innerHTML = ("<img src='../img/trexInfo.png' height='auto' width='100%' id='imgQuetz'  alt=''>")
        document. getElementById("Quetztext").innerHTML= ("<h2>Name: " + response.name + "</h2>");
        document. getElementById("Quetztext").insertAdjacentHTML('beforeend', '<h2>scientificName: ' + response.scientificName + '</h2>');
        document. getElementById("Quetztext").insertAdjacentHTML('beforeend', '<h2>type: ' + response.type + '</h2>');
        document. getElementById("Quetztext").insertAdjacentHTML('beforeend', '<h2>diet: ' + response.diet + '</h2>');
        document. getElementById("Quetztext").insertAdjacentHTML('beforeend', '<h2>length: ' + response.length + '</h2>');
        document. getElementById("Quetztext").insertAdjacentHTML('beforeend', '<h2>weight: ' + response.weight + '</h2>');
        document. getElementById("Quetztext").insertAdjacentHTML('beforeend', '<h2>Wing Span: ' + response.wingspan + '</h2>');
        document. getElementById("Quetztext").insertAdjacentHTML('beforeend', '<h2>height: ' + response.height + '</h2>');
        visible = !visible;
        document.getElementById("quetz").innerHTML = "Close";
    }
})





/*https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch*/
