import logo from './logo.svg';
import './App.css';
import './components/Photo.js';
import Photo from './components/Photo.js';
import Content from './components/Content';

function App() {
  return (
    <div className="App bg-black">
      <div className="max-w-sm mx-auto">
        <Photo />
        <Content/>
      </div>
    </div>
  );
}

export default App;
