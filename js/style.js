
function handleKeyboradButtonPress(event) {
    const playerPress = event.key;

    if(playerPress === 'Escape') {
        gameOver();
    }

    const currentElement = document.getElementById('current-alphabate');
    const currentAlphabateElement = currentElement.innerText;
    const currentAlphabate = currentAlphabateElement.toLowerCase();

    // console.log(playerPress, currentAlphabate);

    if (playerPress === currentAlphabate) {
        // console.log('You win the game');
        /* const scoreElement = document.getElementById('current-score');
        const scoreString = scoreElement.innerText;
        const currentScore = parseInt(scoreString);

        const score = currentScore + 1;
        scoreElement.innerText = score; */
        // console.log(score);

        // scoreUpdate('current-score', true);

        const currentValue = getElementValueById('current-score');
        const score = currentValue + 1;
        setElementValueById('current-score', score);


        removeElementColorById(currentAlphabate);
        continueGame();
    } else {
        /* const currentLifeElement = document.getElementById('current-life');
        const currentLifeString = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeString);

        const life = currentLife - 1;
        currentLifeElement.innerText = life; */
        // scoreUpdate('current-life', false);

        const currentValue = getElementValueById('current-life');
        const life = currentValue - 1;
        setElementValueById('current-life', life);
        
        if(life === 0) {
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboradButtonPress);

function continueGame() {
    const alphabate = getRandomAlphabate();

    const currentElement = document.getElementById('current-alphabate');
    currentElement.innerText = alphabate.toUpperCase();

    setElementColorById(alphabate);
}

function play() {
    /* const homeSection = document.getElementById('home-section');
    // homeSection.style.display = 'none';
    homeSection.classList.add('hidden') */
    /* const playGound = document.getElementById('play-ground');
    // playGound.style.display = 'block';
    playGound.classList.remove('hidden') */

    hiddenElementById('home-section');
    hiddenElementById('game-score');
    showElemetByID('play-ground');
    setElementValueById('current-score', 0);
    setElementValueById('current-life', 10);
    continueGame();
}

function gameOver() {
    hiddenElementById('play-ground');
    showElemetByID('game-score');

    const currentScore = getElementValueById('current-score');
    setElementValueById('total-score', currentScore);

    const currentAlphabate = getElementTextById('current-alphabate');
    const currentAlpha = currentAlphabate.toLowerCase();
    removeElementColorById(currentAlpha);
    // console.log(currentAlpha);
}

