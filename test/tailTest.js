const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse','Labs']);
  });

  it("returns ['World'] for ['Hello', 'World']", () => {
    assert.deepEqual(tail(['Hello', 'World']), ['World']);
  });
});
