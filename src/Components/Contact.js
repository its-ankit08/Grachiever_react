import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
    return(
        <section className=" p-1 bg-[#1b1a3a] text-gray-300 mt-20 mb-2">

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[90%] m-auto">
      <div className="md:m-2 mt-8 md:mt-4 md:p-10 lg:p-10 md:w-[75%] md:order-first order-last">
       <h1 className="font-bold text-white text-2xl"
         data-aos="fade-up"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="2000">Keep In Touch With Us.</h1>
            <p className="text-white mt-5"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">Stay up-to-date with the latest courses, promotions, and news from Grachiever</p>
            <p className="text-white mt-10 border-[#1b1a3a] border-2 hover:border-white p-2 rounded-lg cursor-pointer flex items-center"> <FaPhone className="text-white m-2" /> +91 6266823567</p>
            <p className="text-white mt-10 border-[#1b1a3a] border-2 hover:border-white p-2 rounded-lg cursor-pointer flex items-center"> <FaEnvelope className="text-white m-2" /> info@grachiever.com</p>
            <p className="text-white mt-10">
            <a href="#!"
                      type="button"
                      className="m-2 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-[#349fcf]"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      <svg
                        className="mx-auto h-full w-4 "
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>

                    <a
                      href="https://www.linkedin.com/company/grachiever/"
                      type="button"
                      className="m-2 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-[#349fcf]"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-full w-4 "
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>

                    <a href="https://instagram.com/grachiever?igshid=ZDdkNTZiNTM="
                      type="button"
                      className="m-2 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-[#349fcf]"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      <svg
                        className="mx-auto h-full w-4 "
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
            </p>
        </div>
     <div className="md:p-10 lg:p-10">
        <div className="md:m-2 mt-5">
            <h1 className="font-bold text-white text-2xl "
             data-aos="fade-up"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000">Send a message</h1>
            <p className="mt-5 w-auto md:w-96 overflow-hidden text-white"
             data-aos="fade-up"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="2000">We`d love to hear from you! Reach out to us with any questions or feedback.</p>
            <form action="#" className="space-y-8 mt-20"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="w-full">
                        <label htmlFor="subject" className="block mb-2 font-bold text-white text-lg">Name</label>
                        <input type="text" id="subject" className="block p-3  text-black  w-full bg-white border-2 border-gray-400  px-4 py-2 pr-8 rounded-lg shadow leading-normal focus:outline-[#349fcf] focus:shadow-outline" placeholder="Name" required />
                    </div>
                    <div className="w-full">
                        <label htmlFor="email" className="block mb-2 font-bold text-white text-lg">Your email</label>
                        <input className="block p-3  text-black  w-full bg-white border-2 border-gray-400  px-4 py-2 pr-8 rounded-lg shadow leading-normal focus:outline-[#349fcf] focus:shadow-outline" id="email" type="text" placeholder="Email" />

                    </div>
                    
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 font-bold text-white text-lg">Message</label>
                    <textarea id="message" rows="6" className="text-black block p-2.5 w-full text-sm rounded-lg shadow-sm border border-gray-300 focus:outline-[#349fcf] focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Message.."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 rounded-lg sm:w-fit bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#00c5ff]"
                 data-aos="zoom-in"
                 data-aos-easing="ease-out-cubic"
                 data-aos-duration="1000">Send message</button>
            </form>
        </div>
    </div>


  </div>
    
</section>
    );
}

export default Contact;