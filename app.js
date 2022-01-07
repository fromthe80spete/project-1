function init() {

  // * Variables
  const grid = document.querySelector('.grid') // get the grid element
  
  const width = 6 // define the width
  const cellCount = width * width // define the number of cells on the grid
  const cells = [] // empty array to store our divs that we create

  const playerClass = 'player' // define the class of the character
  const playerStartPosition = 0 // starting position of the cat (refers to an index)
  let playerCurrentPosition = 0 // use let to track where the cat currently is (refers to an index)


  // * Make a grid
  function createGrid(playerStartPosition) {
    for (let i = 0; i < cellCount; i++) { // for loop to run for every cell, in this case we want 100 cells
      const cell = document.createElement('div') // create the div
      cell.innerText = i // inner text of the div to be its index
      grid.appendChild(cell) // make the cell a child of the grid element we grabbed above
      cells.push(cell) // add the newly created div into our empty array
    }
    addCat(playerStartPosition) // call the function to add the cat at its starting position
  }

  // * Add Cat to grid
  function addPlayer(position) { // takes argument so function is reusable
    console.log('POSITION BEING PASSED IN --->', position)
    console.log('CELL WE ARE PICKING USING THE POSITION INDEX BEING PASSED IN --->', cells[position])
    cells[position].classList.add(playerClass) // use position as index to pick the corresponding div from the array of cells and add the class of cat
  }

  // * Remove Cat from the grid
  function removePlayer(position) {
    cells[position].classList.remove(playerClass)
  }

  // * Move Cat

  function handleKeyDown(event) {
    const key = event.keyCode // store the event.keyCode in a variable to save us repeatedly typing it out
    const left = 37
    const right = 39
    const up = 38
    const down = 40
    console.log('POSITION BEFORE REDEFINING --->', catCurrentPosition)
    removeCat(catCurrentPosition) // remove the cat from its current position
    
    // if (key === right && catCurrentPosition % width !== width - 1) { // if the right arrow is pressed and the cat is not on the right edge
    //   catCurrentPosition++ // redefine cat position index to be previous position plus 1
    // } else if (key === left && catCurrentPosition % width !== 0) { // if the left arrow is pressed and the cat is not on the left edge
    //   catCurrentPosition-- // redefine cat position index to be previous position minus 1
    // } else if (key === up && catCurrentPosition >= width) { // if the up arrow is pressed and the cat is not on the top row
    //   catCurrentPosition -= width // redefine cat position index to be previous position minus width
    // } else if (key === down && catCurrentPosition + width <= cellCount - 1) { // if the down arrow is pressed and the cat is not on the bottom row
    //   catCurrentPosition += width // redefine cat position index to be previous position plus width
    // } else {
    //   console.log('INVALID KEY') // any other key, log invalid key
    // }
    console.log('POSITION AFTER REDEFINING --->', playerCurrentPosition)
    addCat(catCurrentPosition) // add cat to the new position that was defined in the if statement above
  }

  // * Event listeners
  document.addEventListener('keydown', handleKeyDown) // listening for key press

  createGrid(playerStartPosition) // pass function the starting position of the cat
 
}

window.addEventListener('DOMContentLoaded', init)