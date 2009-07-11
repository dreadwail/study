package com.benlakey.java_learning.algorithms;

import java.awt.Point;

public class MazeSolver {

  public enum MazeNode {
    START,
    END,
    WALL,
    VISITED
  }

  private MazeNode[][] nodes;
  private boolean solved;

  public MazeSolver(MazeNode[][] nodes) {
    this.nodes = nodes;
  }

  private Point findStart() {
    for(int y = 0; y < nodes.length; y++) {
      for(int x = 0; x < nodes[y].length; x++) { 
        if(nodes[y][x] == MazeNode.START) {
          return new Point(x, y);
        }
      }
    }
    return null;
  }

  public void solve() {
    Point start = findStart();
    solveRecursive(start.x, start.y);
  }

  private void solveRecursive(int currentX, int currentY) {
    if(solved) { 
      return;
    }
    if(!isValidLocation(currentX, currentY)) {
      return;
    }
    if(nodes[currentY][currentX] == MazeNode.END) {
      solved = true;
      return;
    }  
    if(nodes[currentY][currentX] == MazeNode.VISITED) {
      return;
    }
    if(nodes[currentY][currentX] == MazeNode.WALL) {
      return;
    }
    if (nodes[currentY][currentX] != MazeNode.START) {
      nodes[currentY][currentX] = MazeNode.VISITED;
    }
    solveRecursive(currentX+1, currentY);
    solveRecursive(currentX, currentY+1);
    solveRecursive(currentX-1, currentY);
    solveRecursive(currentX, currentY-1);
  }

  private boolean isValidLocation(int x, int y) {
    if(x < 0) {
      return false;
    }
    if(y < 0) {
      return false;
    }
    if(y > nodes.length-1) {
      return false;
    }
    if(x > nodes[y].length-1) {
      return false;
    }
    return true;
  }

}
