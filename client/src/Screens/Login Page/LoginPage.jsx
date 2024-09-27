import Login from "./login.jsx"
import SignUp from './signUp.jsx'
const LoginPage = () => {
    return (
        <>
            <div className="w-[100vw] flex justify-center">
                <div className="flex gap-[40px] flex-row justify-center">
                    <Login />
                    <SignUp />
                </div>
            </div>
        </>
    )
}

export default LoginPage