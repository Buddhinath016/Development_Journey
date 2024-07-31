const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://Buddhinath016:Buddhi016@freedatabase.s9ruopr.mongodb.net/UserApp");
const Users = mongoose.model("Users",{name : String, email : String, password:String});

app.post("/signup", async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await Users.findOne({email : email});
    if(existingUser){
        return res.status(400).send("User already exists");
    }

    const user = new Users({
        name : name,
        email : email,
        password : password
    });

    user.save();
    res.status(200).json({
        msg : "User created successfully"        
    });
});

app.listen(3000);