import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import "dotenv/config"

const publicKey = new PublicKey(process.env.PUBLIC_KEY)

const connection = new Connection("https://api.devnet.solana.com", "confirmed")

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`address: ${publicKey} and SOL: ${balanceInSol}`)