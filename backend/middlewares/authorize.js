

export default async (req, res, next) => {
    const userId = req.params.id;
    const tokenUserId = req.user.id;
    console.log(userId, tokenUserId)
    try {
        if (userId != tokenUserId) throw new Error("invalid user token pair")
        console.log("minden raj")
        next()

    } catch (err) {
        console.log(err)
        next(err)

    }

}