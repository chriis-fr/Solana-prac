import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("5gKDtrqVRZdWkXvQiHYkYcmykMb82pTtoDZnhtzHyRT")

const connection = new Connection("https://api.devnet.solana.com", "confirmed")

const balanceInLPTS = await connection.getBalance(publicKey)

const balanceInSOL = balanceInLPTS / LAMPORTS_PER_SOL

console.log(`balance for address ${publicKey} is ${balanceInSOL}`)