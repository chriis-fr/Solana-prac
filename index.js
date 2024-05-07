import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers"


const keypair = getKeypairFromEnvironment("SECRET_KEY")
console.log("secret key as follows: ", keypair)