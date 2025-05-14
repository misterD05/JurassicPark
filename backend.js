let button = document.getElementById("trex");
let visible = false;
button.addEventListener('click', async function () {
    if(visible){
        document. getElementById("Trex").innerHTML = "";
        visible = !visible;
    }else{
        let response = await fetch("https://misterd05.github.io/JurassicPark/trexInfo.json").then(function (response) { return response.json() });

        console.log(response);
        document. getElementById("Trex").innerHTML= ("<h2>Nome: " + response.name + "</h2>");
        document. getElementById("Trex").insertAdjacentHTML('beforeend', '<h2>scientificName: ' + response.scientificName + '</h2>');
        document. getElementById("Trex").insertAdjacentHTML('beforeend', '<h2>type: ' + response.type + '</h2>');
        document. getElementById("Trex").insertAdjacentHTML('beforeend', '<h2>diet: ' + response.diet + '</h2>');
        document. getElementById("Trex").insertAdjacentHTML('beforeend', '<h2>length: ' + response.length + '</h2>');
        document. getElementById("Trex").insertAdjacentHTML('beforeend', '<h2>height: ' + response.height + '</h2>');
        document. getElementById("Trex").insertAdjacentHTML('beforeend', '<h2>weight: ' + response.weight + '</h2>');
        visible = !visible;
    }
})




/*https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch*/
