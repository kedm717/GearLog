require('dotenv').config(); 
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');

// const controllers = require("./controllers");

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// app.get('/auth', controllers.auth);
// app.post('/signin', controllers.signin);
// app.post('/signup', controllers.signup);
// app.post('/signout', controllers.signout);

app.get("/", (req, res) => {
  res.send("헬로월드다");
});

//jangbiList 로직
const {jangbis} = require('./data.json');
app.get('/jangbis', (req, res)=>{
  res.status(200)
  res.send(jangbis)
})

app.get('/jangbis/:id', (req, res)=>{
  const {id} = req.params;
  const filterJangbi = jangbis.filter(jangbi => jangbi.id === Number(id));
  if(!filterJangbi.length){
    return res.status(404).send();
  }
  res.status(200)
  res.send(filterJangbi[0])
})

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 에서 스타트중");
});


module.exports = app;