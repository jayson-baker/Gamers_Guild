import { Outlet } from "react-router-dom";
import Nav from './components/navbar'
import SideBar from "./components/SideBar";
import { ApolloProvider, InMemoryCache, ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Nav />
      <SideBar />
      <Outlet />
    </ApolloProvider>
    </>
  )
}

export default App