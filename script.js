document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = Array.from(carousel.children);
    
    let speed = 1; // Adjust scrolling speed
    let translateX = 0;

    function moveCarousel() {
        translateX -= speed;
        carousel.style.transform = `translateX(${translateX}px)`;

        let firstImage = images[0];
        let firstImageWidth = firstImage.offsetWidth; // Image width + margin

        if (translateX <= -firstImageWidth) {
            carousel.appendChild(firstImage); // Move first image to the end
            images.push(images.shift()); // Reorder array
            translateX += firstImageWidth; // Reset translation
            carousel.style.transform = `translateX(${translateX}px)`;
        }

        requestAnimationFrame(moveCarousel);
    }

    moveCarousel();
});

// Set the date we're counting down to
var countDownDate = new Date("Nov 15, 2025 0:0:0").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("Countdown").innerHTML = days + "    " + hours + "    "
    + minutes + "    " + seconds + "    ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("Countdown").innerHTML = "EXPIRED";
    }
}, 1000);


document.getElementById("circle").addEventListener("click", function() {
    document.getElementById("links").classList.toggle("active")
});

document.getElementById("X").addEventListener("click", function() {
    document.getElementById("links").classList.remove("active");
});
