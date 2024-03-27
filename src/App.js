import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import Services from './pages/Services';
import Career from './pages/Career'
import Intro from './pages/Intro';
import ApplicationForm from './pages/Experienceform'
import Internform from './pages/Internform'
import LoginForm from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import RegistrationForm from './pages/Registration';
import LoginForm1 from './pages/Login1';
import RegistrationForm1 from './pages/Registration1';




function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("KeenAble | Always be Open!");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<Intro />} /> 
            <Route path="/apply" element={<Internform />} /> 
            <Route path='/register' element={<RegistrationForm/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/login1' element={<LoginForm1/>}/>
            <Route path='/register1' element={<RegistrationForm1/>}/>
            <Route path="/applyforexperiencerole" element={<ApplicationForm />} /> 
            <Route path="/resetPassword" element={<ForgotPassword />} /> 
          
          
            

          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;