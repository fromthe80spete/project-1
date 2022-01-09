function init() {

  // * Grid Variables
  const grid = document.querySelector('.grid') // get the grid element

  const width = 6 // define the width
  const cellCount = width * width // define the number of cells on the grid
  const cells = [] // empty array to store our divs that we create


  // * Player variables 

  const playerClass = 'player' // define the class of the character
  const playerStartPosition = 0 // starting position of the player (refers to an index)
  let playerCurrentPosition = 0 // use let to track where the cat currently is (refers to an index)

  // * Player scores

  let elonScore = 0 // Player one
  let jeffScore = 0 // player two

  // * Result variables
  
  const result = document.querySelector('#result')
  const showCurrentPlayer = document.getElementById('#current-player')

  // * Coin variables

  const dogeCoin = document.getElementById('#doge')
  const bitCoin = document.getElementById('#bit')



  // * Make grid function 

  function createGrid(playerStartPosition) {
    for (let i = 0; i < cellCount; i++) { // for loop to run for every cell, in this case we want 100 cells
      const cell = document.createElement('div') // create the div
      cell.innerText = i // inner text of the div to be its index
      grid.appendChild(cell) // make the cell a child of the grid element we grabbed above
      cells.push(cell) // add the newly created div into our empty array
    }
    addPlayer(playerStartPosition)
  }

  // * Add Player to top of game

  function addPlayer(position) { // takes argument so function is reusable
    console.log('POSITION BEING PASSED IN --->', position)
    console.log('CELL WE ARE PICKING USING THE POSITION INDEX BEING PASSED IN --->', cells[position])
    cells[position].classList.add(playerClass) // use position as index to pick the corresponding div from the array of cells and add the class of cat
  }

  // * Coin drop function

  function coinDrop() {
    removePlayer()
    addCoin()
  }

  // * Remove Player from the grid

  function removePlayer(position) {
    cells[position].classList.remove(playerClass)
  }
  // Remove player after coin is dropped.

  // *  player moves determined for the coin drop

  function handleKeyDown(event) {
    const key = event.keyCode // store the event.keyCode in a variable to save us repeatedly typing it out
    const left = 37
    const right = 39
    const space = 32


    console.log('POSITION BEFORE REDEFINING --->', playerCurrentPosition)
    removePlayer(playerCurrentPosition)

    if (key === right && playerCurrentPosition % width !== width - 1) { // if the right arrow is pressed and the cat is not on the right edge
      playerCurrentPosition++ // redefine player position index to be previous position plus 1
    } else if (key === left && playerCurrentPosition % width !== 0) {
      playerCurrentPosition--
    } else if (key === space || (coinDrop)) { // Space bar for coin drop. 
      alert('Direction not permitted, you can only move left, right, or select left mouse to drop the coin.')
    }
    console.log('POSITION AFTER REDEFINING --->', playerCurrentPosition)
    addPlayer(playerCurrentPosition) // Add player to the new position that was defined in the if statement above
  }  // handleKeyDown function end //

  // * Event listeners
  document.addEventListener('keydown', handleKeyDown) // listening for key/mouse press
  document.addEventListener('mousedown', handleKeyDown)

  createGrid(playerStartPosition) // Pass function the starting position for coin drop
}

window.addEventListener('DOMContentLoaded', init)