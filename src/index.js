import React from "react"
import ReactDOMClient from "react-dom/client"
import App from "./components/App"
import 'bootstrap/dist/css/bootstrap.min.css'

const rootElement = document.getElementById("root")

const root = ReactDOMClient.createRoot(rootElement)
root.render(<App callback={() => console.log("rendered")} />)