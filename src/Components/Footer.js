// import grachieverlogo from "../images/LOGOS/g.logo.white1.png"
import { Link } from 'react-router-dom'
import footer_logo1 from "../images/LOGOS/g.logo.white1.png"
import { FaAngleRight } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className='bg-[#1c1e39] container mx-auto' >
 
        {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>  */}
        <div className="flex flex-wrap">
          <div className='w-[100%] md:w-[25%] lg:w-[25%]'>
            <img src={footer_logo1} className="w-52 mx-auto" />
          </div>
          <div className='p-5 w-[100%] md:w-[50%] lg:w-[50%]'>
            <p className="text-white text-2xl text-center">Subscribe to Our Newsletter</p>
            <form action="">
              <div className="bg-white flex items-center mt-5 rounded-full outline-none">
                <input type="text" className="py-2.5 px-4 outline-none w-full rounded-full" placeholder="Enter your email" />
                <button type="submit" className="w-14 m-1 h-12 rounded-full bg-[#349fcf] text-white"><FaAngleRight className='text-3xl mx-auto mt-1 h-10 animate-pulse' /></button>
              </div>
            </form>
          </div>
          <div className='p-5 w-[100%] md:w-[25%] lg:w-[25%]'>
            <p className="text-white text-2xl text-center">Follow Us On</p>
            <div className="mb-6 flex justify-center mt-5">
              <a
                href="#!"
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-[#349fcf]"
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
                href="https://twitter.com/grachievermedia/"
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-[#349fcf]"
                data-te-ripple-init
                data-te-ripple-color="light">
                <svg
                  // xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/grachiever?igshid=ZDdkNTZiNTM="
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition  ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-[#349fcf]"
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
                className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-[#349fcf]"
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

        </div>
        {/* </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 text-white md:mx-10 text-center sm:text-left">
          <div className="p-5  lg:pl-20">
            <h1 className="text-white font-bold text-lg mb-3">About</h1>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/about">About Us</Link></p>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/">What We offer?</Link></p>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/">Our services</Link></p>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/contact">Contact Us</Link></p>
          </div>
          <div className="p-5  lg:pl-20">
            <h1 className="text-white font-bold text-lg mb-3">Special</h1>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/">Grachiever plus</Link></p>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/">Grachiever for business</Link></p>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/Skillgraph">Skill graph</Link></p>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/skillConsultancy">Skill Consultancy</Link></p>
          </div>
          <div className="p-5 lg:pl-20">
            <h1 className="text-white font-bold text-lg mb-3">Popular</h1>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/">Course</Link></p>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/Skillgraph">Skill</Link></p>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/CardDetails">Services</Link></p>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/CardDetails">Tools</Link></p>
          </div>
          <div className="p-5 lg:pl-20">
            <h1 className="text-white font-bold text-lg mb-3">More</h1>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/blog">Blog</Link></p>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/">Careers</Link> </p>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/">Help</Link></p>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/">Terms</Link></p>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/">Privacy Policy</Link></p>
            <p className="hover:text-[#00c5ff] hover:-translate-y-1 duration-300"><Link to="/">Cookies Policy</Link></p>
          </div>
        </div>
        <div
          className="p-4 text-center text-white">Copyright © 2023 <a className="underline" href="https://tailwind-elements.com/"> Grachiever.</a> All rights reserved.
        </div>
        <div className='section'>
        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
        </div>
      </section>
    </>

  );
}

export default Footer;