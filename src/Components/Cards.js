import { FaBookDead, FaCalendarMinus, FaCircle, FaDollarSign, FaFileInvoiceDollar, FaFunnelDollar, FaHeadSideCoughSlash, FaSearchDollar, FaStar, FaStopwatch, FaTimes, FaTimesCircle, FaUserTimes } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../images/LOGOS/fev_icon.png';
import img1 from '../images/cards/img-1.png';
import img2 from '../images/cards/img-2.png';
import img3 from '../images/cards/img-3.png';
import img4 from '../images/cards/img-4.png';

import "./Home.css"
import { Link } from 'react-router-dom'

function Cards() {
  const settings = {
    infinite: true,
    autoplay:true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <section className="bg-[#1b1a3a] p-1 md:p-10 pb-8 mt-10 container mx-auto"
     data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
    <div className=" justify-items-end grid grid-cols-1 sm:grid md:grid lg:grid-cols-3 ">
   
    <div className="w-full font-bold text-lg md:text-4xl text-white  col-span-2 mt-8">
    <h1 className="text-center md:float-right text-white">What Are You Seaching For?</h1>
    </div>
    <div className="w-auto sm:w-96 md:w-96 h-10 mt-10 flex font-semibold items-center">
      <button className="p-1 md:px-5 text-md md:text-xl  sm:mx-3 md:mx-3 border-[#00c5ff] border-2 rounded-full text-[#00c5ff] hover:text-white">All</button>
      <button className="p-1 md:px-5 text-md md:text-xl  sm:mx-3 md:mx-3 hover:border-[#00c5ff] border-[#1b1a3a] border-2  rounded-full text-white">Trending</button>
      <button className="p-1 md:px-5 text-md md:text-xl  sm:mx-3 md:mx-3 hover:border-[#00c5ff] border-[#1b1a3a] border-2  rounded-full text-white">Popular</button>
    
    </div>
    </div>
    
<Slider {...settings} className="m-5 md:p-10">

    {/* Card 1 */}
    <div className="p-1 sm:p-1 md:p-8 lg:p-8 h-full ">
    <div className="   bg-white rounded-3xl h-full  pb-5 ">
      <img src={img1} alt="image1" className="mx-auto w-[100%] md:w-full h-48  rounded-t-2xl shadow-lg" />
      <div className="grid grid-cols-2 gap-0 md:40  mt-5">
      <div className=" flex items-center m-auto text-[#00c5ff]">
      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
      </div>
      <div className=" flex items-center m-auto  ">
      <FaDollarSign className="" /> <h1 className="font-bold">1000</h1>
      </div>
      </div>
      <h2 className="mt-5 text-sm md:text-xl  text-gray-900 text-center font-semibold">Python FullStack Development</h2>
      <div className="grid grid-cols-2  md:gap-10 mt-5">
      <div className=" flex items-center m-auto">
      <img src={logo1} className="m-2 w-6"/> <h2 className="font-bold ">Grachiever</h2>
      </div>
      <div className=" flex items-center m-auto">
      <FaCalendarMinus className="m-2"/> <h2 className="font-semibold">3 Hrs</h2>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-5 gap-4 mx-5">
        <Link to="/CardDetails" className=" py-2 text-sm font-medium text-center bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#00c5ff] rounded-lg ">Enroll Now</Link>
      <a href="#" className=" py-2 text-sm font-medium text-center hover:bg-[#00c5ff] bg-white hover:text-white text-black border-2 border-[#00c5ff] rounded-lg ">Compaire</a>
      </div>
    </div>
    </div>

    {/* Card 2 */}
    <div className="p-1 sm:p-1 md:p-8 lg:p-8 h-full ">
    <div className="   bg-white rounded-3xl h-full  pb-5 ">
      <img src={img2} alt="image1" className="mx-auto w-[100%] md:w-full h-48  rounded-t-2xl shadow-lg" />
      <div className="grid grid-cols-2  md:40  mt-5">
      <div className=" flex items-center m-auto text-[#00c5ff]">
      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
      </div>
      <div className=" flex items-center m-auto  ">
      <FaDollarSign className="" /> <h1 className="font-bold">1000</h1>
      </div>
      </div>
      <h2 className="mt-5 text-sm md:text-xl  text-gray-900 text-center  font-semibold">Python FullStack Development</h2>
      <div className="grid grid-cols-2  md:gap-10 mt-5">
      <div className=" flex items-center m-auto">
      <img src={logo1} className="m-2 w-6"/> <h2 className="font-bold">Grachiever</h2>
      </div>
      <div className=" flex items-center m-auto ">
      <FaCalendarMinus className="m-2"/> <h2 className="font-semibold">3 Hrs</h2>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-5 gap-4 mx-5">
      <Link to="/CardDetails" className=" py-2 text-sm font-medium text-center bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#00c5ff] rounded-lg ">Enroll Now</Link>
      <a href="#" className=" py-2 text-sm font-medium text-center hover:bg-[#00c5ff] bg-white hover:text-white text-black border-2 border-[#00c5ff] rounded-lg ">Compaire</a>
      </div>
    </div>
    </div>
    {/* Card 3 */}
    <div className="p-1 sm:p-1 md:p-8 lg:p-8 h-full ">
    <div className="   bg-white rounded-3xl h-full  pb-5 ">
      <img src={img3} alt="image1" className="mx-auto w-[100%] md:w-full h-48  rounded-t-2xl shadow-lg" />
      <div className="grid grid-cols-2  md:40  mt-5">
      <div className=" flex items-center m-auto text-[#00c5ff]">
      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
      </div>
      <div className=" flex items-center m-auto  ">
      <FaDollarSign className="" /> <h1 className="font-bold">1000</h1>
      </div>
      </div>
      <h2 className="mt-5 text-sm md:text-xl  text-gray-900 text-center font-semibold">Python FullStack Development</h2>
      <div className="grid grid-cols-2  md:gap-10 mt-5">
      <div className=" flex items-center m-auto">
      <img src={logo1} className="m-2 w-6"/> <h2 className="font-bold">Grachiever</h2>
      </div>
      <div className=" flex items-center  m-auto">
      <FaCalendarMinus className="m-2"/> <h2 className="font-semibold">3 Hrs</h2>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-5 gap-4 mx-5">
       <Link to="/CardDetails" className=" py-2 text-sm font-medium text-center bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#00c5ff] rounded-lg ">Enroll Now</Link>
      <a href="#" className=" py-2 text-sm font-medium text-center hover:bg-[#00c5ff] bg-white hover:text-white text-black border-2 border-[#00c5ff] rounded-lg ">Compaire</a>
      </div>
    </div>
    </div>

    {/* Card 4 */}
    <div className="p-1 sm:p-1 md:p-8 lg:p-8 h-full ">
    <div className="   bg-white rounded-3xl h-full  pb-5 ">
      <img src={img4} alt="image1" className="mx-auto w-[100%] md:w-full h-48  rounded-t-2xl shadow-lg" />
      <div className="grid grid-cols-2  md:40  mt-5">
      <div className=" flex items-center m-auto text-[#00c5ff]">
      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
      </div>
      <div className=" flex items-center m-auto  ">
      <FaDollarSign className="" /> <h1 className="font-bold">1000</h1>
      </div>
      </div>
      <h2 className="mt-5 text-sm md:text-xl  text-gray-900 text-center  font-semibold">Python FullStack Development</h2>
      <div className="grid grid-cols-2  md:gap-10 mt-5">
      <div className=" flex items-center m-auto">
      <img src={logo1} className="m-2 w-6"/> <h2 className="font-bold">Grachiever</h2>
      </div>
      <div className=" flex items-center m-auto">
      <FaCalendarMinus className="m-2"/> <h2 className="font-semibold">3 Hrs</h2>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-5 gap-4 mx-5">
      <Link to="/CardDetails" className=" py-2 text-sm font-medium text-center bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#00c5ff] rounded-lg ">Enroll Now</Link>
      <a href="#" className=" py-2 text-sm font-medium text-center hover:bg-[#00c5ff] bg-white hover:text-white text-black border-2 border-[#00c5ff] rounded-lg ">Compaire</a>
      </div>
    </div>
    </div>

    {/* Card 5 */}
    <div className="p-1 sm:p-1 md:p-8 lg:p-8 h-full ">
    <div className=" bg-white rounded-3xl h-full  pb-5 ">
      <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/ff/4584404c7511e7a18adb2a6ad3c009/GettyImages-185239648.jpg?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25" alt="image1" className="mx-auto w-[100%] md:w-full h-48  rounded-t-2xl shadow-lg" />
      <div className="grid grid-cols-2  md:40  mt-5">
      <div className=" flex items-center text-[#00c5ff]  mx-3">
      <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
      </div>
      <div className=" flex items-center  m-auto  ">
      <FaDollarSign className="" /> <h1 className="font-bold">1000</h1>
      </div>
      </div>
      <h2 className="mt-5 text-sm md:text-xl  text-gray-900 text-center  font-semibold">Python FullStack Development</h2>
      <div className="grid grid-cols-2  md:gap-10 mt-5">
      <div className=" flex items-center m-auto">
      <img src={logo1} className="m-2 w-6"/> <h2 className="font-bold">Grachiever</h2>
      </div>
      <div className=" flex items-center  m-auto">
      <FaCalendarMinus className="m-2"/> <h2 className="font-semibold">3 Hrs</h2>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-5 gap-4 mx-5">
      <Link to="/CardDetails" className=" py-2 text-sm font-medium text-center bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#00c5ff] rounded-lg ">Enroll Now</Link>
      <a href="#" className=" py-2 text-sm font-medium text-center hover:bg-[#00c5ff] bg-white hover:text-white text-black border-2 border-[#00c5ff] rounded-lg ">Compaire</a>
      </div>
    </div>
    </div>
    

  </Slider>
    <div className='text-center mt-3'>
      <Link to='BrowseAll'><button className="bg-[#00c5ff] hover:bg-white text-white hover:text-black border-2 border-[#00c5ff] p-2  rounded-xl  px-20 text-lg  font-bold"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">Browse All</button></Link> 
    </div>
    </section>
  </>
  );
}

export default Cards;
