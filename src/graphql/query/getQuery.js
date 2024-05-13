import {  gql } from '@apollo/client';

export const GET_USER = gql`
query ExampleQuery {
    company {
      ceo
    }
    roadster {
      apoapsis_au
    }
  }
  `

