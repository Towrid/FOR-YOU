const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionText = document.getElementById('question-text');
const mainGif = document.getElementById('display-gif');

// Helper function to move the button
function moveButton() {
    // Subtracting a bit more (50px) to ensure it doesn't hit the very edge
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.margin = '0'; // Removes any CSS margins that might offset it
}

// Mouse events for Desktop
noBtn.addEventListener('mouseover', moveButton);

// Touch events for Mobile (the "touchstart" fix)
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    moveButton();
});

// What happens when "Yes" is clicked
yesBtn.addEventListener('click', () => {
    questionText.innerHTML = "Yay! See you on the 14th! ❤️";
    mainGif.src = "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"; 
    noBtn.style.display = 'none'; 
    
    // Optional: make the Yes button disappear too
    yesBtn.style.display = 'none';
});