const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3= require('web3');
const {interface,bytecode}=require('./compile');

const provider = new HDWalletProvider(
    'tip avoid wedding assume fluid slush rookie joke raccoon pulp abuse access',
    'https://rinkeby.infura.io/v3/d0f94aee67554f6b920d9b2600c14d5c'
);

const web3 = new Web3(provider);

const deploy = async()=>{
    const acc= await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', acc[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode,arguments:['Hi']})
    .send({gas:'10000000',from:acc[0], gasPrice:'5000000000'});

    console.log('Contract deployed to', result.options.address);

};
deploy();