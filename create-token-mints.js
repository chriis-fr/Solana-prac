import { createMint, getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token"
import "dotenv/config"
import {
    getKeypairFromEnvironment,
    getExplorerLink
} from "@solana-developers/helpers"
import { Connection, clusterApiUrl} from "@solana/web3.js"

const connection = new Connection(clusterApiUrl("devnet"));

const sender = getKeypairFromEnvironment("SECRET_KEY")

console.log(`loaded keypair securely, using env. public key is ${user.publicKey.toBase58()}`)

const recepient = new publicKey("RECEPIENT")
const tokenMintAccount = new publicKey("TOKEN_MINT_ADDRESS")

const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 2)
console.log("attempting to send 1 token to recepient")

const sourceTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    sender,
    tokenMintAccount,
    sender.publicKey
)

const destinationTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    sender,
    tokenMintAccount,
    recepient
)

const signature = await transfer(
    connection,
    sender,
    sourceTokenAccount.address,
    destinationTokenAccount.address,
    sender,
    1 * MINOR_UNITS_PER_MAJOR_UNITS
)

const link = getExplorerLink("transaction", signature, "devnet")

console.log(link)