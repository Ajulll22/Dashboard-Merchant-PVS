import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import Footer from '../components/Login/Footer'
import Poster from '../components/Login/Poster'
import { setUser } from '../redux/store/userSlice'

const loginFormState = {
    email: "",
    password: ""
}

const Login = () => {
    const [form, setForm] = useState(loginFormState)

    const { email, password } = form

    const navigate = useNavigate()

    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleLogin = async() => {       
        dispatch(setUser({name: "Ajulll22", token:"token JWT nya"}))
        navigate("/dashboard")
        toast.success("Login Success")
    }

    return (
        <>
            <div className='flex mt-20 justify-evenly mb-12'>
                <div className='w-1/4 my-auto'>
                    <img src="/src/assets/wide.png" className='mx-auto mb-4' />
                    <div className='mt-3'>
                        <div className='my-1 font-medium'>Email Address</div>
                        <input onChange={handleChange} value={email} autoComplete="off" name='email' className='rounded-md border border-gray-400 w-full p-1' type="text" />
                    </div>
                    <div className='mt-3'>
                        <div className='my-1 font-medium'>Password</div>
                        <input onChange={handleChange} value={password} name='password' className='rounded-md border border-gray-400 w-full p-1' type="password" />
                    </div>
                    <div className='mt-7'>
                        <button onClick={() => handleLogin()} className='btn-primary w-full py-2 font-medium' >Login</button>
                    </div>
                </div>
                <div className='w-1/4 h-1/2 my-auto hidden lg:block'>
                    <Poster />
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Login