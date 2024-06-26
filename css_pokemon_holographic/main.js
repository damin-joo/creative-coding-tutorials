var containers = document.querySelectorAll('.container');

//mouse movement on container
containers.forEach(container => {

    var overlay = container.querySelector('.overlay');

    container.addEventListener('mousemove', function(e) {
        //rotate card
        var x = e.offsetX;
        var y = e.offsetY;
        var rotateY = -1/5 * x + 20;
        var rotateX = 4/30 * y - 20;

        overlay.style = `background-position : ${x/5 + y/5}%`;
        container.style = `transform : perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

//remove effect when mouse has no contact
    container.addEventListener('mouseout', function() {
        //remove overlay
        overlay.style = 'filter : opacity(0)';

        container.style = 'transform : perspective(350px) rotate(0deg) rotateX(0deg)'
    });
});