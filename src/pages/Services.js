import React from 'react';
import img from '../images/Architects.jpg'; 
import img2 from '../images/deployement.jpg';
import img4 from '../images/software-architecture.png';
import img3 from '../images/hosting.svg';
// import img4 from '../images/consultation.svg';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const Services = () => {

    return (
        <>
        <div>
            <NavBar/>
        </div>
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-black-900 uppercase font-bold">services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-red-500'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-black-900">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img} />
                   <br/> <h2 className="font-semibold my-4 text-2xl text-center">SOFTWARE ADVISORY & ARCHITECTING SERVICES</h2>
                    <p className="text-l font-medium">
                                    Over the years, we have come across many situations where a design mistake has already been made when we are called. It is a very tough situation for a customer and we can totally empathise with it. Should the customer go ahead knowing that there is an issue due to cost, time and other considerations; or should start afresh. There is no easy answer here. But what we have realised is that the software design and architecture should be open and have a building blocks approach to make it last. Our areas of interest here are

                                    <br/>
                                    <br/>
                                    <ul>
                                       <li>Software Design Workshops</li>
                                       <li>Producing Design HLD and LLD</li>
                                       <li>Application Modernisation Workshops</li>
                                       <li>Design Review and Modifications </li>
                                    </ul>   
                                    </p>

                                  
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                   <br/> <h2 className="font-semibold my-4 text-2xl text-center">Digital Architecture Solutions: Crafting and Launching Your Software</h2>
                    <p className="text-l font-medium">
                    After finalizing the software design, our adept teams step in to seamlessly implement deployment. Whether it's deploying our own designs or those crafted by others, we excel in ensuring smooth transitions. Our expertise in this realm encompasses a wide spectrum, ensuring robust delivery across all fronts.
                                    <br/>
                                    <br/>
                                    <ul>
                                        <li>Linux OS and associated services</li>
                                        <li>Cloud and Cloud Orchestration</li>
                                        <li>Containers and Application Modernisation</li>
                                        <li>Open Source DBs and NoSQL DBs</li>
                                        <li>Process Automation on Open Source</li>
                                        <li>Red Hat Middleware product suite</li>
                                        <li>Using Open Source tools to set up alerting and mo monitoring with dashboards</li>
                                        <li>Bespoke software development around Open Source software</li>
                                    </ul>
                                    </p>
                                </div>
                            </div>


                            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                   <br/> <h2 className="font-semibold my-4 text-2xl text-center">SOFTWARE BUILD & DEPLOYMENT SERVICES</h2>
                    <p className="text-l font-medium">
                                    Once the software design is ready, we have teams to help customers deploy them. We also undertake deployment of software for design done by others. We work equally Our areas of interest and delivery in this area span across.
                                    <br/>
                                    <br/>
                                    <ul>
                                        <li>Linux OS and associated services</li>
                                        <li>Cloud and Cloud Orchestration</li>
                                        <li>Containers and Application Modernisation</li>
                                        <li>Open Source DBs and NoSQL DBs</li>
                                        <li>Process Automation on Open Source</li>
                                        <li>Red Hat Middleware product suite</li>
                                        <li>Using Open Source tools to set up alerting and mo monitoring with dashboards</li>
                                        <li>Bespoke software development around Open Source software</li>
                                    </ul>
                                    </p>
                                </div>
                            </div>


                            <div className="flex item-justify bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                <div className="m-2 text-justify text-sm">
                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                    <h2 className="font-semibold my-4 text-2xl text-center ">MONITORING & SUPPORT SERVICES </h2>
                    <p className="text-l font-medium">

                                    Customers might need additional support after deployments or even monitoring of their critical systems to maintain uptime. There might be various teams that need to be aware of actions required to be taken if any component is not functioning. We provide these services to our customers. Some of the areas we address are

                                    <br/>
                                    <br/>

                                    <ul>
                                        <li>24X7 monitoring</li>
                                        <li>Creating dynamic information dashboards</li>
                                        <li>Rule based monitoring</li>
                                        <li>Automating monitoring workflows</li>
                                        <li>Manpower support for operations</li>
                                        <li>Day 2 support and CR handling</li>
                                        <li>Creating Policies for monitoring</li>
                                    </ul>
                                    </p>
                                </div>
                            </div>

                                         
                        </div>
                    </div>
            </section>

        </div>
        <Footer/>
    </>
    )
}

export default Services;