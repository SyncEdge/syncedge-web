import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Industries from './components/Industries'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Services />
      <TechStack />
      <Industries />
      <Process />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
