import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import "./global.css";
import "./index.css";
import Culture from "./pages/Culture";
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route Component={Dashboard} path='/' ></Route>
        <Route Component={Culture} path="/culture/:id"></Route>
        {/* <Route Component={Navbar} path="/culture/:id"></Route> */}
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
