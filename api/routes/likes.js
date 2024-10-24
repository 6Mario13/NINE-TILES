import e from "express";
import { getLikes, addLike, deleteLike } from "../controllers/like.js";

const router = e.Router()

router.get("/", getLikes )
router.post("/", addLike )
router.delete("/", deleteLike )

export default router