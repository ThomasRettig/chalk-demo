import chalkAnimation from "chalk-animation";

const rainbow = chalkAnimation.rainbow('Are you gay?'); // Animation starts

setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 1000);

setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 2000);