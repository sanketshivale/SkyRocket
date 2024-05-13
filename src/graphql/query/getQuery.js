import { gql } from '@apollo/client';

export const GET_USER = gql`
query Query {
    company {
      ceo
    }
    roadster {
      apoapsis_au
    }
  }
  `

export const GET_LAUNCHES = gql`
query Query($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset) {
      id
      details
      launch_date_local
    }
  }
  
`;

