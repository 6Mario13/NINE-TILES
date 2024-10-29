import e from "express";
import { getComment, addComment } from "../controllers/comment.js";

const router = e.Router()

router.get("/", getComment )
router.post("/", addComment )


export default router