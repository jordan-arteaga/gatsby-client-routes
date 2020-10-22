import React from "react"
import { Router } from "@reach/router"
import Profile from "../components/Profile"
import Default from "../components/Default"

const App = () => {
  return (
    <Router basepath="/app">
      <Profile path="/profile" />
      <Default path="/" />
    </Router>
  )
}

export default App
