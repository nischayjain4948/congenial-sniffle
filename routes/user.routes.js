import expres from "express";
import { createUser } from '../controllers/user.controller.js'

const router = expres.Router();

router.post('/', createUser);


router.get("/", (req, res) => {
    res.status(200).json({ msg: "I am a user route....." });
})


export default router;