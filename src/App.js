import { BrowserRouter, Routes, Route,Router} from "react-router-dom";
import './App.css';
import './App.scss'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
         
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
