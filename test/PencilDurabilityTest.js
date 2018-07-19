'use strict';

const expect = require('chai').expect;
const Pencil = require('../src/PencilDurability');

describe('Pencil Class', function() {
  let pencil;
  let onPaper;
  let addToPaper;
  beforeEach(function() {
    pencil = new Pencil();
    onPaper = 'She sells sea shells';
    addToPaper = 'by the sea shore';
  });

  describe('write()', function() {
    it('should write addToPaper with onPaper', function() {
      const expected = `${onPaper} ${addToPaper}`;
  
      const actual = pencil.write(addToPaper, onPaper);
  
      expect(actual).to.be.equal(expected);
    });
  
    it('should still write addToPaper if onPaper is undefined', function() {
      const actual = pencil.write(addToPaper);
  
      expect(actual).to.be.equal(addToPaper);
    });
  
    it('should throw an error if addToPaper is undefined', function() {
      expect(() => {
        pencil.write();
      }).to.throw('Cannot read property \'split\' of undefined');
    });
  });
  
  describe('pointDegredation()', function() {
    it('should display available letters after writing', function() {  
      const test = pencil.pointDegradation(addToPaper);
  
      expect(addToPaper).to.be.equal(test);
    });

    it('should subtract pointDurability by 1 if it is a lower case letter and by 2 if it is an upper case letter', function() {
      pencil.pointDegradation('String I want to add.');
      
      expect(pencil.pointDurability).to.be.equal(39981);
    });
  
    it('should display the correct amount of available letters if there is not enough point durability', function() {
      pencil.pointDurability = 4;
      pencil.length = 0;
  
      const test = pencil.write(addToPaper);
  
      expect(test).to.be.equal('by th');
    });
  });
  
  describe('sharpen()', function() {
    it('should set pencil durability to 40,000 and decrease pencil length by 1', function() {
      pencil.pointDurability = 20;
      pencil.sharpen();

      expect(pencil.pointDurability).to.be.equal(40000);
      expect(pencil.length).to.be.equal(9);
    });

    it('should return a message if you try to sharpen a pencil with a length of 0', function() {
      pencil.length = 0;
  
      expect(() => pencil.sharpen()).to.throw('Your pencil has a length and durability of 0! You need a new one!');
    });
  });

  describe('erase()', function() {
    it('should erase the last instance of selected text and replace it with spaces', function() {
      const test = pencil.erase(onPaper, 'she');

      expect(test).to.be.equal('She sells sea    lls');
    });

    it('should erase the correct amount of letters from the sentence', function() {
      pencil.eraserDurability = 2;

      const test = pencil.erase(onPaper, 'she');

      expect(test).to.be.equal('She sells sea s  lls');
    });

    it('should throw an error if an parameter is missing', function() {
      expect(() => {
        pencil.erase();
      }).to.throw('Cannot read property \'length\' of undefined');
    });
  });

  describe('eraserDegradation()', function() {
    it('should find the correct amount of letters that can be erased', function() {
      pencil.eraserDurability = 2;

      const test = pencil.eraserDegradation('she');

      expect(test).to.be.equal('he');
    });

    it('should throw an error if an parameter is missing', function() {
      expect(() => {
        pencil.eraserDegradation();
      }).to.throw('Cannot read property \'length\' of undefined');
    });
  });

  describe('edit()', function() {
    it('should find where to insert the word and insert it', function() {
      const test = pencil.edit('This is a test. I will add a blank here       .', '"Test"');

      expect(test).to.be.equal('This is a test. I will add a blank here "Test".');
    });

    it('should replace a letter with @ if it is not a blank space', function() {
      const test = pencil.edit('Something to test   here.', 'destroy');

      expect(test).to.be.equal('Something to test de@@@@@');
    });

    it('should throw an error if an parameter is missing', function() {
      expect(() => {
        pencil.edit();
      }).to.throw('Cannot read property \'length\' of undefined');
    });
  });
});