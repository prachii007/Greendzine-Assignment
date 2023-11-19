import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/home';
import { Login } from './components/login';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
