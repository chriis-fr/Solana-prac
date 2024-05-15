import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers"
import { Keypair, PublicKey } from "@solana/web3.js"


const keypair = getKeypairFromEnvironment("SECRET_KEY")
console.log("secret key as follows: ", keypair)

const pubkey = Keypair.generate()
console.log(pubkey.publicKey.toBase58(), pubkey.secretKey)