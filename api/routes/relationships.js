import e from "express";
import { getRelationships, addRelationship, deleteRelationship } from "../controllers/relationship.js";

const router = e.Router()

router.get("/", getRelationships )
router.post("/", addRelationship )
router.delete("/", deleteRelationship )

export default router