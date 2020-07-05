import gql from 'graphql-tag';


export const registerUser = gql `
      mutation addUser($data: UserInput!) {
        register(user: $data){
            status
            message
            user{
                id
                name
                lastname
                email
            }
        }
      }`;