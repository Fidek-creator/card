import logo from './logo.svg';
import './App.css';
import './components/Photo.js';
import Photo from './components/Photo.js';
import Content from './components/Content';

function App() {
  return (
    <div className=" max-w-sm mx-auto bg-white rounded-xl">
      <Photo className=""/>
      <Content/>
    </div>
  );
}

export default App;
