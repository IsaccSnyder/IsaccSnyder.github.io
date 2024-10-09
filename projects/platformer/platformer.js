$(function () {
    // initialize canvas and context when able to
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    window.addEventListener("load", loadJson);
  
    function setup() {
      if (firstTimeSetup) {
        halleImage = document.getElementById("player");
        projectileImage = document.getElementById("projectile");
        cannonImage = document.getElementById("cannon");
        $(document).on("keydown", handleKeyDown);
        $(document).on("keyup", handleKeyUp);
        firstTimeSetup = false;
        //start game
        setInterval(main, 1000 / frameRate);
      }
      // Create walls - do not delete or modify this code
      createPlatform(-50, -50, canvas.width + 100, 50); //top
      createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
      createPlatform(-50, -50, 50, canvas.height + 500); //bottom
      createPlatform(canvas.width, -50, 50, canvas.height + 100);
  
      /**
       * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
       * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
       * This can help you determine specific x any y values throughout the game
       * Comment the function call out to remove the grid
       */
  
      // drawGrid();
  
      /////////////////////////////////////////////////
      //////////ONLY CHANGE BELOW THIS POINT///////////
      /////////////////////////////////////////////////
  
      // TODO 1
      // Create platforms
      // You must decide the x position, y position, width, and height of the platforms
      // example usage: createPlatform(x,y,width,height)
  
       createPlatform(300, 400, 100, 230)
       createPlatform(-80, 120, 100, 800)
       createPlatform(250, 620, 50, 10)
       createPlatform(0, 500, 50, 10)
       createPlatform(300, 195, 100, 100)
       createPlatform(400, 400, 100, 10)
       createPlatform(700, 400, 100, 10)
       createPlatform(1000, 400, 50, 10)
       createPlatform(1250, 400, 40, 10)
       createPlatform(1100, 200, 50, 10)
       createPlatform(1350, 300, 50, 10)
       createPlatform(900, 150, 50, 10)
       createPlatform(700, 150, 50, 10)
       createPlatform(500, 150, 50, 10)
       createPlatform(125, 150, 50, 10)
      // TODO 2
      // Create collectables
      // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
      // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
      // example usage: createCollectable(type, x, y, gravity, bounce)
  
  createCollectable('kennedi', 1240, 350, 1, 1)
  createCollectable('grace', 0, 76, 1, 1)
  createCollectable('max', 600, 0, 1, 1)
      
      // TODO 3
      // Create cannons
      // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
      // Your wall choices are: 'top' 'left' 'right' and 'bottom'
      // example usage: createCannon(side, position, delay, width, height)
  createCannon('top', 750, 600, 30, 50)
  createCannon('top', 1145, 600, 30, 50)
  createCannon('right', 500, 1200, 30, 10)
  
  
      
      /////////////////////////////////////////////////
      //////////ONLY CHANGE ABOVE THIS POINT///////////
      /////////////////////////////////////////////////
    }
  
    registerSetup(setup);
  });