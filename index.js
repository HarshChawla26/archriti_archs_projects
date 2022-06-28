const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const path = require('path');
const mongoose = require('./data.js');
const qroutes = require('./routes/froute.js');
const froutes = require('./routes/feedback.js');

const path = require('path');

const app = express()
const port = process.env.PORT||3000;

const server = http.createServer(app);

// app.set
app.use(bodyParser.json());

app.use(cors({origin:'https://archiritiarchitects.azurewebsites.net'})); 

app.set('port',port);
app.use('/',express.static(path.join(__dirname,'arch-website')));
app.get('/',(req,res,next)=>{
  res.sendFile(__dirname,'../src','index.html');
})
  
  
  app.use('/quotes',qroutes);
  app.use('/feedbacks',froutes);
  app.get("*",(req,res)=>{
    res.send("Error:404 Page not found!")
  })

server.listen(port, () => {
  console.log(`Example app listening on port :${port}`)
})