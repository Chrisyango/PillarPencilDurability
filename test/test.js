'use strict';

const expect = require('chai').expect;
const Pencil = require('../PencilDurability');

const pencil = new Pencil();

describe('write()', function() {
  it('should write addToPaper with onPaper', function() {
    let onPaper = 'She sells sea shells';
    let addToPaper = 'by the sea shore';
    let result = `${onPaper} ${addToPaper}`;

    let test = pencil.write(addToPaper, onPaper);

    expect(test).to.be.equal(result);
  });

  it('should only write addToPaper if onPaper is undefined', function() {
    let addToPaper = 'by the sea shore';
    let result = addToPaper;

    let test = pencil.write(addToPaper);

    expect(test).to.be.equal(result);
  });
});