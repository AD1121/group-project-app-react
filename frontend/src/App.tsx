import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Userspage from './pages/Userspage';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu></Menu>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/userspage' element={<Userspage />} />
          <Route path='*' element={<h1>Page not found 404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
