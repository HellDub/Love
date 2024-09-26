document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popupContainer');
    const closePopup = document.getElementById('closePopup');

    popupContainer.style.display = 'flex';

    closePopup.addEventListener('click', function () {
        popupContainer.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation (replace with actual validation logic)
        if (username === 'Selma' && password === '3o3o3a') {
            document.getElementById('loginContainer').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
        } else {
            alert('Invalid credentials');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('quizModal');
    const showQuizLink = document.getElementById('showQuizLink');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Show quiz modal
    showQuizLink.onclick = function (event) {
        event.preventDefault();
        modal.style.display = 'flex';
    };

    // Close quiz modal
    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Step 1: Check dating date (16/02/2024)
    document.getElementById('quizSubmit1').addEventListener('click', function () {
        const dateInput = document.getElementById('quizDate').value;
        if (dateInput === '2024-02-16') {
            document.getElementById('step1').style.display = 'none';
            document.getElementById('step2').style.display = 'block';
        } else {
            alert('Wrong date! Try again.');
        }
    });

    // Step 2: Check location of first "I love you" (Anfa Park)
    document.getElementById('quizSubmit2').addEventListener('click', function () {
        const answer2 = document.getElementById('quizAnswer2').value.toLowerCase();
        if (answer2 === 'anfa park') {
            document.getElementById('step2').style.display = 'none';
            document.getElementById('step3').style.display = 'block';
        } else {
            alert('Wrong location! Try again.');
        }
    });

    // Step 3: Check spilled drink name (Exotic Tropical)
    document.getElementById('quizSubmit3').addEventListener('click', function () {
        const answer3 = document.getElementById('quizAnswer3').value.toLowerCase();
        if (answer3 === 'exotic tropical') {
            document.getElementById('step3').style.display = 'none';
            document.getElementById('step4').style.display = 'block';
        } else {
            alert('Wrong drink! Try again.');
        }
    });

    // Step 4: Check Sky 28 reservation fail word (vitrine)
    document.getElementById('quizSubmit4').addEventListener('click', function () {
        const answer4 = document.getElementById('quizAnswer4').value.toLowerCase();
        if (answer4 === 'vitrine') {
            document.getElementById('step4').style.display = 'none';
            document.getElementById('quizHint').style.display = 'block';
        } else {
            alert('Wrong word! Try again.');
        }
    });
});

let heartRateInterval;

function updateHeartRate() {
    const heartRate = document.getElementById('heartRateSlider').value;
    clearInterval(heartRateInterval);
    heartRateInterval = setInterval(createRain, heartRate);
}

updateHeartRate();



const waterCanvas = document.getElementById('waterCanvas');
const waterContext = waterCanvas.getContext('2d');

let mouseX = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
});

function drawWater() {
    waterCanvas.width = window.innerWidth;
    waterCanvas.height = 150;

    const gradient = waterContext.createLinearGradient(0, 0, window.innerWidth, 0);
    gradient.addColorStop(0, 'rgba(250, 250, 250)');
    gradient.addColorStop(0.5, 'rgba(250, 250, 250)');
    gradient.addColorStop(1, 'rgba(250, 250, 250)');
    waterContext.fillStyle = gradient;
    waterContext.beginPath();
    waterContext.moveTo(0, 150);
    waterContext.quadraticCurveTo(mouseX, 50, window.innerWidth, 150);
    waterContext.lineTo(window.innerWidth, 150);
    waterContext.lineTo(0, 150);
    waterContext.closePath();
    waterContext.fill();

    requestAnimationFrame(drawWater);
}

drawWater();


window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';
});
const heroText = document.querySelector('.hero-text');
const quoteElement = document.querySelector('.quote');


function typeText(element, text) {
    let index = 0;
    const intervalId = setInterval(() => {
        element.textContent += text[index];
        index++;
        if (index === text.length) {
            clearInterval(intervalId);

            currentFontIndex = fonts.findIndex(font => font.includes('Dancing Script'));
        }
    }, 200);
}

const heroTextContent = 'Selma is the Love of my life';
typeText(heroText, heroTextContent);

const fontChangeInterval = setInterval(() => {
    if (heroText.textContent.length === heroTextContent.length) {
        clearInterval(fontChangeInterval);
    } else {
        changeFont();
    }
}, 1500);


const bgMusic = document.getElementById('bgMusic');
const musicButton = document.getElementById('musicButton');

document.addEventListener("DOMContentLoaded", function () {
    initiatePlayback();
});

function initiatePlayback() {
    bgMusic.play().then(() => {
        updateMusicButton();
    }).catch((error) => {
        console.error("Auto-play prevented: ", error);
        musicButton.style.display = "inline-block";
    });
}

function updateMusicButton() {
    if (bgMusic.muted) {
        musicButton.textContent = "🔈";
    } else {
        musicButton.textContent = "🔊";
    }
}

musicButton.addEventListener('click', toggleMusic);

function toggleMusic() {
    bgMusic.muted = !bgMusic.muted;
    updateMusicButton();
}


const quotes = [
    "Selma, my heart, my guiding star",
    "Your smile’s glow, shines from afar",
    "Laughing together, at life’s silly stumbles",
    "In your embrace, my worries crumble",
    "Through every laugh, every stubborn glance",
    "I’ll hold you close, in life’s dance",
    "Your purple dress sways in the breeze",
    "I’m lost in love, with such ease",
    "In every soft touch, I feel it’s true",
    "I’m forever yours, and you, forever my view",
    "No matter the day, no matter the night",
    "You are my everything, my heart’s delight."
];

let currentQuoteIndex = 0;

function getNextQuote() {
    const nextQuote = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    return nextQuote;
}

function updateQuote() {
    const quoteElement = document.querySelector('.quote');
    const newQuote = getNextQuote();
    quoteElement.textContent = newQuote;
    setTimeout(updateQuote, 3000);
}

updateQuote();
function createRain() {
    const heartCatcher = document.querySelector('.click-catcher');

    const heart = document.createElement("div");
    heart.classList.add("heart");

    const size = Math.floor(Math.random() * (100 - 40 + 1)) + 40;

    const blur = Math.floor(Math.random() * 7) + 1;
    heart.style.width = size + "px"; 
    heart.style.height = size + "px";
    heart.style.filter = `blur(${blur}px)`;

    const opacity = Math.random() * 0.4 + 0.6;
    heart.style.opacity = opacity;

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    const heartImage = document.createElement("img");
    heartImage.src = "./assets/heart.png";
    heartImage.alt = "Heart";
    heartImage.style.width = "100%";
    heart.appendChild(heartImage);

    heartCatcher.appendChild(heart);

    heart.addEventListener('click', () => {
        const popSound = document.getElementById('popSound');
        popSound.play();

        setTimeout(() => {
            heart.remove();
        }, 0);
    });

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createRain, 160);
