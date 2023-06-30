import { nanoid } from "nanoid"
import userModel from "../src/user/user-model"
import bcrypt from 'bcrypt'

const authService = {

    register: async (email, password) => {

        const id = nanoid(8);
        const hashedPw = await bcrypt.hash(password, 5);
        console.log(hashedPw);
        return userModel.createUser(id, email, hashedPw);

    }

}

export default authService;