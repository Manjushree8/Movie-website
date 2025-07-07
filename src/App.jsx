import { BrowserRouter, Routes, Route} from 'react-router-dom' 
import './App.css'
import Navbar from './pages/Navbar'
import Watchlist from './pages/Watchlist'
import Home from './pages/Home'
import { WatchListProvider } from './context/WatchListContext'


function App() {


  return (
    <WatchListProvider>
    <BrowserRouter>
    <div style={{
      height: "300vh"
    }}>
     <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Watchlist" element={<Watchlist/>} />
      </Routes>
      </div>
    </BrowserRouter>
    </WatchListProvider>
  )
}

export default App
