import React, { useState,useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar/NavBar';
import { useDocTitle } from '../components/CustomHook';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';


const LoginForm1 = () => {
  useDocTitle("KeenAble | Always be Open!");
  const navigate = useNavigate();
 const [isLoggedIn, setaIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login1'); //  Navigate to login page if not logged in
    }
  }, [isLoggedIn,navigate])
  

  const [values, setValues] = useState({
    email: '',
    password: ''
  });


  const [error, setError] = useState('');

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:9000/login', values)
    .then(res => {
       
      alert("You Have Successfully Logged In! Please click Ok to apply !!!");
      localStorage.setItem('isLoggedIn','true');
      setaIsLoggedIn(true);
      console.log(localStorage.getItem(isLoggedIn));

      navigate('/applyforexperiencerole', { state: { userName:values.email } }); // Pass username as state
      

    })
    
      .catch(err => {
        if (err.response && err.response.status === 401) {
          alert('Invalid email or password. Please try again.');
        } else {
          setError('An error occurred. Please try again later.');
        }
      });
      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);

  };
  const handleForgotPassword = () => {
    // Redirect to the forgot password page
    navigate('/resetPassword');
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <br />
      <br />
  
      <h2 className="my-2 text-center text-3xl text-black uppercase font-bold">
        Please Login Here
      </h2>
      <br/>
      <br />
      <div className="mx-auto max-w-max rounded-xl bg-gray-100 shadow-lg dark:bg-slate-900 md:max-w-2xl">
        <form className="mt-4" onSubmit={handleSubmit}>

          <div className="mb-4 pl-5 pr-5">
            <br/>
            <label className="block text-gray-700 text-l font-bold mb-4" htmlFor="email">
              Email Address <span className='text-xl text-red-500'>*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email2" required
              type="email"
              placeholder="Your Email Address"
              name="email" title='You can enter email id only in this format xyz@example.com'
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 pl-5 pr-5">
            <label className="block text-gray-700 text-l font-bold mb-2" htmlFor="phoneNumber">
              Password <span className='text-xl text-red-500'>*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="pass" title='You can enter text , number and spacial character like @ as well'
              type="password"
              placeholder="Enter your password"
              name="password" required
              
              onChange={handleChange}
            />
          </div>

          {error && <div className="text-red-500">{error}</div>}

          <div className="flex justify-center items-center h-full ">
            <button
              className="flex item-center bg-green-600 hover:bg-green-900 text-white font-bold py-3 px-5 rounded text-xl"
              type="submit"
            >
              Log In
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <a
              className="ml-4 text-blue-600 hover:underline "
              href="/register1"
            >
              If don't have account ? please click here to registers
            </a>
            <button
              className="ml-4 text-blue-600 hover:underline "
              type="button"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
     
  
      <Footer />
    </>
  );
};

export default LoginForm1;
