import React from "react"
import ReactDOM from "react-dom"

import App from "app/App"

document.addEventListener("DOMContentLoaded", () => {
  const rootNode = document.getElementById("root")

  ReactDOM.render(
    <App />,
    rootNode
  )
})
