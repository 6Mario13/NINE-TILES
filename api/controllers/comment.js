import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";
export const getComment = (req,res) => {
  const q = `SELECT c.*, u.id AS userId, username, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.userId) WHERE c.postId = ? ORDER BY c.createdAt DESC`
  
  db.query(q,[req.query.postId], (err,data)=>{
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  })
}

export const addComment = (req,res) => {
  const token = req.cookies.accessToken
  if (!token) return res.status(401).json("Not logged in!")
  
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(3).json("Token is not valid!")

      const q = "INSERT INTO comments (`desc`,`userId`,`createdAt`,`postId`) VALUES (?)"

      const values = [
        req.body.desc,
        userInfo.id,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        req.body.postId,
      ]
    
    db.query(q,[values], (err,data)=>{
      if (err) return res.status(500).json(err);
      return res.status(200).json("Comment has been created");
    })
  })
}