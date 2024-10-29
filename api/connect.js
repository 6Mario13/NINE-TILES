import mysql from 'mysql2'

export const db = mysql.createConnection({
  host: "localhost",
  user: "your-mysql-username",
  password: "your-mysql-password",
  database: "social"
  });

