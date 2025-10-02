/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects

  $(document).on("keydown", handleKeyDown);

  const KEY = { // The second key names repesents the arror keys if someone wants to use them
    ENTER: 13,
    LEFT: 65,
    LEFT2: 37,
    UP: 87,
    UP2: 38,
    RIGHT: 68,
    RIGHT2: 39,
    DOWN: 83,
    DOWN2: 40,
  }

  var walker = {
    x: 0, // Left/Right
    y: 0, // Up/Down
    speedX: 0, // Horizontal speed
    speedY: 0, // Vertical speed
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on('eventType', handleEvent);                          

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
  function handleKeyDown(event) {
    console.log(event.which)
    if (event.which === KEY.LEFT) {
      console.log('left pressed')
    } else if (event.which === KEY.LEFT2) {
      console.log('left arror pressed')
    } else if (event.which === KEY.RIGHT) {
      console.log('right pressed')
    } else if (event.which === KEY.RIGHT2) {
      console.log('right arror pressed')
    } else if (event.which === KEY.UP) {
      console.log('up pressed')
    } else if (event.which === KEY.UP2) {
      console.log('up arror pressed')
    } else if (event.which === KEY.DOWN) {
      console.log('down pressed')
    } else if (event.which === KEY.DOWN2) {
      console.log('down arror pressed')
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
