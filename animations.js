var containers = document.getElementsByClassName('DinoContainer');
var drones = document.getElementsByClassName('drone');


for (let container of containers) {
    for(let drone of drones){
        container.addEventListener("mousemove", function(event) {
            drone.style.transform = `translate3d(${(event.offsetX)}px, ${(event.offsetY )}px, 0)`;
        });
    }

}


window.addEventListener('resize', function () {
    window.location.reload();
});


