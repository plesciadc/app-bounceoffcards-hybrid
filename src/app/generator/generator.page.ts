import { Component } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: 'generator.page.html',
  styleUrls: ['generator.page.scss']
})
export class GeneratorPage {

  // Define cells array to track status of each circle
  cells = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  red = 'url("../../assets/images/red-circle.png")';
  white = 'url("../../assets/images/white-circle.png")';

  generateTapped() {
    var redCount = 0;
    for (var i = 0; i < this.cells.length; i++) {
      var random_boolean = Math.random() >= 0.5;
      if (random_boolean) {
        redCount++;
      }
      if (redCount >= 8) {
        this.cells[i] = false;
      } else {
        this.cells[i] = random_boolean;
      }
    }
    for (var i = 0; i < this.cells.length; i++) {
      this.checkAdjacentCells(i);
    }

  }

  checkAdjacentCells(cellToCheck) {
    switch (cellToCheck) {
      case 0: {
        if (!this.cells[1] && !this.cells[3]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      case 1: {
        if (!this.cells[0] && this.cells[2] && !this.cells[4]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      case 2: {
        if (!this.cells[1] && !this.cells[5]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      case 3: {
        if (!this.cells[0] && !this.cells[4] && !this.cells[6]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      case 4: {
        if (!this.cells[1] && !this.cells[3] && !this.cells[5] && !this.cells[7]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      case 5: {
        if (!this.cells[2] && !this.cells[4] && !this.cells[8]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      case 6: {
        if (!this.cells[3] && !this.cells[7] && !this.cells[9]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      case 7: {
        if (!this.cells[4] && !this.cells[6] && !this.cells[8] && !this.cells[10]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      case 8: {
        if (!this.cells[5] && !this.cells[7] && !this.cells[11]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      case 9: {
        if (!this.cells[6] && !this.cells[10] && !this.cells[12]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      case 10: {
        if (!this.cells[7] && !this.cells[9] && !this.cells[11] && !this.cells[13]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      case 11: {
        if (!this.cells[8] && !this.cells[10] && !this.cells[14]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      case 12: {
        if (!this.cells[9] && !this.cells[13]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      case 13: {
        if (!this.cells[10] && !this.cells[12] && !this.cells[14]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      case 14: {
        if (!this.cells[11] && !this.cells[13]) {
          this.cells[cellToCheck] = false;
        }
        break;
      }
      default: {
        console.log("Invalid column number");
        break;
      }
    }
  }


}
