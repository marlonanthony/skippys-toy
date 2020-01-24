const mongoose = require('mongoose')

module.exports = async db => {
  try {
    const mongo = await mongoose.connect(db, {
      useNewUrlParser: true, 
      // useCreateIndex: true,
      // useUnifiedTopology: true
    })
    if(mongo) console.log('MongoDB connected')
  } catch(err){ throw err }
}