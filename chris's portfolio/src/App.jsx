import React from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Contact from './components/Contact'
//import Footer from './components/Footer'
//import About from './components/About'
//import Project from './components/Project'


import './App.css'

function App() {

  return (
    <div>
      <Navigation />
      <Header />
      <main>
        {/* <About /> */}
        {/* <Project /> */}
        <Contact />
      </main>
      {/* <Footer /> */}

    </div>
  )
  
}

export default App
