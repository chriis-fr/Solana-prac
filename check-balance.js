import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("HgWuyzbnf21WAWytqZQAVyJvAUQRWZKdBDq9WSzYAJfu")

const connection = new Connection("https://api.devnet.solana.com", "confirmed")

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`address: ${publicKey} and SOL: ${balanceInSol}`)