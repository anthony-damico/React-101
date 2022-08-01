import './App.css';
import StarWars from './components/myStarWars';
//import Item from './MyItem'; //By Default, ReactJS assumes you are importing .js files. Onyl add file extention for non JS files

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App; //Take the App() function declared and export it. This allows App() to become "importable" - see import statemnets in index.js
