require('../../_before.js');
const should = require('should');

const validBlockHash = '00000000e77f43412f0a536c1a02cc7ca4c84ce812122a0a4efe6bef386ee8dd';
const validBlockHeight = 195460;
describe('Insight-API - getLastDifficulty', () => {
  it('should return the valid getLastDifficulty from hash', () => SDK.Explorer.API.getLastDifficulty()
    .then((blockDiff) => {
      blockDiff.should.be.type('number');// TODO : We want to use bitcore to verify the validity of the diff
    }));
  it('should return the valid getLastDifficulty from height', () => SDK.Explorer.API.getLastDifficulty()
    .then((blockDiff) => {
      blockDiff.should.be.type('number');// TODO : We want to use bitcore to verify the validity of the the diff
    }));
});
