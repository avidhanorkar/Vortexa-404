import Landing from './Screens/Landing Page/LandingPage'
import Login from './Screens/Login Page/login'
import './index.css'
import { BrowserRouter, createBrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
