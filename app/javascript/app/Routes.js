import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "reactstrap"

import HomePage from "app/pages/HomePage"
import LoginPage from "app/pages/LoginPage"
import RegisterPage from "app/pages/RegisterPage"

import Menu from "app/containers/Menu"

const Routes = () => {
  return (
    <Router>
      <div>
        <Menu />

        <Container style={{ marginTop: 50 }}>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Container>
      </div>
    </Router>
  )
}

export default Routes