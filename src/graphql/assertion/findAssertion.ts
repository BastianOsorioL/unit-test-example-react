import { gql } from '@apollo/client';

export const GET_ASSERTION = gql`
  query findAssertion($id: String!) {
    findAssertion(id: $id) {
      id
      nameRecipient
      lastNameRecipient
      emailRecipient
      issuedOn
    }
  }
`;
