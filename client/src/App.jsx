import Landing from './Screens/Landing Page/LandingPage'
import LoginPage from './Screens/Login Page/LoginPage.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
