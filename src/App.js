import Header from './components/Header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

import './App.css';

function App() {
  return (
    <main className="container">
      <Header />
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
