import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import grachieverlogo from "../images/LOGOS/grachiever-02.png";
 import login from '../images/Form/login.png';
 import { Link } from 'react-router-dom'
 import signup from '../images/Form/signup.png';



function LoginAndRegister({ onLogin, onRegister }) {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const confirmPasswordRef = React.createRef();
  const [isLogin, setIsLogin] = React.useState(true);

  function handleLogin(event) {
    event.preventDefault();
    // Your login logic goes here
    onLogin(emailRef.current.value, passwordRef.current.value);
  }

  function handleRegister(event) {
    event.preventDefault();
    // Your registration logic goes here
    onRegister(emailRef.current.value, passwordRef.current.value, confirmPasswordRef.current.value);
  }

  return (
    <section className="mt-20 container mx-auto"
  >
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 " 
   >
      {isLogin && (
        <div className="m-auto"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
          <img src={login} className='p-10' />
        </div>
           )}

          {!isLogin && (
          <div className="m-auto"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
          <img src={signup} className='p-10' />
        </div>
          )}

        <div className="rounded-md items-center mb-20 md:mt-20 p-2 w-[90%] m-auto md:w-[50%] bg-white shadow-lg shadow-[#dedad9] "  >
          {/* <h2 className="text-xl font-medium mb-4">{isLogin ? 'Login' : 'Register'}</h2> */}
          <img src={grachieverlogo} className=" m-auto w-40  " alt="Grachiever Logo" />
          <p className="mt-4 text-left ">
            {isLogin ? (
              <div className='w-full md:w-full'>
                <button className="text-black-500  font-bold text-[#00c5ff]  " onClick={() => setIsLogin(true)} >Login</button>
                <button className="text-black-500  ml-5 font-bold " onClick={() => setIsLogin(false)}>Signup</button>
              </div>
            ) : (
              <>
                <button className="text-black-500  font-bold " onClick={() => setIsLogin(true)}>Login </button>
                <button className="text-black-500  ml-5 font-bold text-[#00c5ff] " onClick={() => setIsLogin(false)}>Signup</button>
              </>
            )}
          </p>
          {/* <p className='mt-2'>Enter your information to setup a new account </p> */}
          <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
              <div className="mb-4 mt-5">
                {/* <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label> */}
                <input type="text" id="confirmPassword" className="block py-2.5 px-0 w-full md:w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Username" ref={confirmPasswordRef} />
                <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">confirmPassword</label>
              </div>
            )}
            <div className="mb-4 mt-5">
              {/* <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label> */}

              <input type="email" id="email" className="block py-2.5 px-0  w-full md:w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Enter your email" ref={emailRef} />
              <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="mb-4">
              {/* <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label> */}

              <input type="password" id="password" className="block py-2.5 px-0  w-full md:w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Password" ref={passwordRef} />
              <svg
                className="absolute top-0 left-0 w-8 h-full text-gray-400 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                {/* <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-8 10.59L5.41 8H19v8H5.41l6.59-6.59z" /> */}
              </svg>
              <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password


              </label>
           
            </div>
            {isLogin && (
            <div className='mb-3 hover:text-[#00c5ff] '><Link to="/Forgetpass">Forgot Password?</Link></div>
            )}
          
            <button type="submit" className="bg-[#00c5ff] hover:text-black border-2 border-[#00c5ff] hover:bg-white text-white rounded-md w-full md:w-full px-4 py-2"
             data-aos="zoom-in"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1000">{isLogin ? 'LOGIN' : 'SIGN UP'}</button>

            {/* -------------logo--------------- */}
            <div className=' mt-10 w-full md:w-full '>
              <p className='text-center'>Or With Social Profile</p>
              <div className='text-center'>
              <a
                href="#!"
                type="button"
                className="m-1 mt-2 mx-3 h-9 w-9 rounded-full border-2 border-[#1877f2] uppercase leading-normal text-[#1877f2] transition  ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-[#349fcf]"
                data-te-ripple-init
                data-te-ripple-color="light">
                <svg
                  // xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/grachiever?igshid=ZDdkNTZiNTM="
                type="button"
                className="m-1 mt-2 mx-3 h-9 w-9 rounded-full border-2 border-[#c13584] uppercase leading-normal text-[#c13584] transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-[#349fcf]"
                data-te-ripple-init
                data-te-ripple-color="light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/grachiever/"
                type="button"
                className="m-1 mt-2 mx-3 h-9 w-9 rounded-full border-2 border-[#0077b5] uppercase leading-normal text-[#0077b5] transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-[#349fcf]"
                data-te-ripple-init
                data-te-ripple-color="light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              </div>
            </div>


          </form>

        </div>
      </div>
    </section>
  );
}

export default LoginAndRegister;
