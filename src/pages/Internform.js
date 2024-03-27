import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar/NavBar';
import { useDocTitle } from '../components/CustomHook';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const InternForm = () => {

  useDocTitle("KeenAble | Always be Open!");

  const location = useLocation();
  const [userName, setUserName] = useState('');
  
  const navigate = useNavigate();
 
  const [values,setValues]=useState({
    full_name: '',
    email: '',
    mobileNo: '',
    resumePath: '',
    education: '',
    skills: '',
    additionalInformation: ''
})

useEffect(() => {
  if (location.state && location.state.userName) {
    setUserName(location.state.userName);
  }
}, [location.state]);


const handleChange =(event) => {
  setValues({...values , [event.target.name]:event.target.value})
}



  const handleLogout = () => {
    // Clear user authentication tokens or session data
    // Redirect the user to the login page
    // For example:
    navigate('/login');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:9000/internDetails',values)
    .then(res=> alert("Application Sent Successfully!!!"))
    .catch(err => alert(err));

    setTimeout(() => {
      window.location.reload();
    }, 1000);
    
  };

  return (
    <>
    <div>
    <NavBar />
  </div>
  <br/>
  <br/>

  <div className="pl-auto pr-auto mx-auto mt-10 px-10">
  <div className="text-right font-bold block text-gray-700 text-sm font-bold mb-0 bg-gray-200 p-4 rounded-lg text-xl">
    <h1>Welcome, <br/>{userName}!</h1>
    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2" onClick={handleLogout}>
      Logout
    </button>
  </div>
</div>
 <br/>
 <br/>

<h2 className="my-2 text-center text-3xl text-black uppercase font-bold">
  Intern Application Form
  
</h2>
   <br/>
       
    <div className="mx-auto max-w-md rounded-xl bg-gray-50 shadow-lg dark:bg-slate-800 md:max-w-2xl">
      <br/>
      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4 pl-5 pr-5">
          <label className="block text-gray-700 text-l font-bold mb-2" htmlFor="name">
            Full Name <span className='text-xl text-red-500'>*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" required
            type="text"  title='You can enter only text'
            placeholder="Your Full Name"
            name="full_name"
           
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 pl-5 pr-5">
          <label className="block text-gray-700 text-l font-bold mb-2" htmlFor="email">
            Email Address <span className='text-xl text-red-500'>*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email2" required
            type="email"
            placeholder="Your Email Address"
            name="email" title='You can enter email id only in this format xyz@example.com'
           
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 pl-5 pr-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number <span className='text-xl text-red-500'>*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mobileNo" required
            type="tel"
            placeholder="Your Phone Number"
            name="mobileNo" title='You can enter number in correct format like +911234567890'
          
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 pl-5 pr-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
             Enter Your Resume link of Google Drive <span className='text-xl text-red-500'>*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="resume" required
            type="text"
            name="resumePath" placeholder='Enter Resume Link'
            onChange={handleChange} title='Plese fill only google Drive link of resume'
          />
        </div>
        <div className="mb-4 pl-5 pr-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="education">
            Education <span className='text-xl text-red-500'>*</span>
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="education" required
            placeholder="Your Education Details"
            name="education" title='You can enter only text'
           
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 pl-5 pr-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">
            Skills <span className='text-xl text-red-500'>*</span>
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="skills" required
            placeholder="Your Skills"
            name="skills" title='You can enter only text' 
          
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 pl-5 pr-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="additionalInfo">
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

export default InternForm;