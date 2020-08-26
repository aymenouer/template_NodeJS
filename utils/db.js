const mongoose = require('mongoose')
const options = require('../config') 
 const connectDB =  async () => {
 
  try {
    console.log('sss');
    await mongoose.connect(options.dbUrl, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log('mongoDB Connected...')
  } catch (err) {
    console.error(err.message)
    // Exit process with failure
    process.exit(1)
  }
}

module.exports = connectDB;