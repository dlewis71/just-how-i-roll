/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

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

/*******************
 * YOUR CODE BELOW *
 *******************/
const prop = document.querySelector("#d6-rolls-mean")
  .addEventListener("click", function() {
})

const die = document.querySelector("#d6-rolls-median")
.addEventListener("click", function() {

})


const dice = document.querySelector("#d6-rolls-mode")
  .addEventListener("click", function() {

})

const img = document.querySelector("d6-roll")

const button = document.querySelector("#d6-button")
.addEventListener("click", function() {

})

/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
