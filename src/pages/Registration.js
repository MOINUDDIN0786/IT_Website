import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar/NavBar';
import { useDocTitle } from '../components/CustomHook';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
//const [passwordValidationMessage, setPasswordValidationMessage] = useState('');
const Swal = require('sweetalert2')
const RegistrationForm = () => {
  useDocTitle("KeenAble | Always be Open!");

  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [emailError, setEmailError] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State to handle "Remember Me" checkbox

  const handleChange = (event) => {
    if (event.target.name === 'rememberMe') {
      setRememberMe(event.target.checked);
    } else {
      setValues({ ...values, [event.target.name]: event.target.value });
    }
  };
  const showSuccessMessage = () => {
    Swal.fire({
      title: 'You have successfully Registered in',
      icon: 'success',
      showConfirmButton: false, // Hide the OK button
      timer: 2000 // Automatically close after 2 seconds
    });
  }
  const showSuccessMessage1 = () => {
    Swal.fire({
      title: 'Enter Correct email or Password',
      icon: 'error',
      showConfirmButton: false, // Hide the OK button
      timer: 2000 // Automatically close after 2 seconds
    });
  }

  const showSuccessMessage2 = () => {
    Swal.fire({
      title: 'Password and Confirm Password does not match',
      icon: 'error',
      showConfirmButton: false, // Hide the OK button
      timer: 2000 // Automatically close after 2 seconds
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if password and confirm password match
    if (values.password !== values.confirmPassword) {
    showSuccessMessage2()
      return;
    }

    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(values.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    axios.post('http://localhost:9000/registrationform', values)
      .then(res => {
        showSuccessMessage()
        // if (rememberMe) {
        //   // Remember the password logic
        //   // You can store the password in localStorage or cookies here
        // }
        navigate('/login');
      })
      .catch(err => showSuccessMessage1());
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <br />
      <br />
      
      <h2 className="my-2 text-center text-3xl text-black uppercase font-bold">
        Please Registration First
      </h2>
      <br/>
      <br/>
    
      <div className="mx-auto max-w-md rounded-xl bg-gray-50 shadow-lg dark:bg-slate-800 md:max-w-2xl">
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4 pl-5 pr-5">
            <br/>

            <label className=" block text-gray-700 text-l font-bold mb-2" htmlFor="name">
              Full Name <span className='text-xl text-red-500'>*</span>
            </label>
            <input
              className="pl-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name" title='You can enter only text'
              type="text" required
              placeholder="Your Full Name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 pl-5 pr-5">
            <label className=" block text-gray-700 text-l font-bold mb-2" htmlFor="email">
              Email Address <span className='text-xl text-red-500'>*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email2" required
              type="email" title='You can enter email id only in this format xyz@example.com'
              placeholder="Your Email Address"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 pl-5 pr-5">
            <label className="block text-gray-700 text-l font-bold mb-2" htmlFor="pass">
              Password <span className='text-xl text-red-500'>*</span>
            </label>
            <div className="relative" >
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pass" title='You can enter text , number and spacial character like @ as well'
                type={showPassword ? "text" : "password"} required
                placeholder="Enter your password"
                name="password"
                onChange={handleChange}
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10V7a4 4 0 118 0v3m0 4v3a4 4 0 11-8 0v-3" />
                  </svg>
                )}
              </span>
            </div>
          </div>
          <div className="mb-4 pl-5 pr-5">
            <label className="block text-gray-700 text-l font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password <span className='text-xl text-red-500'>*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword" title='You can enter text , number and spacial character like @ as well'
              type="password" required
              placeholder="Confirm your password"
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>
        <br/>
        
        <div className="mb-4 pl-5 pr-5">
            <label className="block text-gray-700 text-l font-bold mb-2">
              <input
                type="checkbox"
                name="rememberMe"
                className="mr-2 leading-tight"
                checked={rememberMe}
                onChange={handleChange}
              />
              <span className="text-sm">
                Remember Me
              </span>
            </label>
          </div>
      
          <div className="flex justify-center items-center h-full">
            <button
              className="flex item-center bg-green-600 hover:bg-green-900 text-white font-bold py-3 px-5 rounded text-xl"
              type="submit"
            >
              Register
            </button>
            <a
              className="ml-4 text-blue-600 hover:underline"
              href="/login"
            >
              Already have an account? Login here
            </a>
          </div>
        </form>
        <br/>
        <br/>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default RegistrationForm;