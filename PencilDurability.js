'use strict';

class Pencil {
  constructor() {
    this.durability = 2;
    this.length = 10;
  }
  /* 
    As a writer
    I want to be able use a pencil to write text on a sheet of paper
    so that I can better remember my thoughts 
  */
  write(addToPaper, onPaper) {
    let availableLetters = this.pointDegradation(addToPaper);
    // Write the letters of the string you can write with the pencil
    if (onPaper) {
      return (`${onPaper} ${availableLetters}`);
    } else {
      return (availableLetters);
    }
  }

  /* 
    As a pencil manufacturer
    I want writing to cause a pencil point to go dull
    so that I can sell more pencils
  */
  pointDegradation(addToPaper) {
    const letters = addToPaper.split('');
    let availableLetters = '';
    // When you reach the end of the string, get out of loop
    for (let i = 0; i < letters.length; i++) {
      // If durability ever reaches 0, sharpen pencil
      if (this.durability === 0) {
        this.sharpen();
      }
      if (this.durability === 0 && this.length === 0) {
        break;
      }
      // Check how many letters of the string you can write with pencil
      availableLetters += letters[i];
      if (letters[i] === ' ') {
        this.durability -= 0;
      } else if (letters[i] !== letters[i].toUpperCase() || letters[i].match(/^[.,:!?]/)) {
        this.durability -= 1;
      } else if (letters[i] === letters[i].toUpperCase()) {
        this.durability -= 2;
      }
    }

    return availableLetters;
  }

  /*
    As a writer
    I want to be able to sharpen my pencil
    so that I can continue to write with it after it goes dull
  */
  sharpen() {
    if (this.length === 0) {
      throw new Error('Your pencil has a length and durability of 0! You need a new one!');
    } else {
      this.durability = 40000;
      this.length -= 1;
    }
  }
}


function main() {
  const pencil = new Pencil;
  const onPaper = 'She sells sea shells';
  const addToPaper = 'down by the sea shore';

  console.log(pencil.write(addToPaper, onPaper));
  console.log(pencil.pointDegradation(addToPaper));
}

main();

module.exports = Pencil;