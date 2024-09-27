import Dashboard from './Screens/DashBoard/dashboard.jsx'
import Landing from './Screens/Landing Page/LandingPage'
import LoginPage from './Screens/Login Page/LoginPage.jsx'
import ProgressTracker from './Screens/ProgressTracker/ProgressTracker.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/progress' element={<ProgressTracker />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
