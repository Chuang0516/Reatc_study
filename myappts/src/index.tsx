import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './05-redux/App'
import reportWebVitals from './reportWebVitals'
// import './02-class+ts/01-state'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
