window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    console.log(sounds);
    const pads = document.querySelectorAll(".pads div");
    console.log(pads);
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];


    pads.forEach((pado, index) => {
        console.log(pado, index);
        pado.addEventListener("click", function () {
            sounds[index].currentTime = 0;//resetting the current time to zero
            sounds[index].play();
            createBubble(index);
        });

    });

    //function to create bubbles
    const createBubble = (index) => {
        
        //Create bubbles
        const bubble = document.createElement("div");
        console.log(bubble);
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        });
    };




});