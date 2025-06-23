/**********
 * DATA *
 **********/
const sixes = document.querySelector('#d6-roll')
const doubleSixes = document.querySelectorAll('#dbl img')
const twelves = document.querySelector('#d12-roll')
const twenties = document.querySelector('#d20-roll')
const resetButton = document.querySelector('#reset-button')


/********************
 * HELPER FUNCTIONS *
********************/
const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************5
 * YOUR CODE BELOW *
 *******************/
const d6Rolls = []
const doubleD6Rolls = []
const d12Rolls = []
const d20Rolls = []


/********************
 * Event Listeners *
 ********************/
sixes.addEventListener('click', rollD6)
doubleSixes.forEach(die => die.addEventListener('click', rollDoubleD6))
twelves.addEventListener('click', rollD12)
twenties.addEventListener('click', rollD20)
resetButton.addEventListener('click', resetGame)


/******************
 * RESET FUNCTION *
 ******************/
function resetGame() {
d6Rolls.length = 0;  
doubleD6Rolls.length = 0;  
d12Rolls.length = 0;
d20Rolls.length = 0;

sixes.src = "images/start/d6.png";
doubleSixes.forEach(die => die.src = "images/start/d6.png")
twelves.src = "images/start/d12.jpeg"
twenties.src = "images/start/d20.jpg"
{["d6", "double-d6", "d12", "d20"].forEach(prefix => {
  document.querySelector(`#${prefix}-rolls-means`).textContent = "NA";
  document.querySelector(`#${prefix}-rolls-median`).textContent = "NA";
  document.querySelector(`#${prefix}-rolls-mode`).textContent = "NA";
})
}}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function rollD6(){
   const result = getRandomNumber(6)
   d6Rolls.push(result)
  sixes.src = `images/d6/${result}.png`
  updateStats(d6Rolls, "d6")
}

function rollDoubleD6(){
   const result1 = getRandomNumber(6)
   const result2 = getRandomNumber(6)
   doubleD6Rolls.push(result1 + result2)
   doubleSixes[0].src = `images/d6/${result1}.png`
   doubleSixes[1].src = `images/d6/${result2}.png`
   updateStats(doubleD6Rolls, "double-d6")
}

function rollD12(){
   const result = getRandomNumber(12)
   d12Rolls.push(result)
  twelves.src = `images/numbers/${result}.png`
  updateStats(d12Rolls, "d12")
}

function rollD20(){
   const result = getRandomNumber(20)
   d20Rolls.push(result)
  twenties.src = `images/numbers/${result}.png`
  updateStats(d20Rolls, "d20")
}

resetGame();




/****************
 * MATH SECTION *
 ****************/
function calculateMean(arr) {
  if (arr.length === 0) return "NA";
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return (sum / arr.length).toFixed(2);
}



function calculateMedian(arr) {
   if(arr.length === 0) return "NA";
   const sorted = sortByNumber(arr);
   const mid = Math.floor(sorted.length / 2);

   if(sorted.length % 2 === 0) {
    return ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(2);
   } else {
    return sorted[mid].toFixed(2);
   }
}




function calculateMode(arr) {
  if (arr.length === 0) return "NA";
  const count = {};
  let maxFreq = 0;
  let mode = [];

  arr.forEach(val => {
    count[val] = (count[val] || 0) + 1;
    if (count[val] > maxFreq) {
      maxFreq = count[val];
    }
  });

  for (let num in count) {
    if(count[num] === maxFreq) {
      mode.push(Number(num));
    }
  }
  return mode.length === arr.length ? "No mode" : mode.join(", ");  
}

function updateStats(rollsArray, prefix) {
  const mean = calculateMean(rollsArray);
  const median = calculateMedian(rollsArray);
  const mode = calculateMode(rollsArray);

  document.querySelector(`#${prefix}-rolls-mean`).textContent = mean;
  document.querySelector(`#${prefix}-rolls-median`).textContent = median;
  document.querySelector(`#${prefix}-rolls-mode`).textContent = mode;
}