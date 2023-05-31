const express = require('express')
const serverless = require('netlify-lambda')

const app = express()

// Set up your Express middleware, routes, and other configurations here

// Example route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the serverless function!' })
})

exports.handler = serverless(app)
