import { GraphQLError } from 'graphql';
import { GET_ASSERTION } from '../../graphql/assertion/findAssertion';

const findAssertion = {
  id: 'clau64wf002610157si73b29x',
  nameRecipient: 'Bastián',
  lastNameRecipient: 'Osorio',
  emailRecipient: 'bastian.osorio@trebol-it.com',
  issuedOn: '2022-11-23',
};

const data = {
  findAssertion,
};

const errors = {
  errors: [
    {
      message: 'Emisión no encontrada',
    },
  ],
  data: {
    findAssertion: null,
  },
};

const mocks = [
  {
    request: {
      query: GET_ASSERTION,
      variables: { id: 'eee' },
    },
    result: {
      data,
    },
  },
];

const errorMock = [
  {
    request: {
      query: GET_ASSERTION,
      variables: { id: 'clau64wf002610157si73b29x' },
    },
    result: {
      errors: [new GraphQLError('Emisión no encontrada')],
    },
  },
];

export const mockAssertionInfo = {
  findAssertionResult: data,
  mockApolloQuery: mocks,
  errorApolloQuery: errorMock,
};
