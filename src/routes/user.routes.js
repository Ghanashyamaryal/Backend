import { Router } from "express";
import { userRegistration } from "../controller/userRegister.controller.js"

const router = Router()

router.route("/register").post(userRegistration)

export default router