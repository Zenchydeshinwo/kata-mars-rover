var MarsRoverObject = {
direction: "N",
x: 0,
y: 0,
travelLog: [[0,0]]
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

function moveForward(rover){
  switch (rover.direction) {
    case "W":
    if (rover.x != -5) {
      rover.x = rover.x-1;
    } else {
      console.log("I am going out of the grid!!")
    } 
    break;
    case "N":
    if (rover.y != -5) {
      rover.y = rover.y-1;
    } else {
      console.log("I am going out of the grid!!")
    }
    break;
    case "S":
    if (rover.y != 5) {
      rover.y = rover.y+1;
    } else {
      console.log("I am going out of the grid!!")
    }
    break;
    case "E":
    if (rover.x != 5) {
      rover.x = rover.x+1;
    } else {
      console.log("I am going out of the grid!!")
    }
    break;
  }
  console.log("moveForward was called");
  rover.travelLog.push([rover.x,rover.y]);
  console.log("I'm moving! My new position is x =",MarsRoverObject.x,"y =", MarsRoverObject.y)
}

function moveBackward(rover){
  switch (rover.direction) {
    case "W":
    if (rover.x != 5) {
      rover.x = rover.x+1;
    } else {
      console.log("I am going out of the grid!!")
    } 
    break;
    case "N":
    if (rover.y != 5) {
      rover.y = rover.y+1;
    } else {
      console.log("I am going out of the grid!!")
    }
    break;
    case "S":
    if (rover.y != -5) {
      rover.y = rover.y-1;
    } else {
      console.log("I am going out of the grid!!")
    }
    break;
    case "E":
    if (rover.x != -5) {
      rover.x = rover.x-1;
    } else {
      console.log("I am going out of the grid!!")
    }
    break;
  }
  console.log("moveForward was called");
  rover.travelLog.push([rover.x,rover.y]);
  console.log("I'm moving! My new position is x =",MarsRoverObject.x,"y =", MarsRoverObject.y)
}

function commands(command, rovermovement) {
  for (var i=0; i<command.length; i++){
    switch (command[i]) {
      case "f":
      moveForward(rovermovement);
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
