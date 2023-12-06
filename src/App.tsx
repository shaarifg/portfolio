import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';

// import Projects from './modules/projects/Projects';



function App() {
  return (
    <div className="App" id='landing'>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
