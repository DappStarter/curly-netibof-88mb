require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture street crawl spider clump hunt cover army ghost'; 
let testAccounts = [
"0x3ea010229420f13337bb9c4f393ae10eb0f786782e0a062b715641ac94bd18b6",
"0x9691cb560eacfd9dbabcdf0c2281ac87251d63ae7aaf4556fc6bb169df58a98d",
"0xd36e37ac4629201cc2c380ea137f8e65884f8660fd7b42ef580cdb5ab9e53d5a",
"0xba2bdd82217ca7f8ba7f91d463a5ab76541742f5fa1283392807f66e5e903a2a",
"0x33117f152ad9e767ec6233ad4e3e6515a1af7a8fc1602f4c9439e25a0e0ac980",
"0x699d2b65f1e4c7b86b14238159fcd0d8cc07ff00b53e3336afcef1343839778d",
"0x9ec7fa6c441059c780c5563a7ebcf2a6db1a7be19727a347f96b6a79998ade22",
"0xa22536bb6ce4049fccc1aeec50adc54362747c37a8d2d46dd05161b1913089d8",
"0x39c5d249cb0555f117cbbcb80e018768d93a9c527257573de6ba4a19c4791a4d",
"0xaf2d8e4e2fbedacc1ad420c4b8c9671f0ad39f69fd96ec6796c34c51084138a3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

