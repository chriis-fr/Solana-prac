import {
  Connection,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  PublicKey
} from  "@solana/web3.js"
import "dotenv/config"
import { getKeypairFromEnvironment} from "@solana-developers/helpers"

const sendTo = "VqB9Rhocbe1Bk8DijDy6kKGbvPtWprAFa66PwxUFSts"

const senderKeyPair = getKeypairFromEnvironment("SECRET_KEY")

console.log(`supplied to public key: ${sendTo}`)

const toPubkey = new PublicKey(sendTo)

const connection = new Connection("https://api.devnet.solana.com", "confirmed")

console.log("loaded, connected to solana")


const transaction = new Transaction()

const LAMPORTS_TO_SEND = 5000;

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: senderKeyPair.publicKey,
  toPubkey,
  lamports: LAMPORTS_TO_SEND,
})

transaction.add(sendSolInstruction)

const signature = await sendAndConfirmTransaction(connection, transaction, [
  senderKeyPair,
])

console.log(`finished! sent ${LAMPORTS_TO_SEND} to address ${toPubKey}.`)
console.log(`transaction signature is ${signature}`)