const app = require('express')(),
  { ApolloServer } = require('apollo-server-express'),
  session = require('express-session')

const PORT = 4000,
  typeDefs = require('./typedefs/typeDefs'),
  resolvers = require('./resolvers/resolvers'),
  UserAPI = require('./datasources/user'),
  { db, secret } = require('./config/keys')

require('./utils/connectToDB')(db)

app.use(session({
  secret,
  resave: false,
  saveUninitialized: false
}))

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ userAPI: new UserAPI() }),
  context: ({ req }) => ({ req })
})

apollo.applyMiddleware({ 
  app,
  cors: {
    credentials: true,
    origin: 'http://localhost:3000'
  }
})

app.listen(PORT, 
  () => console.log(`Server running on localhost:${PORT}${apollo.graphqlPath}`)
)