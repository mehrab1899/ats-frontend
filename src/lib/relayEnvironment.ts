// src/lib/relayEnvironment.ts
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

// Function to fetch GraphQL queries
function fetchQuery(operation: any, variables: any) {
  return fetch('http://localhost:4000/graphql', {  // Replace with your GraphQL server URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,  // GraphQL query string
      variables,
    }),
  }).then((response) => response.json());
}

// Create a network layer using the fetchQuery function
const network = Network.create(fetchQuery);

// Create a store and record source (for caching and data management)
const store = new Store(new RecordSource());

// Initialize the Relay environment
const relayEnvironment = new Environment({
  network,
  store,
});

export default relayEnvironment;
