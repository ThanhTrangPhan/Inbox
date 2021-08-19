// contract test code will go here
const assert = require('assert');
const ganache=require('ganache-cli');
const Web3=require('web3'); 
const web3=new Web3(ganache.provider());
const {interface, bytecode} =require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of account
    accounts = await web3.eth.getAccounts()
    
    // Use one of those acc to deploy contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode,arguments:['Hi there!']})
    .send({from:accounts[0],gas:'1000000'})
});

describe('Inbox',()=>{
    it('deploy the test',()=>{
        assert.ok(inbox.options.address);
    })
    it('has a default mess', async ()=>{
        const mess= await inbox.methods.message().call();
        assert.equal(mess,'Hi there!')
    })
    it('update the messs', async()=>{
        await inbox.methods.setMessage("I change the mess").send({from:accounts[1],});
        const mess=await inbox.methods.message().call();
        assert.equal(mess,'I change the mess')
    })
});



































// class Car{
//     park(){
//         return 'stopped';
//     }

//     drive(){
//         return 'vroom';
//     }
// }

// let car;
// beforeEach(()=>{
//     //console.log('a');
//     car=new Car();
// })
// // describe: simply groups all together executed test
// describe('Car test', ()=>{
//     // Test park() func 
//     it('can park', ()=>{
//         //const car = new Car();
//         assert.equal(car.park(),'stopped');
//     })

//     // Test drive() func
//     it('can drive', ()=>{
//         //const car = new Car();
//         assert.equal(car.drive(),'vroom');
//     })
// })