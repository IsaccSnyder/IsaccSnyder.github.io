// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  
applyFilterNoBackground(reddify);  
applyFilterNoBackground(decreaseBlue);
applyFilterNoBackground(increaseGreenByBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction){
  var backgroundColor = image[0][0];
  for (var r = 0; r < 17; r++){
    for (var c = 0; c < 14; c++){
      var pixel = image[r][c];
      var pixelArray = rgbStringToArray(pixel);
      // This is where I’ll modify the color values later
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);
      image[r][c] = updatedPixel; 
     
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  var backgroundColor = image[0][0];
  for (var r = 0; r < 17; r++){
    for (var c = 0; c < 14; c++){
      if (image[r][c] !== backgroundColor){
        var pixel = image[r][c];
        var pixelArray = rgbStringToArray(pixel);
        // This is where I’ll modify the color values later
        filterFunction(pixelArray);
        var updatedPixel = rgbArrayToString(pixelArray);
        image[r][c] = updatedPixel;
      }
    }
  } 
}

// TODO 6: Create the keepInBounds function
function keepInBounds(num){
  if (num < 0){
    return 0;
  }
  if (num > 255){
    return 255;
  }
  else {
    return num;
  }
}

// TODO 4: Create reddify filter function
function reddify(pixelArray){
  pixelArray[RED] = 200;
}
var testArray = [100, 100, 100];
reddify(testArray);
//console.log(testArray);

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray){
  pixelArray[BLUE] = keepInBounds(pixelArray[BLUE] - 50);
}
function increaseGreenByBlue(pixelArray){
  pixelArray[GREEN] = keepInBounds(pixelArray[GREEN] + pixelArray[BLUE]);
}
// CHALLENGE code goes below here
function purpleTint(pixel) {
  pixel[0] = keepInBounds(pixel[0] + 50); // red
  pixel[2] = keepInBounds(pixel[2] + 50); // blue
}
