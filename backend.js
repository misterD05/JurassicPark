let button = document.getElementById("trex");
let visible = false;
button.addEventListener('click', async function () {
    if(visible){
        document. getElementById("Trex").innerHTML = "";
    }else{
        let response = await fetch("misterD05.github.io/JurassicPark/Info/trexInfo.json").then(function (response) { return response.json() });

        console.log(response);
        document. getElementById("Trex").innerHTML= (response);
    }
})




/*https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch*/
