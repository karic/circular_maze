// Daniel Shiffman
// http://codingrainbow.com

// Depth-first search
// Recursive backtracker
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  this.visited = false;

  this.checkNeighbors = function() {
    var neighbors = [];

    var top    = grid[index(i, j -1)];
    var right  = grid[index(i+1, j)];
    var bottom = grid[index(i, j+1)];
    var left   = grid[index(i-1, j)];

    //if (i+1==cols){
    //right = grid[index(0,j)];
      //console.log(right);
    //}else if (i==0){
   // left = grid[index(cols-1,j)];
            //console.log(left);
   // }

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
    noStroke();
    fill(0, 0, 255, 100);
    arc(width/2    , height/2    , innerDonut + (rows-j)*cellHeight, innerDonut + (rows-j)*cellHeight, i*cellWidth, (i+1)*cellWidth);
    //fill(51);
  //  var x = this.i*w;
  //  var y = this.j*w;
  //  noStroke();
  //  fill(0, 0, 255, 100);
  //  rect(x, y, w, w);
      //arc(width/2    , height/2    , innerDonut + (rows-j-1)*cellHeight, innerDonut + (rows-j-1)*cellHeight, i*cellWidth, (i+1)*cellWidth);
  }

  this.show = function() {
    //var x = this.i*w;
    //var y = this.j*w;

    stroke(255);
    noFill();
    if (this.walls[0]) {

      arc(width/2    , height/2    , innerDonut + (rows-j)*cellHeight, innerDonut + (rows-j)*cellHeight, i*cellWidth, (i+1)*cellWidth);

    }
    if (this.walls[3]) {
      translate(width/2,height/2);
      rotate(Math.PI/2 + i*cellWidth);
      line(0,-(outsideDonut)+(j*cellHeight),0,-(outsideDonut)+((j+1)*cellHeight));
      rotate(-(Math.PI/2 + i*cellWidth));
      translate(-width/2,-height/2);
    }
    if (this.walls[2]) {
      arc(width/2    , height/2    , innerDonut + (rows-j-1)*cellHeight, innerDonut + (rows-j-1)*cellHeight, i*cellWidth, (i+1)*cellWidth);

    }
    if (this.walls[1]) {
      translate(width/2,height/2);
      rotate(Math.PI/2 + (i+1)*cellWidth);
      line(0,-(outsideDonut)+(j*cellHeight),0,-(outsideDonut)+((j+1)*cellHeight));
      rotate(-(Math.PI/2 + (i+1)*cellWidth));
      translate(-width/2,-height/2);
    }

    //if (this.visited) {
      //  noStroke();
      //fill(255, 0, 255, 100);
      //arc(height/2, width/2, w, w);
    //}
  }
}
// for (k=0;k<grid.length; k++) {
// grid[k].walls = [false,false,false,false];
// }
