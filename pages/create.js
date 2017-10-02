import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';
import Create from '../components/Create';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj89un4bt0860012227gdvade',
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
});

export default () => (
  <ApolloProvider client={client}>
    <div>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css" />
      <Create />
      <div>
        <a href="/">Home</a>
      </div>
    </div>
  </ApolloProvider>
);
