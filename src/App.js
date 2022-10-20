import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Add from './pages/add';
import Edit from './pages/edit';
import Delete from './pages/delete';
import Help from './pages/help';
  




function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/edit' element={<Edit/>} />
        <Route path='/delete' element={<Delete/>} />
        <Route path='/help' element={<Help/>} />
    </Routes>
    </Router>
);
}
  
export default App;