const validator = require('validator') 
const { UserInputError, AuthenticationError } = require('apollo-server-express')

module.exports = ({ email, password, name, password2 }) => {
  if(validator.isEmpty(name)) {
    throw new UserInputError('Name is required')
  }

  if(!validator.isLength(name, { min: 2, max: 30 })){
    throw new UserInputError('Name must be between 2 and 30 characters.')
  }

  if(validator.isEmpty(email)) {
    throw new UserInputError('Email is required')
  }

  if(!validator.isEmail(email)) {
    throw new UserInputError('Email is invalid')
  }

  if(validator.isEmpty(password)) {
    throw new UserInputError('Password is required')
  }

  if(!validator.isLength(password, { min: 6, max: 30 })) {
    throw new UserInputError('Password must be at least 6 characters')
  }

  if(validator.isEmpty(password2)) {
    throw new UserInputError('Confirm Password field is required')
  }

  if(!validator.equals(password, password2)) {
    throw new AuthenticationError('Passwords must match')
  }
}