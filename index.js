import express from "express";
import bodyParser from "body-parser";

const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.listen(3000,()=>{
    console.log("Server is running at "+PORT);
});