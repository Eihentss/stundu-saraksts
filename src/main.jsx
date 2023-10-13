import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//katra faila var but tikai 1 komponene
//1. iegust elementu no index.html
const elementsNotHTML = document.getElementById("root");
const sakne = ReactDOM.createRoot(elementsNotHTML);
sakne.render(<App />)