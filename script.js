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
