import cors from 'express'
import express from 'express'
import sqlite from 'sqlite3'
import ejs from 'ejs'

const db = new sqlite.Database('../db.sqlite')

const app = express()
const port = 4004

app.set('view engine', 'ejs')

app.get('/', function(request, response) {
  response.render('index')
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})

db.close()
