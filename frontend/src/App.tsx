import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Userspage from './pages/Userspage';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
 <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
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
