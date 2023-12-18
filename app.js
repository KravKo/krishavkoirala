const rotateButton = document.getElementById('navbtnid');
let dropdown = document.getElementById('dropdown');
let isRotated = false;

rotateButton.addEventListener('click', function () {
    if (isRotated) {
        rotateButton.classList.remove('rotated');
        dropdown.classList.remove('active');
        isRotated = false;
    } else {
        rotateButton.classList.add('rotated');
        dropdown.classList.add('active');
        isRotated = true;
    }
});



const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const textArray = ["Web Developer", "Student", "Programmer", "Future Game Developer"];
    let currentTextIndex = 0;
    let currentText = '';
    let letterIndex = 0;
    let texttyping = document.getElementById('typing-text');

    function type() {
        if (letterIndex < textArray[currentTextIndex].length) {
            currentText += textArray[currentTextIndex][letterIndex];
            texttyping.innerText = currentText;
            letterIndex++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (letterIndex > 0) {
            currentText = textArray[currentTextIndex].substring(0, letterIndex - 1);
            texttyping.innerText = currentText;
            letterIndex--;
            setTimeout(erase, 75);
        } else {
            currentTextIndex = (currentTextIndex + 1) % textArray.length;
            setTimeout(type, 500);
        }
    }

    type();
});
