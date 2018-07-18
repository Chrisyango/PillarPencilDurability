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
      expect(function() {
        pencil.write();
      }).to.throw('Cannot read property \'split\' of undefined');
    });
  });
  
  describe('pointDegredation()', function() {
    it('should display available letters after writing', function() {  
      const test = pencil.pointDegradation(addToPaper);
  
      expect(addToPaper).to.be.equal(test);
    });
  
    it('should display the correct amount of available letters if there is not enough point durability', function() {
      pencil.durability = 4;
      pencil.length = 0;
  
      const test = pencil.write(addToPaper);
  
      expect(test).to.be.equal('by th');
    });
  });
  
  describe('sharpen()', function() {
    it('should set pencil durability to 40,000 and decrease pencil length by 1', function() {
      pencil.durability = 20;
      pencil.sharpen();

      expect(pencil.durability).to.be.equal(40000);
      expect(pencil.length).to.be.equal(9);
    });

    it('should return a message if you try to sharpen a pencil with a length of 0', function() {
      pencil.length = 0;
  
      expect(() => pencil.sharpen()).to.throw('Your pencil has a length and durability of 0! You need a new one!');
    });
  });
});