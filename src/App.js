import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
