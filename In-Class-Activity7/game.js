let level = 1;
let clicks = 0;
let timeoutInterval = 500; 
let gameButton;
let gameContainer;
let levelDisplay;
let clicksDisplay;

window.onload = function() {
    gameButton = document.getElementById('game-button');
    gameContainer = document.getElementById('game-container');
    levelDisplay = document.getElementById('level');
    clicksDisplay = document.getElementById('clicks');
   
    moveButton();
    
    gameButton.addEventListener('mouseover', handleMouseOver);
    gameButton.addEventListener('click', handleButtonClick);
};

function handleMouseOver() {
    
    setTimeout(moveButton, timeoutInterval);
}

function handleButtonClick() {
    clicks++;
    clicksDisplay.textContent = clicks;
    
    
    if (clicks >= 3) {
        level++;
        
        if (level > 6) {
            
            alert('Congratulations! You have completed all levels!');
            resetGame();
        } else {
           
            alert('Level ' + (level-1) + ' completed! Advancing to Level ' + level);
            levelUp();
        }
    }
}

function moveButton() {
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;

    const buttonWidth = gameButton.offsetWidth;
    const buttonHeight = gameButton.offsetHeight;
    
    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    gameButton.style.left = randomX + 'px';
    gameButton.style.top = randomY + 'px';
}

function levelUp() {
    level = Math.min(level, 6); 
    levelDisplay.textContent = level;
    clicks = 0;
    clicksDisplay.textContent = clicks;
    
    timeoutInterval = Math.max(0, 500 - (level - 1) * 100);
    
}

function resetGame() {
    level = 1;
    clicks = 0;
    timeoutInterval = 500;
    levelDisplay.textContent = level;
    clicksDisplay.textContent = clicks;
    gameButton.style.backgroundColor = '#4CAF50';
}