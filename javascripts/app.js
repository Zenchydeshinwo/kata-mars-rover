var MarsRoverObject = {
name: "Rover1",
direction: "N",
x: 4,
y: 4,
travelLog: [[4,4]]
};

var cousinRover = {
name: "CousinRover",
direction: "W",
  x: 5,
  y: 5,
  travelLog: [[5,5]]
};

var ObstaclesArray = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, "obstacle", null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, "obstacle", null, "obstacle", null, null, null, null, null, null],
  ["obstacle", null, , null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, "obstacle", null, null, null],
  [null, null, null, null, null, null, null, null, null, "obstacle"]
 ];
  
// ======================

// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    case "E":
    rover.direction = "N";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "W":
    rover.direction = "S";
    break;  
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;  
  }
  console.log("turnRight was called!");
}

function moveForward(rover, grid){ 
  switch (rover.direction) {
    case "W": 
    if (rover.x != 0) { // Checking destiny position is not beyond borders
      if (grid[rover.x-1][rover.y] != null){ // Checking destiny position is empty before trying to move
        console.log("Warning,", grid[rover.x-1][rover.y],"!") // When destiny position it's not empty
      } else { // When position is available to move
        grid[rover.x][rover.y] = null; // Erasing previous position in the grid
        rover.x = rover.x-1; // Moving rover
        grid[rover.x][rover.y] = rover.name // Registering new position in the grid
      }
    } else {
      console.log("I am going out of the grid!!")
    } 
    break;
    case "N":
    if (rover.y != 0) {
      if (grid[rover.x][rover.y-1] != null){
        console.log("Warning,", grid[rover.x][rover.y-1], "!")
      } else {
        grid[rover.x][rover.y] = null;
        rover.y = rover.y-1; 
        grid[rover.x][rover.y] = rover.name
      }
    } else {
    console.log("I am going out of the grid!!")
    }
    break;
    case "S":
    if (rover.y != 9) {
      if (grid[rover.x][rover.y+1] != null){
        console.log("Warning,",grid[rover.x][rover.y-1] ,"!")
      } else {
      grid[rover.x][rover.y] = null;
      rover.y = rover.y+1;
      grid[rover.x][rover.y] = rover.name
      }
    } else {
    console.log("I am going out of the grid!!")
    }
    break;
    case "E":
    if (rover.x != 9) {
      if (grid[rover.x+1][rover.y] != null){
        console.log("Warning,", grid[rover.x][rover.y-1],"!")
      } else {
      grid[rover.x][rover.y] = null;
      rover.x = rover.x+1;
      grid[rover.x][rover.y] = rover.name;
      }
    } else {
      console.log("I am going out of the grid!!")
    }
    break;
  }
  console.log("moveForward was called");
  rover.travelLog.push([rover.x,rover.y]);
  console.log("Actual position x =",rover.x,"y =", rover.y)
}

function moveBackward(rover, grid){
  turnLeft(rover);
  turnLeft(rover);
  moveForward(rover, grid);
  turnRight(rover);
  turnRight(rover);
}

function commands(command, rovermovement, grid) {
  for (var i=0; i<command.length; i++){
    switch (command[i]) {
      case "f":
      moveForward(rovermovement, grid);
      break;
      case "r":
      turnRight(rovermovement);
      break;
      case "l":
      turnLeft(rovermovement);
      break;
      default:
      console.log("Please, enter a valid command, i.e. l, r or f");
      break;
    }
  } 
  console.log(rovermovement.travelLog);
}
