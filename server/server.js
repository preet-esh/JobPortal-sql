const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const CAND_Route = require('./routes/api/candidate.routes');
const EMP_Route =require('./routes/api/employer.routes');

// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use(bodyParser.json({limit: '10mb', extended: true}));
// app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

app.use(cors('Access-Control-Allow-Origin','*'));

app.get('/',function(req,res){
  console.log("server active");
  res.send("server active");
})
require('./routes/api/candidate.routes')(app);
require('./routes/api/employer.routes')(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
