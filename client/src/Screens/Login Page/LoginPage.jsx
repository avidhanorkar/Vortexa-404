import Login from "./login.jsx"
import SignUp from './signUp.jsx'
const LoginPage = () => {
    return (
        <>
            <div className="h-[100vh] w-[100vw] flex bg-[#121212] justify-center items-center">
                <div className="w-[100vw] flex justify-center">
                    <div className="flex gap-[40px] flex-row justify-center">
                        <Login />
                        <SignUp />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage