import React from "react"
import { ApolloProvider } from "react-apollo"
// import { hot } from "react-hot-loader"

import "bootstrap/dist/css/bootstrap.min.css"

import client from "app/apollo/client"
import Routes from "app/Routes"

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
)

// export default hot(module)(App)
export default App