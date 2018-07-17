'use strict';

const expect = require('chai').expect;
const Pencil = require('../PencilDurability');

describe('write()', function() {
  it('should write addToPaper with onPaper', function() {
    const pencil = new Pencil();
    const onPaper = 'She sells sea shells';
    const addToPaper = 'by the sea sh';
    const expected = `${onPaper} ${addToPaper}`;

    const actual = pencil.write(addToPaper, onPaper);

    expect(actual).to.be.equal(expected);
  });

  it('should still write addToPaper if onPaper is undefined', function() {
    const pencil = new Pencil();
    const addToPaper = 'by the sea sh';
    const expected = addToPaper;

    const actual = pencil.write(addToPaper);

    expect(actual).to.be.equal(expected);
  });

  it('should throw an error if addToPaper is undefined', function() {
    const pencil = new Pencil();

    expect(function() {
      pencil.write();
    }).to.throw('Cannot read property \'split\' of undefined');
  });
});

describe('pointDegredation()', function() {
  it('should display correct pencil durability after writing', function() {
    const pencil = new Pencil();
    const addToPaper = 'by the sea shore';

    const test = pencil.pointDegradation(addToPaper);

    expect(addToPaper).to.be.equal(test);
  });
});

describe('sharpen()', function() {
  it('should return a message if you try to sharpen a pencil with a length of 0', function() {
    const pencil = new Pencil();
    pencil.length = 0;

    expect(() => pencil.sharpen()).to.throw('Your pencil has a length and durability of 0! You need a new one!');
  });
});