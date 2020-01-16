import gql from 'graphql-tag'

export const REGISTERMUTATION = gql`
  mutation RegisterMutation($email: String!, $password: String!, $password2: String!, $name: String!) {
    register(email: $email, password: $password, password2 :$password2, name: $name)  
  }
`
