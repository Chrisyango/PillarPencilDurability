'use strict';

/* 
As a writer
I want to be able use a pencil to write text on a sheet of paper
so that I can better remember my thoughts 
*/

class Pencil {

  write(addToPaper, onPaper) {
    if (onPaper) {
      return (`${onPaper} ${addToPaper}`);
    } else {
      return (addToPaper);
    }
  }
}


function main() {
  const pencil = new Pencil;

  console.log(pencil.write('down by the sea shore', 'She sells sea shells'));
}

main();

module.exports = Pencil;