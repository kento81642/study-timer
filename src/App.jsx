import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import Timer from './pages/Timer'
import Record from './pages/Record'
import History from './pages/History'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/record" element={<Record />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App