require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remind concert grace lonely bone they'; 
let testAccounts = [
"0x5873dd5da866e4246654acd34e3c06d68d12823ad948107edc34dd093efb7bd3",
"0x52b98bd388095f279a02233544a4be351a926d02470f90264e943113f4102a51",
"0x9afe0b59ed1a1a0cd6ebfea6c86c06da2890388b2d440907db8dd46ec4a2d9bb",
"0x7721e06becc42eecc75433db4020adc094da8a3ca071300a2812d42311cfb9d8",
"0x5cc1252f617e2dd39cf0b1c622c94a99bf58029a0ea0169955dc141b1752ac13",
"0x892324c00e0c7bacae5c110e77c9ef82b6c68f8fcc62adef6a8ce3b46dbd9985",
"0x3eadcc456fa2cc06960f42d5a776fa19b0d27007ed90cfb7e977ca21fc8982d9",
"0x1967ae379d678ce63c4c4b31a3a160ba337df556420cde8648b89bc62c0e0940",
"0x221a88335215517e385a63309116a1848c06693c1d9138f62dd4b53ad7ea2cff",
"0x179bbfb9a3471e724be9a98ad2b0218953f93cd5a9af1d17e31910a9c66e295f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
