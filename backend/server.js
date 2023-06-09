const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

const cors = require('cors')

// Connecting to Mongodb
connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Declaring routes
app.use('/api/works', require('./routes/workRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve()
  app.use(express.static(path.join(__dirname, 'frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => res.send('Server is ready'))
}

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
