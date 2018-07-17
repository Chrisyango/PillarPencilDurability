'use strict';

class Pencil {
  constructor() {
    this.durability = 10;
  }
  /* 
    As a writer
    I want to be able use a pencil to write text on a sheet of paper
    so that I can better remember my thoughts 
  */
  write(addToPaper, onPaper) {
    // Check how many letters you can write with pencil
    const letters = addToPaper.split('');
    let availableLetters = '';
    let i = 0;
    while (this.durability !== 0) {
      if (i === letters.length) {
        break;
      }
      availableLetters += letters[i];
      if (letters[i] === ' ') {
        this.durability -= 0;
      } else if (letters[i] !== letters[i].toUpperCase() || letters[i].match(/^[.,:!?]/)) {
        this.durability -= 1;
      } else if (letters[i] === letters[i].toUpperCase()) {
        this.durability -= 2;
      }
      i += 1;
    }

    // Write the letters you can write with the pencil
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
    // Check pencil's durability
    for (let i = 0; i < addToPaper.length; i++) {
      // Durability stays the same if it's writing a space, decrease by 1 if writing a lower case letter or punctuation, and decrease by 2 if writing an upper case letter
      if (addToPaper[i] === ' ') {
        this.durability -= 0;
      } else if (addToPaper[i] !== addToPaper[i].toUpperCase() || addToPaper[i].match(/^[.,:!?]/)) {
        this.durability -= 1;
      } else {
        this.durability -= 2;
      }
    }

    return this.durability; 
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