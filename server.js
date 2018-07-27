const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public_static'))

app.listen(2222, ()=> console.log("at http://localhost:2222"))