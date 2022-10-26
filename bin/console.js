import repl from 'repl'
import app from '../src/app.js'

Object.assign(repl.start().context, {
  app,
})
