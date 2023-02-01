import Dashboard from "./layouts/Dashboard"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./layouts/Login"
import ToastMessage from "./components/ToastMessage"

function App() {
  return (
    <BrowserRouter>
    <ToastMessage />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />

        <Route path="*" element={<>Test</>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
