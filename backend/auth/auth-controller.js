import authService from "./auth-service"


const authController = {

    register: async (req, res, next) => {
        const { email, password } = req.body;
        console.log(email, password)
        try {
            const registeredUser = await authService.register(email, password)
            res.json(registeredUser)
        } catch (err) {
            console.log(err)
            next(err)
        }

    },

    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const loggedInUserToken = await authService.login(email, password)
            res.cookie(loggedInUserToken.token)
            console.log(loggedInUserToken)
            res.json(loggedInUserToken)

        } catch (err) {
            console.log(err)

            res.send("nem ok")
            next(err)
        }
    }

}

export default authController