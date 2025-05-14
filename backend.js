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
        document.getElementById("title").innerHTML = ("<img src='../img/trexInfo.png' alt='' height='60px' width='60px'>")
        document. getElementById("Trextext").innerHTML= ("<h2>Nome: " + response.name + "</h2>");
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




/*https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch*/
