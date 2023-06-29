import app from "./app";
import PORT from "./constants/constants.js"
import client from "./db/db";


app.listen(PORT, () => {
    console.log("I'm alive")
})

client.connect().catch((err) => {
    console.log(err);
    process.exit(1)
})