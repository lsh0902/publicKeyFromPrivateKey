const {ethers} = require('ethers');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("enter your metamask private key");
rl.on("line", function(line) {
    let pri = '0x' + line;
    const wall = new ethers.Wallet(pri);
    let pub = wall.publicKey.substring(4, wall.publicKey.length);
    console.log("= * = * = * = your publickey= * = * = * = ");
    console.log(pub);
    rl.close();
}).on("close", function() {
    process.exit();
});