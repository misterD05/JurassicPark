var containers = document.getElementsByClassName('DinoContainer');
var drones = document.getElementsByClassName('drone');


for (let i = 0; i < containers.length; i++) {
    containers[i].addEventListener("mousemove", function(event) {
            drones[i].style.transform = `translate3d(${(event.offsetX)}px, ${(event.offsetY )}px, 0)`;
    });
}


window.addEventListener('resize', function () {
    window.location.reload();
});


