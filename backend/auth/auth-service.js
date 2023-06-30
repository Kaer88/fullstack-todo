import { nanoid } from "nanoid"
import userModel from "../src/user/user-model"
import bcrypt from 'bcrypt'

const authService = {

    register: async ({ email, password }) => {
        console.log("service: ", email)
        const id = nanoid(8);
        const hashedPw = await bcrypt.hash(password, 5);
        return userModel.createUser(id, email, hashedPw);

    },

    login: async (email, password) => {
        const foundUser = await userModel.read(email)
        if (!foundUser) throw new Error("invalid email")
        if (await bcrypt.compare(password, foundUser.rows[0].password)) {
            console.log("yes")
        } else {
            throw new Error("invalid jelszó Baby")
        }
        


    }

}

export default authService;