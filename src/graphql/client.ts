import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const restLinkMainCLient = createUploadLink({
  uri: 'http://localhost:8000/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer f52f1c84-8ef1-45e5-909a-51a72719924f`,
    },
  };
});

export const clientMain = new ApolloClient({
  link: authLink.concat(restLinkMainCLient),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
