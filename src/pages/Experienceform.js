import React, { useState, useEffect } from 'react';
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import { useLocation} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const [userName, setUserName] = useState(location.state?.userName || '');

  const [values, setValues] = useState({
    name: '',
    email: '',
    mobileNo: '',
    resumePath: '',
    education: '',
    skills: '',
    additionalInformation: '',
    companyName: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
  });
  
  console.log("Experience page loaded,isLoggedin: ",isLoggedIn);

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post('http://localhost:9000/experienceDetails', values)
      .then(res => alert('Application sent Successfully!!!'))
      .catch(err => alert('This email id is already Registered'));

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };


  // Redirect to login page if not logged in
//  useEffect(() => {
//   if (!isLoggedIn) {
//     navigate('/login1')
    
//   }
//   }, [isLoggedIn,navigate]);

useEffect(() => {
  if (!isLoggedIn) {
    navigate('/login1')
    
  }
  }, [isLoggedIn,navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear login state
    setIsLoggedIn(true); // Update isLoggedIn state
    navigate('/login1'); // Redirect to login page
  };

  useEffect(() => {
    if (location.state?.userName) {
      setUserName(location.state.userName);
    }
  }, []);

  useEffect(() => {
    // Check if location.state exists and has userName property
    if (location.state?.userName) {
      setUserName(location.state.userName);
    }
  }, []);

 
  // Cleanup function to handle browser refresh or component unmount
  let isUnmounting = false; // Declare a variable to track unmounting

  useEffect(() => {
    const handleCleanup = () => {
      if (!isUnmounting) {
        navigate('/login1');
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
       
      }
    };

    window.addEventListener('beforeunload', handleCleanup);
    return () => {
      isUnmounting = true;
      window.removeEventListener('beforeunload', handleCleanup);
    };
  }, []);


  return (
    <>
      <div>
        <NavBar />
      </div>
      <br />
      <br />
      <br />
      <div className="pl-auto pr-auto mx-auto mt-10 px-10">
  <div className="text-right font-bold block text-gray-700 text-sm font-bold mb-0 bg-gray-200 p-4 rounded-lg text-xl">
 
    <h1>Welcome,<br/>{userName || ""}!</h1>
    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={handleLogout}>
      Logout
    </button>
  </div>

</div>

<br/>
<br/>

      <h2 className="my-2 text-center text-3xl text-black uppercase font-bold">
          Experience Application Form
        </h2>
        <br/>
        <br/>
      <div className="bg-blue-500 mx-auto max-w-md rounded-xl bg-gray-50 shadow-lg dark:bg-slate-800 md:max-w-2xl">
        <br/>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4 pl-5 pr-5">
            <label
              className="block text-gray-700 text-l font-bold mb-2"
              htmlFor="name"
            >
              Full Name <span className='text-xl text-red-500'>*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name" required
              type="text" 
              placeholder="Your Full Name"
              name="full_name" title='You can enter only text'
              
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 pl-5 pr-5">
            <label
              className="block text-gray-700 text-l font-bold mb-2"
              htmlFor="email"
            >
              Email Address <span className='text-xl text-red-500'>*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" title='You can enter email id only in this format xyz@example.com'
              type="email" required
              placeholder="Your Email Address"
              name="email"
      
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 pl-5 pr-5">
            <label
              className="block text-gray-700 text-l font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number <span className='text-xl text-red-500'>*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="tel" required
              placeholder="Your Phone Number"
              name="mobileNo"
              
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 pl-5 pr-5">
            <label
              className="block text-gray-700 text-l font-bold mb-2"
              htmlFor="resume"
            >
              Enter Your Resume link of Google Drive <span className='text-xl text-red-500'>*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="resume"
              type="text" required
              name="resumePath" placeholder="Enter Resume Link"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 pl-5 pr-5">
            <label
              className="block text-gray-700 text-l font-bold mb-2"
              htmlFor="education"
            >
              Education <span className='text-xl text-red-500'>*</span>
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="education"
              placeholder="Your Education Details"
              name="education" required title='You can enter only text'
              
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 pl-5 pr-5">
            <label
              className="block text-gray-700 text-l font-bold mb-2"
              htmlFor="skills"
            >
              Skills <span className='text-xl text-red-500'>*</span>
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="skills" title='You can enter only text'
              placeholder="Your Skills"
              name="skills" required
              
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 pl-5 pr-5">
            <label
              className="block text-gray-700 text-l font-bold mb-2"
              htmlFor="additionalInfo"
            >
              Additional Information
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="additionalInfo"
              placeholder="Any Additional Information"
              name="additionalInformation" title='You can enter only text'
             
              onChange={handleChange}
            />
          </div>
          

          <h1>
            <strong className='pl-5 pr-5 text-l'>Work Experience</strong>
          </h1>
          <br />

          <div className="mb-4 pl-5 pr-5">
            <label
              className="block text-gray-700 text-l font-bold mb-2"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyName"
              type="text"
              placeholder="Company Name"
              name="companyName"
              
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 pl-5 pr-5">
            <label
              className="block text-gray-700 text-l font-bold mb-2"
              htmlFor="position"
            >
              Position
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="position"
              type="text"
              placeholder="Position"
              name="position"
              
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 pl-5 pr-5">
            <label
              className="block text-gray-700 text-l font-bold mb-2"
              htmlFor="startDate"
            >
              Start Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="startDate"
              type="date"
              placeholder="Start Date"
              name="startDate"
              
              onChange={handleChange}
            />
            
          </div>
          <div className="mb-4 pl-5 pr-5">
            <label
              className="block text-gray-700 text-l font-bold mb-2"
              htmlFor="endDate"
            >
              End Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="endDate"
              type="date"
              placeholder="End Date"
              name="endDate"
              
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 pl-5 pr-5">
            <label
              className="block text-gray-700 text-l font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Description"
              name="description"
              
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit Application
        </button>
        </div>
        <br/>
        <br/>

        </form>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default ApplicationForm; 