import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import { REGISTERMUTATION } from '../../graphql/mutations/register'

export default function Register(props) {
  const [ email, setEmail ] = useState(''),
        [ password, setPassword ] = useState(''),
        [ password2, setPassword2 ] = useState(''),
        [ name, setName ] = useState(''),
        [ register, { error } ] = useMutation(REGISTERMUTATION, {
          variables: { email, name, password, password2 }
        })
        
  return (
    <div className='register'>
      <form onSubmit={ async e => {
        e.preventDefault()
        await register()
        props.history.push('/login')
      }}>
        <h2>Sign Up</h2>
        <input
          required
          name='email'
          type='email'
          value={ email }
          onChange={ e => setEmail(e.target.value) }
          placeholder='Enter your email'
        />
        <input
          required
          type='text'
          value={ name }
          onChange={ e => setName(e.target.value) }
          placeholder='Enter your name'
        />
        <input
          required
          type='password'
          value={ password }
          onChange={ e => setPassword(e.target.value) }
          placeholder='Enter your password'
        />
        <input
          required
          type='password'
          value={ password2 }
          onChange={ e => setPassword2(e.target.value) }
          placeholder='Enter your password again'
        />
        { error && <p>{ error.message }</p> }
        <button>SignUp</button>
      </form>
    </div>
  )
}