const express = require('express')
const app = express()

app.get('/home', function (req, res) {
    let a =1;
    let b=2;
    let c = a+b
  res.send('Welcome to NodeJS')
})
//127.0.0.1 localhost
app.listen(2022)