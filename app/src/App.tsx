import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home'
import { Poker } from './pages/poker'
import { PageServer } from './pages/socket'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/poker" element={<Poker />} />
        <Route path="/server" element={<PageServer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
