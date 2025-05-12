

const document2 = document.innerHTML;


let button = document.getElementById("dinosPage");
button.addEventListener('click', async function () {
    let response = await fetch("./html/dinosaurs").then(function (response) { return response.text() });

    console.log(response);
    document.innerHTML = (response);

})




/*https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch*/
