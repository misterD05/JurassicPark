let button = document.getElementById("trex");
let visible = false;
button.addEventListener('click', async function () {
    if(visible){
        document. getElementById("Trex").innerHTML = "";
    }else{
        let response = await fetch("https://misterd05.github.io/JurassicPark/trexInfo.json").then(function (response) { return response.json() });

        console.log(response);
        document. getElementById("Trex").innerHTML= ("<h2>Nome: " + response.name + "</h2>");
        document. getElementById("Trex").innerHTML= ("<h2>scientificName: " + response.scientificName + "</h2>");
        document. getElementById("Trex").innerHTML= ("<h2>type: " + response.type + "</h2>");
        document. getElementById("Trex").innerHTML= ("<h2>diet: " + response.diet + "</h2>");
        document. getElementById("Trex").innerHTML= ("<h2>length: " + response.length + "</h2>");
        document. getElementById("Trex").innerHTML= ("<h2>height: " + response.height + "</h2>");
        document. getElementById("Trex").innerHTML= ("<h2>weight: " + response.weight + "</h2>");
    }
})




/*https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch*/
