import authService from "./auth-service"


const authController = {

    register: async (req, res, next) => {
        const { email, password } = req.body;
        try {
            const registeredUser = await authService.register(email, password)
            res.json(registeredUser)
        } catch(err) {
            console.log(err)
            next(err)
        }

    }

}

export default authController