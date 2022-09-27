import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home';
import { Poker } from './pages/poker'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/poker" element={<Poker/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
