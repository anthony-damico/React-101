import logo from './logo.svg';
import './App.css';
import Item from './MyItem'; //By Default, ReactJS assumes you are importing .js files. Onyl add file extention for non JS files

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Item name='Skye'/> {/* Instatiate / Use the "Item" compoenet/class created in MyItem.js */}
        <Item name='Izzy'/> {/* name= is a property that we can pass though to the class */}
        <Item name='Tony'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; //Take the App() function declared and export it. This allows App() to become "importable" - see import statemnets in index.js
