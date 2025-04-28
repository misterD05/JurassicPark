let mrdna = document.getElementById('mrdna');

document.getElementById("gadgets").animate([
  // key frames
  { transform: 'translateY(-100px)' },
  { transform: 'translateY(0px)' }
], {
  // sync options
    duration: 500,
});


document.getElementById("dinos").animate([
  // key frames
  { transform: 'translateY(-100px)' },
  { transform: 'translateY(0px)' }
], {
  // sync options
    duration: 600,
});

document.getElementById("aboutUs").animate([
    // key frames
  { transform: 'translateY(-100px)' },
  { transform: 'translateY(0px)' }
], {
  // sync options
    duration: 400,
});

mrdna.addEventListener('click', function () {
    if (document.getElementById('gadgets').style.visibility == "visible") {

        document.getElementById('aboutUs').style.visibility = "hidden";
        document.getElementById('dinos').style.visibility = "hidden";
        document.getElementById('gadgets').style.visibility = "hidden";
    } else {
        document.getElementById('aboutUs').style.visibility = "visible";
        document.getElementById('dinos').style.visibility = "visible";
        document.getElementById('gadgets').style.visibility = "visible";

        document.getElementById("gadgets").animate([
            // key frames
            { transform: 'translateY(-100px)' },
            { transform: 'translateY(0px)' }
        ], {
            // sync options
            duration: 500,
        });


        document.getElementById("dinos").animate([
            // key frames
            { transform: 'translateY(-100px)' },
            { transform: 'translateY(0px)' }
        ], {
            // sync options
            duration: 600,
        });

        document.getElementById("aboutUs").animate([
            // key frames
            { transform: 'translateY(-100px)' },
            { transform: 'translateY(0px)' }
        ], {
            // sync options
            duration: 400,

        })
    }

})


let submitCheck = document.getElementById('submitFirst');
let answerSubmit = document.getElementById('answersSubscribe');
let formSubscribe= document.getElementById('formSubscribe');
let closeButton=document.getElementById('close');
submitCheck.addEventListener("click", visualizeEl);
closeButton.addEventListener("click", visualizeElI);

function visualizeEl(){
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let date = document.getElementById('date').value;
    let email = document.getElementById('email').value;

    if (name != "" && surname != "" && date != "" && email != "") {
        document.getElementById('nameR').innerHTML = name;
        document.getElementById('surnameR').innerHTML = surname;
        document.getElementById('dateR').innerHTML = date;
        document.getElementById('emailR').innerHTML = email;
        answerSubmit.style.visibility = "visible";
        formSubscribe.style.visibility="hidden";
    }




}


function visualizeElI(){
  answerSubmit.style.visibility = "hidden";
  formSubscribe.style.visibility="visible";
}
