const express = require('express'),
  { ApolloServer } = require('apollo-server-express'),
  mongoose = require('mongoose'),
  session = require('express-session'),
  MongoStore = require('connect-mongo')(session),
  path = require('path'),
  cors = require('cors')

const PORT = process.env.PORT || 4000,
  typeDefs = require('./typedefs/typeDefs'),
  resolvers = require('./resolvers/resolvers'),
  UserAPI = require('./datasources/user'),
  { db, secret } = require('./config/keys'),
  app = express()

require('./utils/connectToDB')(db)

app.use(cors())

app.use(session({
  secret,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}))

// if(process.env.NODE_ENV === 'production') {
  app.use('/static', express.static(path.join(__dirname, '/static/static')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/index.html'))
  })
// }

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ userAPI: new UserAPI() }),
  context: ({ req }) => ({ req })
})

apollo.applyMiddleware({ 
  path: '*',
  app,
  cors: {
    credentials: true,
    origin: 'http://localhost:3000'
  }
})

app.listen(PORT, 
  () => console.log(`Server running on localhost:${PORT}${apollo.graphqlPath}`)
)