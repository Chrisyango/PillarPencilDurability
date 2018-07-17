'use strict';

const expect = require('chai').expect;
const Pencil = require('../PencilDurability');

describe('write()', function() {
  it('should write the correct amount of letters with onPaper', function() {
    const pencil = new Pencil();
    const onPaper = 'She sells sea shells';
    const addToPaper = 'by the sea sh';
    const expected = `${onPaper} ${addToPaper}`;

    const actual = pencil.write(addToPaper, onPaper);

    expect(actual).to.be.equal(expected);
  });

  it('should only write correct amount of letters if onPaper is undefined', function() {
    const pencil = new Pencil();
    const addToPaper = 'by the sea sh';
    const expected = addToPaper;

    const actual = pencil.write(addToPaper);

    expect(actual).to.be.equal(expected);
  });

  it('should return an error if addToPaper is undefined', function() {
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

    expect(pencil.durability).to.be.equal(test);
  });
});