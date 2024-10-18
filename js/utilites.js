function hiddenElementById(elementId) {
    const homeSection = document.getElementById(elementId);
    homeSection.classList.add('hidden')
}

function showElemetByID(elementId) {
    const playGound = document.getElementById(elementId);
    // playGound.style.display = 'block';
    playGound.classList.remove('hidden')
}

function setElementColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}

function removeElementColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}

function scoreUpdate(elementId, isTrue) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const currentValue = parseInt(elementString);

    if (isTrue === true) {
        const score = currentValue + 1;
        element.innerText = score;
    } else {
        const life = currentValue - 1;
        element.innerText = life;
    }
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const value = parseInt(elementString);
    return value;
}

function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    return elementText;
}

function getRandomAlphabate() {
    const alphabateString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabates = alphabateString.split('');

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabate = alphabates[index];
    return alphabate;
}