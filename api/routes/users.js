import e from "express";
import { getUser, updateUser} from "../controllers/user.js";

const router = e.Router()

router.get("/find/:userId", getUser)
router.put("/", updateUser)
// router.get("/test",(req,res)=>{
//   res.send("it works")
// })


export default router