import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(`the public key is: `, keypair.publicKey.toBase58())
console.log("secret key is :", keypair.secretKey)

