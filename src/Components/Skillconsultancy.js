import React from 'react';
import first from '../images/Skill_Consultancy/first.png';
import second from '../images/Skill_Consultancy/second.png';
import grachiever from '../images/Skill_Consultancy/grachiever.png';
import xicon from '../images/Skill_Consultancy/xicon.png';
import vector from '../images/Skill_Consultancy/Vector.png';
function consultancy() {
    return (
        <>
            {/* min-h-min */}
            <section className="p-0 md:p-0 lg:p-0 mt-12 md:mt-28 mx-2 md:mx-5"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2" >
                    <div className="mt-10 md:mt-20 md:w-[100%] bg-[#1b1d38] rounded-3xl order-2 md:order-1">
                        <h1 className="text-xl sm:text-3xl md:text-6xl font-bold text-white text-left md:px-24 p-12 sm:mt-8">Tailored Skill <br /> Consultancy for <br /> <span class="text-xl sm:text-3xl md:text-6xl text-[#00c5ff]">Future Success</span> </h1>
                    </div>
                    {/* <!--Graph Section*/}
                    <div className="mt-3 md:mt-0 md:order-2 order-1">
                        <img src={first} className='w-[100%] mt-10 rounded-br-3xl z-50 md:-translate-x-20' />
                    </div>
                </div>
                {/* h-auto max-w-full */}
            </section>
            {/* --------------------------------second-part------------------------- */}
            <section className="p-0 sm:p-0 md:p-0 lg:p-0 mt-5"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className='text-center mt-0 md:order-1 order-2'>
                    <button className="p-2 rounded-xl bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2  font-bold border-[#349fcf] px-8 text-lg mt-2"
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">Take the Next Step</button>
                    <p className="text-base sm:text-lg p-10 text-left">
                        In today's fast-paced and competitive job market, it's crucial to stay ahead of the curve. Employers are constantly seeking candidates with the latest skills and abilities that align with industry trends. At Grachiever, we recognize the challenges professionals face in keeping up with these changes. That's why we've developed Skill Graph – an innovative tool designed to provide real-time insights and recommendations for career growth.
                    </p>
                </div>
            </section>
            {/* -----------------------------------image-part----------------------------- */}
            <section className="p-0 sm:p-0 md:p-0 lg:p-0 mt-0"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className="mt-2 md:mt-0">
                    <img src={second} className='md:w-[65%] m-auto' />
                </div>
                {/* h-auto max-w-full p-10 ml-20 */}
            </section>
            {/* ----------------------------third-part------------------------------ */}
            <section className="p-0 sm:p-0 md:p-0 lg:p-0 mt-5"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className=' mt-0'
                >
                    <h1 className="text-3xl font-bold text-center p-3 mt-2">How Skill Consultancy Works</h1>
                </div>
                {/* --------------------- */}
                <div className=" grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 p-5 md:ml-20 mt" >
                    {/* -----box1---- */}
                    <div className=" p-1 w-auto md:w-[80%] shadow-lg hover:shadow-gray-500  min-w-min bg-[#E0EBFF]  rounded-3xl"
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <p className="text-base sm:text-lg p-5 md:p-10 ">
                            <label id='box' className='font-bold text-lg'> Assessment:</label> We begin by conducting a comprehensive assessment of your current skills, experiences, and career aspirations. This helps us gain a deep understanding of your strengths and areas for development.

                        </p>
                    </div>

                    {/* <!--box2*/} 
                    <div className=" p-1 w-auto  md:w-[80%] shadow-lg hover:shadow-gray-500  min-w-min bg-[#E0EBFF] mt-5 md:mt-0 rounded-3xl"
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"  >
                        <p className="text-base sm:text-lg p-5 md:p-10 ">
                            <label id='box' className='font-bold text-lg'>Personalized Guidance:</label> Based on the assessment, our consultants will provide personalized guidance tailored to your specific needs. We'll identify the most relevant and in-demand skills for your desired career path.
                        </p>
                    </div>
                </div>

                <div className=" grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 p-5 md:ml-20" >
                    {/* -----box1---- */}
                    <div className=" p-1 w-auto md:w-[80%] shadow-lg hover:shadow-gray-500  min-w-min bg-[#E0EBFF]  rounded-3xl"
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" >
                        <p className="text-base sm:text-lg p-5 md:p-10 ">
                            <label id='box' className='font-bold text-lg'> Skill Development :</label> Together, we'll create a customized skill development plan that outlines the necessary steps to enhance your skill set. This plan will focus on acquiring new skills, improving existing ones, and staying updated with industry trends.
                        </p>
                    </div>

                    {/* <!--box2*/} 
                    <div className=" p-1 w-auto md:w-[80%] shadow-lg hover:shadow-gray-500  min-w-min bg-[#E0EBFF]  rounded-3xl mt-5 md:mt-0"
                        data-aos="zoom-in"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000" >
                        <p className="text-base sm:text-lg p-5 md:p-10 ">
                            <label id='box' className='font-bold text-lg'>Ongoing Support:</label> Our consultants will be there every step of the way, offering ongoing support and advice as you progress through your skill development journey. We'll provide regular check-ins, monitor your progress, and make adjustments to the plan as needed.
                        </p>
                    </div>
                </div>
            </section>
            {/* ----------------------------forthsectin---------------- */}
            <section className="p-0 sm:p-0 md:p-5 lg:p-10 bg-[#E0EBFF] mb-5 rounded-3xl mt-5 shadow-lg hover:shadow-gray-500 mx-5"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className="p-5 md:p-0 md:mx-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-2">
                    <div className="m-auto md:col-span-2">
                        <p className="text-base sm:text-lg text-left "><label id='box' className='font-bold text-lg' >Future-Proofing:</label>  Our goal is to make you  future-ready. We'll not only help you acquire the   skills you need today but also equip you with the tools and knowledge to adapt to future industry demands.</p>
                    </div>
                    <div className="m-auto mb-0 sm:p-0">
                        <button className="p-2 rounded-lg bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] px-8 md:px-16 text-lg mt-3"
                            data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">Join Now</button>
                    </div>
                </div>
            </section>
            {/* -----------------------------------------fifthsection------------------------- */}
            <section className="p-0 sm:p-0 md:p-3 lg:p-5  mb-5  mt-5 "
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                    <div className=' mt-0 flex-none'>
                        <h1 className="text-3xl font-bold text-center ">BENEFITS</h1>
                    </div>
                <div className=' mt-5 m-1 md:m-0 p-5 md:p-10 flex flex-wrap  border-[#1b1d38] border-8 '>
                    {/* ---------------------------- */}
                    <div className=' mt-1' >
                        <div className='flex'>
                            <div className="bg-[#00c5ff]  ml-2 p-5 w-10 h-10 rounded-full"> </div>
                            <div className="bg-[#1b1d38]  ml-2 p-2  text-sm w-44 md:w-60 h-10 font-bold rounded-md shadow-md md:text-lg text-white">Confidence and Clarity </div>
                        </div>
                        <p className='text-base sm:text-lg p-5 sm:ml-10'>
                            Skill consultancy provides clarity on your <br /> career path and boosts your confidence in <br /> pursuing the right skills.</p>
                    </div>
                    {/* ----------------------------- */}

                    {/* ---------------------------- */}
                    <div className='mt-0'>
                        <div className='flex'>
                            <div className="bg-[#00c5ff]  ml-2 p-5  w-10 h-10 rounded-full"> </div>
                            <div className="bg-[#1b1d38]  ml-2 p-2   text-sm w-44 md:w-60 h-10 font-bold rounded-md shadow-md md:text-lg text-white">Targeted Approach </div>
                        </div>
                        <p className='text-base sm:text-lg p-5 sm:ml-10'>

                            Our consultants have a deep <br /> understanding of industry trends and can <br /> guide you towards the most relevant and <br /> valuable skills.</p>
                    </div>
                    {/* ----------------------------- */}

                    {/* ---------------------------- */}
                    <div className='mt-0'>
                        <div className='flex'>
                            <div className="bg-[#00c5ff]  ml-2 p-5  w-10 h-10 rounded-full"> </div>
                            <div className="bg-[#1b1d38]  ml-2 p-2   text-sm w-44 md:w-60 h-10 font-bold rounded-md shadow-md md:text-lg text-white"> Time Efficiency </div>
                        </div>
                        <p className='text-base sm:text-lg p-5 sm:ml-10'>

                            With our expertise, you can avoid wasting <br /> time on irrelevant or outdated skills, <br /> focusing only on what matters most.</p>
                    </div>
                    {/* ----------------------------- */}

                    {/* ---------------------------- */}
                    <div className='mt-0'>
                        <div className='flex'>
                            <div className="bg-[#00c5ff]  ml-2 p-5  w-10 h-10 rounded-full"> </div>
                            <div className="bg-[#1b1d38]  ml-2 p-2   text-sm w-44 md:w-60 h-10 font-bold rounded-md shadow-md md:text-lg text-white"> Competitive Edge </div>
                        </div>
                        <p className='text-base sm:text-lg p-5 sm:ml-10'>
                            By staying ahead of the skills curve, you'll <br /> gain a competitive edge in the job market <br /> and stand out to potential employers.</p>
                    </div>
                    {/* ----------------------------- */}

                    {/* ---------------------------- */}
                    <div className='mt-0'>
                        <div className='flex'>
                            <div className="bg-[#00c5ff]  ml-2 p-5  w-10 h-10 rounded-full"> </div>
                            <div className="bg-[#1b1d38]  ml-2 p-2   text-sm w-44 md:w-60 h-10 font-bold rounded-md shadow-md md:text-lg text-white">Lifetime Learning </div>
                        </div>
                        <p className='text-base sm:text-lg p-5 sm:ml-10'>
                            The skills you acquire through our <br /> consultancy will benefit you throughout <br /> your career, ensuring long-term <br /> professional success.</p>
                    </div>
                    {/* ----------------------------- */}
                </div>
            </section>
            {/* --------------------------------------last-section------------------------------- */}
            <section className="p-0 sm:p-0 md:p-5 lg:p-10 bg-[#1b1d38] mb-5 rounded-3xl mx-5"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className=" m-2 mx-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5">
                    <div className="m-auto  mb-0 ">
                        <button className="p-2 rounded-lg bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#349fcf] md:px-8 px-7 text-lg mt-5 md:mt-0"
                            data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">Get Started now!</button>
                    </div>
                    <div className="m-auto md:col-span-2  ml-30">
                        <p className="p-2 mt-5 md:mt-0 text-base sm:text-lg text-center  font-bold ">
                            Ready to take your skills to the next level? Contact us today to schedule a consultation with one of our skill experts. Together, we'll unlock your full potential and set you on the path to a thriving career.</p>
                    </div>
                </div>
            </section>

            {/* -----------------------------------------pricing-section------------------------ */}
            {/* <section className="p-0 sm:p-0 md:p-0 lg:p-0 mt-10 mb-10"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                <div className=' mt-5'>
                    <img src={grachiever} className=" w-40 m-auto" ></img>
                    <h1 className="text-3xl  text-center p-3 mt-2">Monthly Pricing Plans</h1>
                </div>
                <div className=' mt-5 shadow-2xl overflow-auto rounded-lg'>
                    <div className='scroll-x-auto'>
                
                        <table className="w-full p-10 text-center border-collapse   ...">
                        <tbody>
                                <tr className='h-10'>
                                    <td className='text-3xl  text-center'>Pricing Table</td>
                                    <td className='bg-[#eddc24] '></td>
                                    <td className='bg-[#359bdb] '></td>
                                    <td className='bg-[#1839cc] '></td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className='h-40'>
                                    <td></td>
                                    <td className='text-lg'>$ <span className='text-4xl'>19</span><br />per month</td>
                                    <td className='text-lg'>$ <span className='text-4xl'>29</span><br />per month</td>
                                    <td className='text-lg'>$ <span className='text-4xl'>99</span><br />per month</td>
                                </tr>
                            </tbody>
                            <tbody >
                                <tr className='h-20 '>
                                    <th className= " bg-[#f1f2eb] text-lg  border-slate-300 ...">Courses</th>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ...">Limited Access</td>
                                    <td className=" bg-[#f1f2eb] text-lg border-slate-300 ...">Unlimited Access</td>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ...">Unlimited Access</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr className='h-20 '>
                                    <th className=" text-lg border-slate-300 ...">Freelancing & Projects</th>
                                    <td className="text-lg border-slate-300 ..."><img src={xicon} className=" w-10 m-auto" /></td>
                                    <td className="text-lg border-slate-300 ...">Limited Projects</td>
                                    <td className="text-lg border-slate-300 ...">Unlimited Projects</td>
                                </tr>
                                <tr className='h-20'>
                                    <th className="bg-[#f1f2eb] text-lg border-slate-300 ...">Skill Graph</th>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ..."><img src={xicon} className=" w-10 m-auto" /></td>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ..."><img src={vector} className=" w-10 m-auto" /></td>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ..."><img src={vector} className=" w-10 m-auto " /> <span></span></td>
                                    
                                </tr>
                                <tr className='h-20'>
                                    <th className=" text-lg border-slate-300 ...">Consultancy</th>
                                    <td className="text-lg border-slate-300 ...">1 call/month</td>
                                    <td className="text-lg border-slate-300 ...">4 call/month</td>
                                    <td className=" text-lg border-slate-300 ...">Unlimited Calls</td>
                                </tr>

                                <tr className='h-20'>
                                    <th className="bg-[#f1f2eb] text-lg border-slate-300 ...">Tools & Resources</th>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ...">Basic</td>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ...">Uncommon</td>
                                    <td className="bg-[#f1f2eb] text-lg border-slate-300 ...">Premium</td>
                                </tr>

                                <tr className='h-20'>
                                    <th className=" text-lg border-slate-300 ...">Support</th>
                                    <td className=" text-lg border-slate-300 ...">Email</td>
                                    <td className=" text-lg border-slate-300 ...">Email + Chat</td>
                                    <td className="text-lg">Email, Chat, Phone</td>
                                </tr>

                                <tr className='h-20'>
                                    <th className=" text-lg border-slate-300 ..."></th>
                                    <td className=" text-lg border-slate-300 ..."> <button className="p-2 w-60 rounded-full bg-[#eddc24] font-bold hover:bg-white text-white hover:text-black border-2  px-8 text-lg mt-2"  data-aos="zoom-in"  data-aos-duration="3000">Get Started </button></td>
                                    <td className=" text-lg border-slate-300 ..."> <button className="p-2 w-60 rounded-full bg-[#359bdb] font-bold hover:bg-white text-white hover:text-black border-2  px-8 text-lg mt-2"  data-aos="zoom-in"  data-aos-duration="3000">Get Started </button></td>
                                    <td className="text-lg border-slate-300 ..."> <button className="p-2 w-60 rounded-full bg-[#1839cc] font-bold hover:bg-white text-white hover:text-black border-2  px-8 text-lg mt-2"  data-aos="zoom-in"  data-aos-duration="3000">Get Started </button></td>
                                   
                                </tr>
                            </tbody>
                        </table>


                    </div>


                </div>
            </section> */}
            {/* <section>
                <div id="generic_price_table" className="container mx-auto">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="price-heading clearfix">
                                <h1 className="text-4xl font-bold">Bootstrap Pricing Table</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="generic_content clearfix">
                                <div className="generic_head_price bg-gray-200 rounded-t-lg">
                                    <div className="generic_head_content">
                                        <div className="head_bg"></div>
                                        <div className="head">
                                            <span className="text-xl">Basic</span>
                                        </div>
                                    </div>
                                    <div className="generic_price_tag">
                                        <span className="price text-2xl">
                                            <span className="sign">$</span>
                                            <span className="currency">99</span>
                                            <span className="cent">.99</span>
                                            <span className="month">/MON</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="generic_feature_list">
                                    <ul>
                                        <li>
                                            <span className="text-lg">2GB</span> Bandwidth
                                        </li>
                                        <li>
                                            <span className="text-lg">150GB</span> Storage
                                        </li>
                                        <li>
                                            <span className="text-lg">12</span> Accounts
                                        </li>
                                        <li>
                                            <span className="text-lg">7</span> Host Domain
                                        </li>
                                        <li>
                                            <span className="text-lg">24/7</span> Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="generic_price_btn">
                                    <a className="px-4 py-2 bg-blue-500 text-white rounded" href="#">
                                        Sign up
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="generic_content active clearfix">
                                <div className="generic_head_price bg-gray-200 rounded-t-lg">
                                    <div className="generic_head_content">
                                        <div className="head_bg"></div>
                                        <div className="head">
                                            <span className="text-xl">Standard</span>
                                        </div>
                                    </div>
                                    <div className="generic_price_tag">
                                        <span className="price text-2xl">
                                            <span className="sign">$</span>
                                            <span className="currency">199</span>
                                            <span className="cent">.99</span>
                                            <span className="month">/MON</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="generic_feature_list">
                                    <ul>
                                        <li>
                                            <span className="text-lg">2GB</span> Bandwidth
                                        </li>
                                        <li>
                                            <span className="text-lg">150GB</span> Storage
                                        </li>
                                        <li>
                                            <span className="text-lg">12</span> Accounts
                                        </li>
                                        <li>
                                            <span className="text-lg">7</span> Host Domain
                                        </li>
                                        <li>
                                            <span className="text-lg">24/7</span> Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="generic_price_btn">
                                    <a className="px-4 py-2 bg-blue-500 text-white rounded" href="#">
                                        Sign up
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="generic_content clearfix">
                                <div className="generic_head_price bg-gray-200 rounded-t-lg">
                                    <div className="generic_head_content">
                                        <div className="head_bg"></div>
                                        <div className="head">
                                            <span className="text-xl">Unlimited</span>
                                        </div>
                                    </div>
                                    <div className="generic_price_tag">
                                        <span className="price text-2xl">
                                            <span className="sign">$</span>
                                            <span className="currency">299</span>
                                            <span className="cent">.99</span>
                                            <span className="month">/MON</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="generic_feature_list">
                                    <ul>
                                        <li>
                                            <span className="text-lg">2GB</span> Bandwidth
                                        </li>
                                        <li>
                                            <span className="text-lg">150GB</span> Storage
                                        </li>
                                        <li>
                                            <span className="text-lg">12</span> Accounts
                                        </li>
                                        <li>
                                            <span className="text-lg">7</span> Host Domain
                                        </li>
                                        <li>
                                            <span className="text-lg">24/7</span> Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="generic_price_btn">
                                    <a className="px-4 py-2 bg-blue-500 text-white rounded" href="#1">
                                        Sign up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}
           <section className=" bg-sky-100"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
         >
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12"
           data-aos="fade-up"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="2000">
          <h2 className="mb-4 text-xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">Designed for business teams like yours</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/*Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$29</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/*List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Individual configuration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Team size: <span className="font-semibold">1 developer</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span className="font-semibold">6 months</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free updates: <span className="font-semibold">6 months</span></span>
                  </li>
              </ul>
              <a href="#" className="text-white bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">Get started</a>
          </div>
          {/*Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Company</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$99</span>
                  <span className="text-gray-500 dark:text-gray-400" >/month</span>
              </div>
              {/*List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Individual configuration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Team size: <span className="font-semibold">10 developers</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span className="font-semibold">24 months</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free updates: <span className="font-semibold">24 months</span></span>
                  </li>
              </ul>
              <a href="#" className="text-white bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">Get started</a>
          </div>
          {/*Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">$499</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/*List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Individual configuration</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>No setup, or hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Team size: <span className="font-semibold">100+ developers</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Premium support: <span className="font-semibold">36 months</span></span>
                  </li>
                  <li className="flex items-center space-x-3">
                      {/*Icon */}
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Free updates: <span className="font-semibold">36 months</span></span>
                  </li>
              </ul>
              <a href="#" className="text-white bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
               data-aos="zoom-in"
               data-aos-easing="ease-out-cubic"
               data-aos-duration="2000">Get started</a>
          </div>
      </div>
  </div>
</section>

        </>
    )
}
export default consultancy