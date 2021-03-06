import gql from 'graphql-tag';


export const getUsers = gql `
      query {
        users{
          id
          name
          lastname
          email
        }
      }`;

export const login = gql`
      query login($email: String!, $password: String!){
        login(email: $email, password: $password){
          status
          message
          token
        }
      }`
      
export const userData = gql`
      query {
        me{
          status
          message
          user {
            id
            name
            lastname
            email
          }
        }
      }`