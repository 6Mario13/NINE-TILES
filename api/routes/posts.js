import e from "express";
import { getPosts, addPost } from "../controllers/post.js";

const router = e.Router()

router.get("/", getPosts)
router.post("/", addPost)


export default router