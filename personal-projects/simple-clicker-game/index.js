let score = 0;
let ms = 1000;
const button = document.getElementById('clickMe');
const autoClickerButton = document.getElementById('autoClicker')
const scoreDisplay = document.getElementById('score');
const autoClickerDisplay = document.getElementById('autoClickerA')
const autoClickerSpeedButton = document.getElementById('autoClickerSpeed')
const autoClickerSpeedDisplay = document.getElementById('autoClickerSpeedA')
const clickButton = document.getElementById('click')
const clickDisplay = document.getElementById('clickA')

// Update score on button click
button.addEventListener('click', () => {
    score = score + clickAmount;
    scoreDisplay.textContent = `Score: ${score}`;
});

// Auto Clicker value
let autoClickerCost = 50;
let autoClickers = 0;

// Auto Clicker buy function
autoClickerButton.addEventListener('click', () => {
    if (score >= autoClickerCost) {
        score = score - autoClickerCost
        autoClickerCost = autoClickerCost + 50
        autoClickers++
        autoClickerButton.textContent = `Buy Auto Clicker (Cost: ${autoClickerCost})`;
        autoClickerDisplay.textContent = `You have ${autoClickers} auto clicker's`;
        scoreDisplay.textContent = `Score: ${score}`;
        console.log('Auto Clicker function is working')
    } else {console.log('Auto Clciker function is either not working or you do not have enough score to buy 1')}
});

// Auto Clicker click function
function autoClickerClick() {
    score += autoClickers
    scoreDisplay.textContent = `Score: ${score}`;
};

setInterval(autoClickerClick, ms);

function changeSI() {
    clearInterval(autoClickerClick)
    setInterval(autoClickerClick, ms);
    console.log(`SI has changed to ${ms}`)
}

// Auto Clicker speed value
let autoClickerSpeedCost = 100
let autoClickerSpeedBought = 0

// Auto Clicker speed upgrade function
autoClickerSpeedButton.addEventListener('click', () => {
    if (score >= autoClickerSpeedCost && autoClickerSpeedBought < 200) {
        score = score - autoClickerSpeedCost
        autoClickerSpeedCost = autoClickerSpeedCost + 100
        ms = ms - 5
        autoClickerSpeedBought++
        autoClickerSpeedButton.textContent = `Buy Auto Clicker Speed Upgrade (Cost: ${autoClickerSpeedCost})`;
        autoClickerSpeedDisplay.textContent = `You have bought ${autoClickerSpeedBought} out of 200 of the speed upgrade`;
        scoreDisplay.textContent = `Score: ${score}`;
        console.log('Auto Clicker speed upgrade function is working')
    } else {console.log('Auto Clciker speed function is either not working, you do not have enough score to buy 1, or you have bought the max amount of upgrades')}
    changeSI();
});

// Fix the ms to stop it from going to 0
function fixms() {
    if (ms <= 0) {
        ms++
        console.log('fix ms part of code is working')
    };
}

setInterval(fixms, 10)

// Click upgrade value
let clickUpgradeCost = 250
let clickAmount = 1

// Click upgrade function
clickButton.addEventListener('click', () => {
    if (score >= clickUpgradeCost) {
        score = score - clickUpgradeCost
        clickUpgradeCost = clickUpgradeCost + 250
        clickAmount++
        clickButton.textContent = `Buy Click Upgrade (Cost: ${clickUpgradeCost})`
        clickDisplay.textContent = `You have bought ${clickAmount} click upgrade's`
        scoreDisplay.textContent = `Score: ${score}`
        console.log('Click upgrade function is working')
    } else {console.log('Click upgrade function is either not working or you do not have enough score to buy 1')}
});