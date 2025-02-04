import jwt from "jsonwebtoken"
import { db } from "../connect.js"
import moment from "moment"

export const getPosts = (req,res) => {
  const token = req.cookies.accessToken
  if (!token) return res.status(401).json("Not logged in!")
  
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(3).json("Token is not valid!")
      const q = `SELECT p.*, u.id AS userId, username, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ? ORDER BY p.createdAt DESC`
    
    db.query(q,[userInfo.id, userInfo.id], (err,data)=>{
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    })
  })
}

export const addPost = (req,res) => {
  const token = req.cookies.accessToken
  if (!token) return res.status(401).json("Not logged in!")
  
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(3).json("Token is not valid!")

      const q = "INSERT INTO posts (`img`,`desc`,`userId`,`createdAt`) VALUES (?)"

      const values = [
        req.body.img,
        req.body.desc,
        userInfo.id,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      ]
    
    db.query(q,[values], (err,data)=>{
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created");
    })
  })
}

export const deletePost = (req,res) => {
  const token = req.cookies.accessToken
  if (!token) return res.status(401).json("Not logged in!")
  
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(3).json("Token is not valid!")

      const q = "DELETE FROM posts WHERE `id`= ? AND `userId` = ?"
    
    db.query(q,[req.params.id, userInfo.id], (err,data)=>{
      if (err) return res.status(500).json(err);
      if (data.affectedRows>0) return res.status(200).json("Post has been deleted");
      return res.status(403).json("You can delete only your post")
    })
  })
}