import logo from './logo.svg';
import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <Header />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
