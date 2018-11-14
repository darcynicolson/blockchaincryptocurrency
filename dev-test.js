//4th Test
//test a new wallet
const Wallet = require('./wallet');
const wallet = new Wallet();
console.log(wallet.toString());


//3rd test
//test adding static dunmmy data to the chain and run ten blocks
//const Blockchain = require('./blockchain');

//const bc = new Blockchain();

//for (let i=0; i<10; i++) {
//	console.log(bc.addBlock(`chookity ${i}`).toString());
//}


//2nd Test
//test the creation of a genesis block
//const Block = require('./block')

//const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
//console.log(fooBlock.toString());


//1st Test
//return a test value
//const block = new Block('foo', 'bar', 'zoo', 'baz');

//return a static value
//console.log(block.toString())

//return Genesis Block values
//console.log(Block.genesis().toString());

