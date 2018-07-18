'use strict';

class Pencil {
  constructor() {
    this.pencilDurability = 40000;
    this.eraserDurability = 40000;
    this.length = 10;
  }
  /* 
    As a writer
    I want to be able use a pencil to write text on a sheet of paper
    so that I can better remember my thoughts 
  */
  write(whatToWriteOnPaper, writtenOnPaper) {
    // Used to figure out what letters I can write
    let whatICanWrite = this.pointDegradation(whatToWriteOnPaper);
    // Write the letters of the string you can write with the pencil
    if (writtenOnPaper) {
      onPaper = `${writtenOnPaper} ${whatICanWrite}`;
    } else {
      onPaper = whatICanWrite;
    }
    return onPaper;
  }

  /* 
    As a pencil manufacturer
    I want writing to cause a pencil point to go dull
    so that I can sell more pencils
  */
  pointDegradation(addToPaper) {
    const letters = addToPaper.split('');
    let whatICanWrite = '';
    // When you reach the end of the string, get out of loop
    for (let i = 0; i < letters.length; i++) {
      // If pencilDurability ever reaches 0, sharpen pencil
      if (this.pencilDurability === 0) {
        console.log(`Your pencil has a durability of 0! You need to sharpen it! Here's what I've written "${whatICanWrite}".`);
        break;
      }
      // Check how many letters of the string you can write with pencil
      whatICanWrite += letters[i];
      if (letters[i] === ' ') {
        this.pencilDurability -= 0;
      } else if (letters[i] !== letters[i].toUpperCase() || letters[i].match(/^[.,:!?]/)) {
        this.pencilDurability -= 1;
      } else if (letters[i] === letters[i].toUpperCase()) {
        this.pencilDurability -= 2;
      }
    }

    return whatICanWrite;
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
      this.pencilDurability = 40000;
      this.length -= 1;
    }
  }

  /*
    As a writer
    I want to be able to erase previously written text
    so that I can remove my mistakes
  */
  erase(writtenOnPaper, whatToErase) {
    // Figure out what I can erase
    const whatICanErase = this.eraserDegredation(whatToErase);
    // Sets the length of spaces equal to the length of whatToErase
    let replaceWith = '';
    for(let i = 0; i < whatICanErase.length - 2; i++) {
      replaceWith += ' ';
    }
    // Figure out where to start erasing
    const whereToStartErasing = whatToErase.length - whatICanErase.length;

    // Find where whatToErase begins in the sentence
    let lastIndexOf = writtenOnPaper.lastIndexOf(whatToErase);
    // Get the beginning of the sentence up to where whatToErase starts + whereToStartErasing
    const beginningOfSentence = writtenOnPaper.substring(0, lastIndexOf + whereToStartErasing);
    // Get the end of the sentence where whatToErase + whereToStartErasing ends
    const endingOfSentence = writtenOnPaper.substring(lastIndexOf + whatToErase.length, writtenOnPaper.length);
    // Combine the beginning, what to replace, and the end of the sentence
    onPaper = `${beginningOfSentence} ${replaceWith} ${endingOfSentence}`;
    return onPaper;
  }

  /*
    As a pencil manufacturer
    I want a pencil eraser to eventually wear out
    so that I can sell more pencils
  */
  eraserDegredation(whatToErase) {
    let whatICanErase = '';
    // If whatToErase's length is greater than the eraser's durability, I have to find out whatICanErase
    if (whatToErase.length > this.eraserDurability) {
      let reverseWhatToErase = whatToErase.split('').reverse().join('');
      for(let i = 0; i < this.eraserDurability; i++) {
        whatICanErase += reverseWhatToErase[i];
      }
      whatICanErase = whatICanErase.split('').reverse().join('');
    } else {
      whatICanErase = whatToErase;
    }
    // Subtract the length of what I'm erasing from the eraser's durability
    this.eraserDurability -= whatICanErase.length;
    if (this.eraserDurability === 0) {
      console.log(`My eraser durability is at 0! I am only able to erase this "${whatICanErase}".`);
    }
    return whatICanErase;
  }
}

let onPaper;

function main() {
  const pencil = new Pencil;
  onPaper = 'She sells sea shells';
  const addToPaper = 'down by the sea shore';

  pencil.write(addToPaper, onPaper);
  console.log(onPaper);
  console.log(pencil.pointDegradation(addToPaper));
  console.log(pencil.pencilDurability);
  console.log(pencil.length);
  pencil.sharpen();
  console.log(pencil.pencilDurability);
  console.log(pencil.length);

  onPaper = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';
  console.log(pencil.erase(onPaper, 'chuck'));
  console.log(pencil.eraserDegredation('chuck'));
}

main();

module.exports = Pencil;