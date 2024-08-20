import express from 'express'
import { DeleteUser, getAllUsers, home, login, register } from '../controllers/Usercontroller.js';


const router = express.Router();

router.route("/").get(home)

router.route("/register").post(register)

router.route("/login").post(login)

router.route("/users").get(getAllUsers)

router.route("/users/:id").delete(DeleteUser)




export default router