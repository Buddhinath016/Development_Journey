const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username : "harkirat@gmail.com",
        password : "123",
        name : "Harkirat Singh"
    },
    {
        username : "raman@gmail.com",
        password : "123321",
        name: "Raman Singh"
    },
    {
        username : "priya@gmail.com",
        password : "123321",
        name : "Priya Kumari"
    }
];

function userExists(username,password){
    let userExists = false;
    for(let i=0;i<ALL_USERS.length;i++){
        if (ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"User doesn't exist in our memory db"
        });
    }

    var token = jwt.sign({username : username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users",(req,res)=>{
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword); 
        return res.status(200).json({
            msg :decoded,
        });
    }
    catch(err){
        return res.status(403).json({
            msg :"Invalid Token",
        });
    }
});

app.listen(3000);