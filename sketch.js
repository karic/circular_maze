// Daniel Shiffman
// http://codingrainbow.com

// Depth-first search
// Recursive backtracker
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

var cols=30;
var rows=10;
var grid = [];
var innerDonut =  100;
var outsideDonut = 400;
var cellHeight=(outsideDonut - innerDonut)/rows;
var cellWidth = (2 * Math.PI) / cols;




var current;

var stack = [];

function setup() {
  ellipseMode(RADIUS);
  createCanvas(1000, 1000);
  //frameRate(1);
  background(0);



  for (var   j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];


}

function draw() {
  background(51);
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  //current.highlight();
  // STEP 1
  var next = current.checkNeighbors();
  if (next) {
    next.visited = true;

    // STEP 2
    stack.push(current);

    //console.log(current);
    //console.log(next);
    //console.log(stack);
    // STEP 3
    removeWalls(current, next);

    // STEP 4
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }


}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols-1 || j > rows-1) {
    return -1;
  }
  return i + j * cols;
}


function removeWalls(a, b) {
  var x = a.i - b.i;
  //console.log(a.i);
  if (x >= 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x <= -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
  var y = a.j - b.j;
  //console.log(a.j);
  if (y >= 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y <= -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
}
