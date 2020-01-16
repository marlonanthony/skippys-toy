const { DataSource } = require('apollo-datasource'),
  { UserInputError, 
    AuthenticationError, 
    ForbiddenError 
  } = require('apollo-server-express'),
  validator = require('validator'),
  bcrypt = require('bcryptjs')

const User = require('../models/User'),
  validateRegisterInputs = require('../validation/validateRegisterInputs')

class UserAPI extends DataSource {

  initialize(config) {
    this.context = config.context
  }

  async createNewUser({ name, email, password, password2 }) {
    try {
      name = name.trim()
      email = email.trim()
      password = password.trim()
      password2 = password2.trim()
      validateRegisterInputs({ name, email, password, password2 })
      const existingUser = await User.findOne({ email })
      if(existingUser) { throw new ForbiddenError('User already exists') }
      const hashedPassword = await bcrypt.hash(password, 12)
      const user = await new User({
        name,
        email,
        password: hashedPassword
      })
      user.save()
      return true 
    } catch (error) { throw error }
  }

  async loginUser({ email, password }) {
    try {
      if (!validator.isEmail(email)) { throw new UserInputError('Invalid Email') }
      const user = await User.findOne({ email }) 
      if(!user) { throw new AuthenticationError('Email or password is incorrect!') }
      const isEqual = await bcrypt.compare(password.trim(), user.password)
      if(!isEqual) { throw new AuthenticationError('Email or password is incorrect!') }
      this.context.req.session.userId = user.id 
      return user
    } catch (error) { throw error }
  }

  async getMe() {
    try {
      if(!this.context.req.session.userId) return null 
      const user = await User.findById(this.context.req.session.userId)
      return user 
    } catch (error) { throw error }
  }
}

module.exports = UserAPI