import expres from "express";
import { createUser } from '../controllers/user.controller.js'

const router = expres.Router();

router.post('/', createUser);


export default router;