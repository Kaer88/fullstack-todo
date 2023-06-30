import app from "./app";
import PORT from "./constants/constants"
import client from "./db/db";

console.log(PORT)
app.listen(8080, () => {
    console.log("I'm alive")
})

client.connect().catch((err) => {
    console.log(err);
    process.exit(1)
})