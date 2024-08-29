import { db } from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = (req,res) => {
  
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q,[req.body.username], (err,data)=>{
    if(err) return res.status(500).json(err)
    if(data.length) return res.status(409).json("User already exists")
    // create a new user
    // hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword
    ];

    
    db.query(q,[values], (err,data)=> {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.")
    });
  });
};

export const login = (req,res) => {
  const q = "SELECT * FROM users WHERE username = ?"

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err)
    if (data.length === 0) return res.status(404).json("User not found!")

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    )

    if(!checkPassword) return res.status(400).json("Wrong password or username!")

    const token = jwt.sign({ id: data[0].id}, "secretkey")

  
    // eslint-disable-next-line no-unused-vars
    const { password, ...other} = data[0]

    res
      .cookie("accessToken", token, {
      httpOnly: true,
      })
      .status(200)
      .json(other)
  })
}


// export const login = (req, res) => {
//   const q = "SELECT * FROM users WHERE username = ?";

//   db.query(q, [req.body.username], (err, data) => {
//     if (err) return res.status(500).json(err);
//     if (data.length === 0) return res.status(404).json("User not found!");

//     const user = data[0];

//     // Sprawdzenie, czy hasło z req.body istnieje
//     if (!req.body.password) {
//       return res.status(400).json("Password is required");
//     }

//     // Sprawdzenie, czy hasło z bazy danych istnieje
//     if (!user.password) {
//       return res.status(500).json("Server error: password is missing for the user");
//     }

//     const checkPassword = bcrypt.compareSync(req.body.password, user.password);

//     if (!checkPassword) return res.status(400).json("Wrong password or username!");

//     const token = jwt.sign({ id: user.id }, "secretkey");

//     const { password, ...other } = user;

//     res.cookie("accessToken", token, {
//       httpOnly: true,
//     }).status(200).json(other);
//   });
// };

export const logout = (req,res) => {
  res.clearCookie("accessToken", {
    secure:true,
    sameSite:"none"
  }).status(200).json("User has been logout.")

}