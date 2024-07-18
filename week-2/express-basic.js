//create http server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.post('/checkBody', (req,res) => {
    console.log(req.body);
    res.send("POST called");
});

app.listen(port,()=>{
    console.log("Server started at PORT 3000");
});
