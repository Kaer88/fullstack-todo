import app from "./app";
import { PORT } from "./constants/constants"
import client from "./db/db";
import initDb from './db/db-init';


console.log()
app.listen(PORT, () => {
    console.log("I'm alive")
})



client.connect().catch((err) => {
    console.log(err);
    process.exit(1)
})

initDb().catch(err => {console.log(err)}) 
