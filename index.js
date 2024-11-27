import express from "express";
import ejs from "ejs";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = 3000;
const db = new pg.Client({
	port: process.env.PG_PORT,
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
	database: process.env.PG_DATABASE,
	host: process.env.PG_HOST

});

db.connect();
console.log(`Datebase has been succesfully connected with server`);

app.use(express.static("public"));

app.get("/", (req,res) => {
	res.render("index.ejs");
});


app.listen(port, (req,res) => {
	console.log(`Server is up and running on port ${port}`);
});



To push on github run on terminal:

touch .gitignore -> nano .gitignore -> node_modules + package-lock.json
git init
gh repo create 
git remote add origin "https://github.com/Markos-Souchlos/YourProjectName.git"
git branch -M main 
