import logo from './logo.svg';
import './App.css';
import './components/Photo.js';
import Photo from './components/Photo.js';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-black py-1">
      <div className="max-w-sm mx-auto">
        <Photo />
        <Content/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
