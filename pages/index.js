import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';
import List from '../components/List';
import Create from '../components/Create';

const networkInterface = createNetworkInterface({
  // __SIMPLE_API_ENDPOINT__ looks similar to: `https://api.graph.cool/simple/v1/<PROJECT_ID>`
  uri: 'https://api.graph.cool/simple/v1/cj89un4bt0860012227gdvade',
});

const client = new ApolloClient({ networkInterface });

export default () => (
  <ApolloProvider client={client}>
    <div>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css" />
      <div>Welcome to trailpiste!</div>
      <List />
      <Create />
    </div>
  </ApolloProvider>
);
