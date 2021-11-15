const bitcoinjs = require('bitcoinjs-lib')
const bip65 = require('bip65')
const middlewares = require('../middlewares')

// Initialize Dogecoin testnet info
bitcoinjs.networks.dogecoin_regtest = {
    messagePrefix: '\x18Dogecoin Signed Message:\n',
    bech32: 'tdge',
    bip32: {
      public: 0x0432a9a8,
      private: 0x0432a243
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
  }


