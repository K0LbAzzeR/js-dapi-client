// TODO: Fix implementation of library to remove dangling underscore
// TODO: Fix library to use proper casing for class-like data structures
/* eslint-disable no-underscore-dangle */
const Spvchain = require('../libs/spv-dash/lib/spvchain');
const merkleproof = require('../libs/spv-dash/lib/merkleproof');

let chain = null;


const initChain = (fileStream, chainType) => new Promise((resolve, reject) => {
  chain = new Spvchain(fileStream, chainType);

  chain.on('ready', () => {
    resolve(true);
  });
});

const getTipHash = () => chain.getTipHash();

const addBlockHeaders = (headers) => {
  chain._addHeaders(headers);
  return chain.getChainHeight();
};

const validateTx = (blockHash, txHash) => chain.getBlock(blockHash)
  .then(block => merkleproof(block, txHash));

// TODO: Implement this function
const applyBloomFilter = addr => addr;

module.exports = {
  initChain,
  getTipHash,
  addBlockHeaders,
  validateTx,
  applyBloomFilter,
};
