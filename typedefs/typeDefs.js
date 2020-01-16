const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    me: User
  }

  type Mutation {
    register(
      name: String!, 
      email: String!, 
      password: String!, 
      password2: String!
    ): Boolean!
    login(email: String!, password: String!): User!
    logout: Boolean
    deleteUser: Boolean
  }

  type User {
    id: ID!
    email: String!
    name: String!
    admin: Boolean!
    createdAt: String!
    updatedAt: String 
  }
`