import ChatBot from './Screens/ChatBot/chatBot.jsx'
import Dashboard from './Screens/DashBoard/dashboard.jsx'
import Landing from './Screens/Landing Page/LandingPage'
import LoginPage from './Screens/Login Page/LoginPage.jsx'
import ProgressTracker from './Screens/ProgressTracker/ProgressTracker.jsx'
import SignInPage from './Screens/Login Page/signinPage.jsx'
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
        <Route path='/chatBot' element={<ChatBot />} />
        <Route path='/signup' element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
