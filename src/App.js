import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar';
import Game from './Components/Game';
import GameInfo from './Components/GameInfo';
import GameEditForm from './Components/GameEditForm';
import GameNewForm from './Components/GameNewForm';
import Games from './Components/Games';
import Edit from './Pages/Edit';
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';
import four0Four from "./Pages/404";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/games' element={<Index />} />

            <Route path='/games/new' element={<New />} />

            <Route exact path='games/:id' element={<Show />} />
            <Route path='/games/:id/edit' element={<Edit />} />
            <Route path="*" element={<four0Four />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
