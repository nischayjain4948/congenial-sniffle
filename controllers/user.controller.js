import prisma from "../db/db.config.js";
import aron2 from 'argon2'


export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const findEmail = await prisma.user.findUnique({ where: { email: email } });
        if (findEmail) {
            return res.status(400).json({ msg: "email already exist please use different email" });
        }


        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password,
                hash: await aron2.hash(password)
            }
        })

        return res.status(200).json({ msg: "user_created", user: newUser })

    }
    catch (error) {
        res.status(500).json({ msg: error });
    }


}