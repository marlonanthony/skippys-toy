const express = require('express'),
  { ApolloServer } = require('apollo-server-express'),
  session = require('express-session'),
  path = require('path'),
  cors = require('cors'),
  mongoose = require('mongoose')

const PORT = 4000,
  typeDefs = require('./typedefs/typeDefs'),
  resolvers = require('./resolvers/resolvers'),
  UserAPI = require('./datasources/user'),
  { db, secret } = require('./config/keys'),
  app = express()

// require('./utils/connectToDB')(db)

app.use(cors())

app.use(session({
  secret,
  resave: false,
  saveUninitialized: false
}))

if(process.env.NODE_ENV === 'production') {
  app.use('/static', express.static(path.join(__dirname, '/static/static')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/index.html'))
  })
}

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ userAPI: new UserAPI() }),
  context: ({ req }) => ({ req }),
  introspection: true,
  playground: { endpoint: '/graphql' }
})

apollo.applyMiddleware({ 
  path: '*',
  app,
  cors: {
    credentials: true,
    origin: 'http://localhost:3000'
  }
})

mongoose.connect(db, {
  useNewUrlParser: true, 
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(() => app.listen({ port: process.env.PORT || 4000 }, 
  () => console.log(`Server running on localhost:${PORT}${apollo.graphqlPath}`)
)).catch(error => console.log(error))
