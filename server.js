const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')


const port = 3000

const Authrout = require('./routes/auth')
const productc = require('./routes/product');

mongoose
.connect("mongodb://localhost/Regsiter", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true 
})
.then(() => console.log("Successfully connect to MongoDB."))
.catch(err => console.error("Connection error", err));

const db = mongoose.connection

db.on('error', err => console.log(error))
db.once('open',() => {
     console.log('server is running1')
})
const app = express()
app.use(bodyparser.json())
app.listen(port,()=> {
     console.log('server is running')
})

app.use('/api',Authrout)
// app.use()
app.use('/api/type',productc)