import "./index.css"
import logo from './logo.svg';
import './App.css';
import "./global.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Culture from "./pages/Culture";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Dashboard} path='/' ></Route>
        <Route Component={Culture} path="/culture/:id"></Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
