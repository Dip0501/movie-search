import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.';
import Home from './pages/Home';
import Movie from './pages/Movie';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path=':id' element={<Movie/>}/>
        </Routes>
    </Router>
  );
}

export default App;
