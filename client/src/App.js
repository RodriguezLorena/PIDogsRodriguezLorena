import { BrowserRouter, Routes, Route } from "react-router-dom"
import Detalle from "./pages/Detalle.jsx";
import Home from './pages/Home.jsx';
import Landing from './pages/Landing.jsx'
import CreandoPerros from "./pages/CreandoPerros.jsx";
import NotFound from './pages/NotFound.jsx'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="/detalle/:id" element={<Detalle/>}/>
          <Route path="/newdogs" element={<CreandoPerros/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>  
      </BrowserRouter>
  );
}

export default App;
