import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>学習開始画面</div>} />
        <Route path="/timer" element={<div>学習中画面</div>} />
        <Route path="/record" element={<div>記録入力画面</div>} />
        <Route path="/history" element={<div>学習記録一覧</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App