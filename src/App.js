import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Time from './components/Time';
import Contact from './components/Contact';
import Joke from './components/Joke';

function App() {
  return (
    <div className="App">
      <Nav />
      <Time />
      <Hero />
      <Joke setup = "what up" punchline = "nothing" />
      <Joke setup = "this a setup" punchline = "sopranos"/>
      <Joke punchline = "sopra"/>
      <Contact name = "David" img = "./felix.png"/>
      <Contact  name = "Guitar" img = "./fluffykins.png"/>
    </div>
  );
}

export default App;
