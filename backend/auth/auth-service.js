import { nanoid } from "nanoid"
import userModel from "../src/user/user-model"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../src/constants/constants"

const authService = {

    register: async (email, password) => {
        const id = nanoid(8);
        console.log(password)
        const hashedPw = await bcrypt.hash(password, 10);
        return userModel.createUser(id, email, hashedPw);

    },

    login: async (email, password) => {
        const foundUser = await userModel.read(email)
        if (!foundUser) throw new Error("invalid email")
        if (await bcrypt.compare(password, foundUser.rows[0].password)) {
            const token = jwt.sign({ id: foundUser.rows[0].id, email: foundUser.rows[0].email }, JWT_SECRET)
            return { token, userid: foundUser.rows[0].id }
        } else {
            throw new Error("invalid jelszó Baby!!")
        }

    }

}

export default authService;