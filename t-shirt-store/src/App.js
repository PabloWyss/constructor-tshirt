import './App.css';
import { Routes, Route} from 'react-router-dom'
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path="/" element={<LogIn/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
