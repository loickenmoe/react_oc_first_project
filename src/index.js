import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey/survey'
import Header from './components/Header'
// ajout de nos composants
// import ClientForm from './components/ClientForm'
// import FreelanceForm from './components/FreelanceForm'
import Error from './components/Error'
import Results from './pages/Results/results'
import Freelances from './pages/Freelances/freelances'
import { createGlobalStyle } from 'styled-components'
// creation d'un style global de base de notre projet
const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
    margin: 0;
    }
`

export default GlobalStyle

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Survey" element={<Survey />}>
          nous imbriquons nos composants dans survey
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
        </Route> */}
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="results" element={<Results />} />
        <Route path="freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
