import app from './app.js'

const port = 4004

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})

app.db.close()
