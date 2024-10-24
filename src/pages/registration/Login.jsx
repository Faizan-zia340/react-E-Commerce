/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            {/* Login Form  */}
            <div className="login_Form bg-purple-50 px-1 lg:px-8 py-6 border border-purple-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-violet-500 '>
                        Login
                    </h2>
                </div>

                {/* Input for Email  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        className='bg-purple-50 border border-purple-200 px-2 py-2 w-96 rounded-md outline-none placeholder-purple-200'
                    />
                </div>

                {/* Input for Password  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        className='bg-purple-50 border border-purple-200 px-2 py-2 w-96 rounded-md outline-none placeholder-purple-200'
                    />
                </div>

                {/* Login Button  */}
                <div className="mb-5">
                    <button
                        type='button'
                        className='bg-violet-500 hover:bg-purple-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Login
                    </button>
                </div>

                {/* Forgot Password Mail Link */}
                <div className="mb-3 text-center">
                    <a
                        href="mailto:support@example.com?subject=Password Reset Request&body=Hi, I need to reset my password."
                        className='text-violet-500 font-bold'
                    >
                        Forgot your password?
                    </a>
                </div>

                {/* Signup Link */}
                <div>
                    <h2 className='text-black'>
                        Don't have an account? <Link className='text-violet-500 font-bold' to={'/signup'}>Signup</Link>
                    </h2>
                </div>

            </div>
        </div>
    );
}

export default Login;
