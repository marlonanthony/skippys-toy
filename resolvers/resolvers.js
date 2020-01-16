const User = require('../models/User')

module.exports = {
  Query: {
    me: async (_, __, { dataSources }) => {
      try {
        const user = await dataSources.userAPI.getMe()
        return user
      } catch (error) { throw error }
    }
  },

  Mutation: {
    register: async (_, { name, email, password, password2 }, { dataSources }) => {
      try {
        const newUser = await dataSources.userAPI.createNewUser({ name, email, password, password2 })
        return newUser
      } catch (error) { throw error }
    },
    login: async (_, { email, password }, { dataSources }) => {
      try {
        const user = await dataSources.userAPI.loginUser({ email, password })
        return user 
      } catch (error) { throw error }
    },
    logout: async (_, __, { req }) => {
      try { req.session.destroy(() => false) } 
      catch (error) { throw error }
    },
    deleteUser: async (_, __, { req }) => {
      try {
        await User.deleteOne({ _id: req.session.userId })
        req.session.destroy(() => false)
      } catch (error) { throw error }
    }
  }
}