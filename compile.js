
const path = require('path');
const f = require('fs');
const  solc = require('solc');

const inboxPath=path.resolve(__dirname,'contracts','Inbox.sol');
const source=f.readFileSync(inboxPath,'utf-8');

module.exports = solc.compile(source,1).contracts[':Inbox'];