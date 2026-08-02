// Generating Dice.
const DICE = {
    D4: [1, 4],
    D6: [1, 6],
    D8: [1, 8],
    D10: [1, 10],
    D12: [1, 12],
    D20: [1, 20]
}
// Track selected dice range.
let selectedDiceRange = null;
let selectedDiceName = "";

// Dice face generator.
function getRandomIntInclusive(min, max) {
  const low = Math.ceil(min);
  const high = Math.floor(max);
  return Math.floor(Math.random() * (high - low + 1) + low);
}

// Select dice.
const diceButton = document.getElementsByClassName('dice');
if (diceButton) {
  Array.from(diceButton).forEach((button) => {
    button.addEventListener('click', (event) => {
      const diceType = event.target.innerText;
      selectDice(diceType);
    })
  })
}
function selectDice(diceType) {
    if (DICE[diceType]) {
        selectedDiceRange = DICE[diceType];
        selectedDiceName = diceType.toUpperCase();

        // Update "Selected Dice".
        const displayArea = document.getElementById("selectedDiceDisplay");
        if (displayArea) {
            displayArea.textContent = `${selectedDiceName}`;
        }
    }
}
selectDice();

// Roll dice.
const rollButton = document.getElementById('rollButton');
if (rollButton) {
  rollButton.addEventListener('click', rollDice);
}
function rollDice() {
  const resultDisplay = document.getElementById("ResultDisplay");

  if (!selectedDiceRange) {
    if (resultDisplay) resultDisplay.textContent = "Please select a dice first.";
    return;
  }

  const rollResult = getRandomIntInclusive(...selectedDiceRange);

  if (resultDisplay) {
    resultDisplay.textContent = `${rollResult}`;
  }
}