

export default async (req, res, next) => {
    const userId = req.params.id;
    const tokenUserId = req.user.id;
    try {
        if (userId != tokenUserId) throw new Error("invalid user token pair")
        next()

    } catch (err) {
        console.log(err)
        next(err)

    }

}