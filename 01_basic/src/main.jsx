import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props : {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Clcil me to visit google"
}

const CustomReactElement = React.createElement(
    reactElement.type,
    reactElement.props,
    reactElement.children
)

createRoot(document.getElementById('root')).render(
    // <App />
    CustomReactElement
)
