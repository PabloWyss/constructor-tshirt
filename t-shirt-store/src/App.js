import './App.css';
import { Routes, Route} from 'react-router-dom'
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path="/logIn" element={<LogIn/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
