"use client";

import { ApolloProvider as GraphQlApolloProvider, ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError, ErrorResponse } from "@apollo/client/link/error";
import React, { ReactNode, FC } from "react";

const GRAPHQL_URL: string = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;

const httpLink = createHttpLink({
  uri: GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  const authLocal = localStorage.getItem("authSession");
  const token = authLocal ? (JSON.parse(authLocal).state?.token as string) : "";

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }: ErrorResponse) => {
  if (networkError && 'statusCode' in networkError && networkError.statusCode === 401) {
    console.log("Unauthorized. Redirecting to login.");
    localStorage.clear();
    window.location.href = "/login";
  }

  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

export const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});

interface ApolloProviderProps {
  children: ReactNode;
}

const ApolloProvider: FC<ApolloProviderProps> = ({ children }) => {
  return (
    <GraphQlApolloProvider client={apolloClient}>
      {children}
    </GraphQlApolloProvider>
  );
};

export default ApolloProvider;