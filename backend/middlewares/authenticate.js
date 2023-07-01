import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../src/constants/constants';

export default async (req, res, next) => {

    const token = req.headers.authorization;
    if (!token) next(new Error("no token", 500));
    const tokenBody = token.slice(7);
    jwt.verify(tokenBody, JWT_SECRET, (err, decoded) => {
        if (err) {
            next(err)
        }
        req.user = { ...decoded }
        next()
    })




}