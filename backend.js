var answer =  fetch("../data.txt");

answer.then(check).then(saveNewAccount)

function check() {
    console.log(response.status)
}

function saveNewAccount() {
    console.log(answer.text)
}



/*https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch*/
