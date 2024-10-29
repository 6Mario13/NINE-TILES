import e from "express";
import {login, register, logout  } from "../controllers/auth.js";

const router = e.Router()

router.post("/login", login)
router.post("/register", register)
router.post("/logout", logout)


export default router