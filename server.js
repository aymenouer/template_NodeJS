// 
const express = require("express");
const connectDB = require('./utils/db');
const path = require('path');
const config = require('./config');
const cors = require('cors');
const helmet = require('helmet');

// import authRouter from './ressources/auth/auth.router'

const morgan = require('morgan')

const app = express()

// Connect Database
connectDB()

/**
 * Init Middleware
 * **/

// parse json request body
app.use(express.json({ extended: false }))
// parse urlencoded request body
//app.use(express.urlencoded({ extended: true }))
// set security HTTP headers
app.use(helmet())
// enabling CORS for all requests
app.use(cors())
app.options('*', cors())
// adding morgan to log HTTP requests
app.use(morgan('dev'))

// Define Routes

//app.use('/api/user', userRouter)



// Serve static assets in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }


  const PORT = config.port || 4000
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
