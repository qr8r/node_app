import cors from 'express'
import express from 'express'
import sqlite from 'sqlite3'
import ejs from 'ejs'

const db = new sqlite.Database('../db.sqlite')

const app = express()

app.db = db

app.set('view engine', 'ejs')

app.get('/', function(request, response) {
  response.render('index')
})

export default app
