import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws/index.js";

const httpLink = new HttpLink({
  uri: "https://upward-primate-81.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "MmC6gkXTCJUMsqk00aCedovW53C57EWZnZPz1N0yeJsZHzYu3rYPETNhDAD8ARzq",
  },
});

const wsLink = new WebSocketLink({
  uri: "wss://upward-primate-81.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "MmC6gkXTCJUMsqk00aCedovW53C57EWZnZPz1N0yeJsZHzYu3rYPETNhDAD8ARzq",
      },
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);
const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  //   uri: "https://upward-primate-81.hasura.app/v1/graphql",
  //   cache: new InMemoryCache(),
  //   headers: {
  //     "x-hasura-admin-secret":
  //       "MmC6gkXTCJUMsqk00aCedovW53C57EWZnZPz1N0yeJsZHzYu3rYPETNhDAD8ARzq",
  //   },
});

export default apolloClient;
