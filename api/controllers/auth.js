import { db } from "../connect.js"
import bcrypt from "bcryptjs"

export const register = (req,res) => {
  
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q,[req.body.username], (err,data)=>{
    if(err) return res.status(500).json(err)
    if(data.lenght) return res.ststus(409).json("User already exists");
      //  create a new user
    // hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (`username`,`email`,`password`) VALUE (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword
    ];

    db.query(q,[values], (err,)=> {
      if (err) return res.ststus(500).json(err);
      return res.ststus(200).json("User has been created.")
    });
  });
};

export const login = (req,res) => {

}
export const logout = (req,res) => {

}