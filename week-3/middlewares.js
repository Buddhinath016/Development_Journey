const express = require("express");
const app = express();
const zod = require("zod");

//check validation using zod
const schema = zod.object({
    email : zod.string(),
    password : zod.string(),
    country : zod.literal("IN").or(zod.literal("US"))
});

app.use(express.json())

app.post("/check-validation", (req,res)=>{
    const data = req.body;
    const response = schema.safeParse(data);

    res.send(response);
});

app.post("/health-checkup",(req,res)=>{
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("No. of kidneys : "+kidneyLength);
});
// app.get("/health-checkup",(req,res)=>{
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if(username != "buddhinath" || password!="mahato"){
//         res.status(400).json({msg : "Bad input values "});
//         return;
//     }

//     if(kidneyId != 1 && kidneyId !=2){
//         res.status(400).json({msg : "Bad input values "});
//         return;
//     }

//     res.json({
//         msg:"Kidney is fine"
//     });
// });

//Global catch
app.use((err,req,res,next)=>{
    res.json({ msg: "500 | Something went wrong"});
})

app.listen(3000);