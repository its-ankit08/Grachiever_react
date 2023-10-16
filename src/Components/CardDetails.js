import React, { useState } from 'react';
import google from '../images/Flipcard/Google.png';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { BsBookmark, BsBookmarkCheckFill } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiCircleChevRight } from "react-icons/ci";
import { BiBookAdd } from "react-icons/bi";
import img from "../images/Flipcard/video.png";
import { Link } from 'react-router-dom';
import { FiExternalLink } from "react-icons/fi";
import FlipCard from './FlipCard';
import user from "../images/Flipcard/user.png";



const CardDetails = () => {
    const [icon, setIcon] = useState("check");
    const changeIcon = (state) => {
        if (state === "check") {
            return "unCheck";
        }
        return "check";
    };
    return (

        <section className='bg-sky-100 w-full '>
            <div className="flex md:flex-row  pr-2  sm:p-20 flex-col-reverse">
                {/* left box */}
                <div className='flex flex-col w-full'>
                    <div className='bg-white w-full rounded-lg m-8 max-w-[410px] max-h-[660px] p-5'>
                        <img src={img} alt="" />
                        <div className="flex justify-center flex-col mt-2">
                            <Link className="flex w-full" to='/CardDetails'>
                                <button type="button" className="flex justify-center gap-2 ml-2 w-full text-white bg-sky-400 hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-sky-500 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Go to class <FiExternalLink /></button></Link>

                            <div className='flex font-sans cursor-pointer ml-4 m-3 flex-row gap-x-2'> <AiOutlineDollarCircle className='text-black text-xl mt-1' /> <p className='text-black mt-1'>Independent</p> <BsFillQuestionCircleFill className='text-black mt-1.5' />
                            </div>
                            <hr />
                            <div className='flex font-sans cursor-pointer ml-4 m-3 flex-row gap-x-2'> <AiOutlineDollarCircle className='text-black text-xl mt-1' /> <p className='text-black mt-1'>Free Certificate</p>
                            </div>
                            <hr />
                            <div className='flex font-sans cursor-pointer ml-4 m-3 flex-row gap-x-2'> <AiOutlineDollarCircle className='text-black text-xl mt-1' /> <p className='text-black mt-1'>English</p>
                            </div>
                            <hr />
                            <div className='flex font-sans cursor-pointer ml-4 m-3 flex-row gap-x-2'> <AiOutlineDollarCircle className='text-black text-xl mt-1' /> <p className='text-black mt-1'>On-Demand</p>
                            </div>
                            <hr />
                            <div className='flex font-sans cursor-pointer ml-4 m-3 flex-row gap-x-2'> <AiOutlineDollarCircle className='text-black text-xl mt-1' /> <p className='text-black mt-1'>Beginner</p>
                            </div>
                            <hr />
                            <div className='flex font-sans cursor-pointer ml-4 m-3 flex-row gap-x-2'> <AiOutlineDollarCircle className='text-black text-xl mt-1' /> <p className='text-black mt-1'>Share this course</p>
                            </div>
                            <hr />
                            <div className='flex font-sans cursor-pointer ml-4 m-3 flex-row gap-x-2'> <AiOutlineDollarCircle className='text-black text-xl mt-1' /> <p className='text-black mt-1'>Certificate Available</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-full rounded-lg m-8 max-w-[410px] flex flex-col items-center p-1'>
                        <h1 className='text-black text-xl m-2 font-bold '>Reviews</h1>
                        <div className='flex flex-row  gap-2' > <div className=" text-4xl text-yellow-400" >&#9733; &#9733; &#9733; &#9733; &#9734;</div> <p className='text-black text-sm mt-3'>12k reviews</p></div>


                        <div className='flex flex-col sm:flex-row mt-5'>
                            {/* img */}
                            <div className=' flex justify-center flex-col items-center p-3'>
                                <img className='rounded-full bg-slate-400 w-12 h-12 flex justify-center items-center' src={user} alt="" />
                                <h2 className='font-bold'>User_Name</h2>
                                <h2 className='text-sm'>@User_id</h2>
                            </div>
                            {/* comments */}
                            <div className='w-full p-3'>
                                <div className='flex flex-row  gap-2' > <div className=" text-2xl text-yellow-400" >&#9733; &#9733; &#9733; &#9733; &#9734;</div> <p className='text-gray-500 text-base mt-1.5'>2 months</p></div>
                                <p className='text-xs sm:text-sm'>I never thought that I will get this quality course for free. I was able to learn something new that I didn't know previously and I recommend learning and gaining basic knowledge about google data analytics in this rapidly growing digital marketing era.</p>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row mt-5'>
                            {/* img */}
                            <div className=' flex justify-center flex-col items-center p-3'>
                                <img className='rounded-full bg-slate-400 w-12 h-12 flex justify-center items-center' src={user} alt="" />
                                <h2 className='font-bold'>User_Name</h2>
                                <h2 className='text-sm'>@User_id</h2>
                            </div>
                            {/* comments */}
                            <div className='w-full p-3'>
                                <div className='flex flex-row  gap-2' > <div className=" text-2xl text-yellow-400" >&#9733; &#9733; &#9733; &#9733; &#9734;</div> <p className='text-gray-500 text-base mt-1.5'>2 months</p></div>
                                <p className='text-xs sm:text-sm'>I never thought that I will get this quality course for free. I was able to learn something new that I didn't know previously and I recommend learning and gaining basic knowledge about google data analytics in this rapidly growing digital marketing era.</p>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row mt-5'>
                            {/* img */}
                            <div className=' flex justify-center flex-col items-center p-3'>
                                <img className='rounded-full bg-slate-400 w-12 h-12 flex justify-center items-center' src={user} alt="" />
                                <h2 className='font-bold'>User_Name</h2>
                                <h2 className='text-sm'>@User_id</h2>
                            </div>
                            {/* comments */}
                            <div className='w-full p-3'>
                                <div className='flex flex-row  gap-2' > <div className=" text-2xl text-yellow-400" >&#9733; &#9733; &#9733; &#9733; &#9734;</div> <p className='text-gray-500 text-base mt-1.5'>2 months</p></div>
                                <p className='text-xs sm:text-sm'>I never thought that I will get this quality course for free. I was able to learn something new that I didn't know previously and I recommend learning and gaining basic knowledge about google data analytics in this rapidly growing digital marketing era.</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>

                {/* right box */}
                <div className='flex flex-col'>
                    <div className='bg-white w-full rounded-lg m-8 p-10'>
                        <p className='text-gray-500 text-sm '>Business / Marketing / Digital Marketing / Google Analytics</p>
                        <img className='h-8 mt-2' src={google} alt="" />
                        <h1 className='text-black font-bold font-sans text-2xl sm:text-4xl'>Google Analytics for Beginners  </h1>
                        <h3 className=' text-black mt-2 flex flex-row items-baseline gap-2'>Google via Independent Help <BsFillQuestionCircleFill className='text-black' /> </h3>
                        <div className='flex flex-row  gap-2' > <div className=" text-4xl text-yellow-400" >&#9733; &#9733; &#9733; &#9733; &#9734;</div> <p className='text-black text-sm mt-3'>12k reviews</p></div>
                        {/* features */}
                        <div className='flex flex-row items-center flex-wrap mt-2 gap-x-2'>
                            <button className=" flex flex-row text-black text-2xl mb-2" onClick={() => setIcon((old) => changeIcon(old))}>{icon === "check" ? <BsBookmark /> : <BsBookmarkCheckFill />} <p className='text-black text-sm mt-1'>7.2k</p> </button>

                            <button type="button" className=" flex  flex-row gap-x-1 text-sky-700 hover:text-white border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-500 dark:focus:ring-sky-500"><BiBookAdd className='text-xl' />Add to list</button>

                            <button type="button" className=" flex  flex-row gap-x-1 text-sky-700 hover:text-white border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-500 dark:focus:ring-sky-500"> <CiCircleChevRight className='text-xl' />Mark complete</button>

                            <button type="button" className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800">Write review</button>
                        </div>
                    </div>

                    <div className='bg-white w-full rounded-lg mt-1 m-8 p-10'>
                        <h1 className='text-black text-xl sm:text-2xl m-1 font-bold'>Overview</h1>
                        <p className='mt-2 font-sans'>Google Analytics for Beginners shows new users how to create an account, implement tracking code, and set up data filters. You'll learn how to navigate the Google Analytics interface and reports, and set up dashboards and shortcuts. The course will also demonstrate how to analyze basic Audience, Acquisition, and Behavior reports, and set up goals and campaign tracking. <br />
                            This course covers Google Analytics primarily for measuring website traffic. To learn about new capabilities that bring app and web analytics together, visit Analytics Help.</p>
                        <h1 className='text-black text-2xl mt-5 font-bold'>Syllabus</h1>
                        <h1 className='text-black text-base font-bold mt-3'>Unit 1: Introducing Google Analytics</h1>
                        <p className='mt-4 font-sans'>
                            Lesson 1: Why digital analytics? <br />
                            Lesson 2: How Google Analytics works<br />
                            Lesson 3: Google Analytics setup<br />
                            Lesson 4: How to set up views with filters </p>
                        <h1 className='text-black text-base font-bold mt-3'>Unit 2: Introducing Google Analytics</h1>
                        <p className='mt-4 font-sans'>
                            Lesson 1: Why digital analytics? <br />
                            Lesson 2: How Google Analytics works<br />
                            Lesson 3: Google Analytics setup<br />
                            Lesson 4: How to set up views with filters </p>
                        <h1 className='text-black text-base font-bold mt-3'>Unit 3: Introducing Google Analytics</h1>
                        <p className='mt-4 font-sans'>
                            Lesson 1: Why digital analytics? <br />
                            Lesson 2: How Google Analytics works<br />
                            Lesson 3: Google Analytics setup<br />
                            Lesson 4: How to set up views with filters </p>
                        <h1 className='text-black text-base font-bold mt-3'>Unit 4: Introducing Google Analytics</h1>
                        <p className='mt-4 font-sans'>
                            Lesson 1: Why digital analytics? <br />
                            Lesson 2: How Google Analytics works<br />
                            Lesson 3: Google Analytics setup<br />
                            Lesson 4: How to set up views with filters </p>
                        <h1 className='text-black text-base font-bold mt-3'>Unit 5: Introducing Google Analytics</h1>
                        <p className='mt-4 font-sans'>
                            Lesson 1: Why digital analytics? <br />
                            Lesson 2: How Google Analytics works<br />
                            Lesson 3: Google Analytics setup<br />
                            Lesson 4: How to set up views with filters </p>

                    </div>
                    <div className='bg-white w-full rounded-lg mt-1 m-8 p-4 gap-4 flex flex-col '>
                        <h1 className='text-black m-3 text-xl sm:text-2xl  font-bold flex flex-nowrap '>Related course</h1>
                        <div className=' gap-4 flex flex-wrap'>
                            <FlipCard />
                            <FlipCard />
                            <FlipCard />
                            <FlipCard />
                            <FlipCard />
                            <FlipCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardDetails;
