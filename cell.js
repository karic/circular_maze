// Daniel Shiffman
// http://codingrainbow.com

// Depth-first search
// Recursive backtracker
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

function Cell(i, j, z) {
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  this.visited = false;
  var middle = this.z;


  this.checkNeighbors = function() {
    var neighbors = [];

    var top    = grid[index(i, j -1)];
    var right  = grid[index(i+1, j)];
    var bottom = grid[index(i, j+1)];
    var left   = grid[index(i-1, j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      var r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }


  }
  this.highlight = function() {
  //  var x = this.i*w;
  //  var y = this.j*w;
  //  noStroke();
  //  fill(0, 0, 255, 100);
  //  rect(x, y, w, w);

  }

  this.show = function() {
    var x = this.i*w;
    var y = this.j*w;

    stroke(255);
    noFill();
    if (this.walls[0]) {

//      arc(width/2    , height/2    , innerDonut + (rows-i+1)*cellHeight, innerDonut + (rows-i+1)*cellHeight, j*cellWidth, (j+1)*cellWidth);
    arc(width/2    , height/2    , innerDonut + (rows-i)*cellHeight, innerDonut + (rows-i)*cellHeight, j*cellWidth, (j+1)*cellWidth);

    }
    if (this.walls[1]) {
    //  rotate(innerDonut + (rows-i)*cellHeight ,middle);
    //  line(width/2 + i*cellHeight,height/2,width/2 + (i+1)*cellHeight,height/2);
    //  rotate(-1*(innerDonut + (rows-i)*cellHeight) ,middle);
    }
    if (this.walls[2]) {
//      arc(width/2    , height/2    , innerDonut + (rows-i)*cellHeight, innerDonut + (rows-i)*cellHeight, j*cellWidth, (j+1)*cellWidth);
      arc(width/2    , height/2    , innerDonut + (rows-i+1)*cellHeight, innerDonut + (rows-i+1)*cellHeight, j*cellWidth, (j+1)*cellWidth);

    }
    if (this.walls[3]) {
  //    rotate(innerDonut + (rows-i+1)*cellHeight ,middle);

    //  line(width/2 + i*cellHeight,height/2,width/2 + (i+1)*cellHeight,height/2);

      //  rotate(-1*(innerDonut + (rows-i+1)*cellHeight) ,middle);
    }

    if (this.visited) {
      //  noStroke();
      //fill(255, 0, 255, 100);
      //arc(height/2, width/2, w, w);
    }
  }
}
