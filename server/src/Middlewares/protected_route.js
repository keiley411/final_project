import prisma from "../prisma.js";
import { verifyToken } from "./auth.js";

const protectedRoute = async (req, res, next) => {
    const auth_token = req.cookies.auth_token;
    if(!auth_token) {
        return res.status(401).send({status: 'fail', message: 'no auth token available'}).end()
    }
    try {
        const data = await verifyToken(auth_token);
        console.log('Token Data: ' + data)
        const user = await prisma.user.findUnique({
            where: {
                id: data.id
            }
        });
        if(!user) {
            return res.status(401).send({status: 'fail', message: 'no such user for auth token'}).end()
        }
        // FIXME
        req.session.user = user;
    } catch (error) {
        console.error(error)
        return res.status(401).send({status: 'fail', message: error.message}).end()
    }
    next()
}

export default protectedRoute;