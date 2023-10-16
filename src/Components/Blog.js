function Blog() {
    return (
        <>
        <section className="p-1 mt-20 "
         data-aos="fade-up"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="2000">
    <h1 className="md:text-3xl font-bold text-center p-3 mt-5">
      Latest News
    </h1>
    <p className="text-center md:w-[50%] lg:w-[50%] m-auto p-2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, delectus ad.
    </p>
    <div className=" text-center mt-16 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 w-[100%] sm:w-[100%] md:w-[80%] lg:w-[60%] m-auto">
        <div><button className="text-sm font-semibold bg-blue-100 hover:bg-blue-50 py-2 px-2 rounded-lg">All Categories</button></div> 
        <div><button className="text-sm font-semibold hover:bg-blue-50 py-2 px-2 rounded-lg">Animation</button></div> 
        <div><button className="text-sm font-semibold hover:bg-blue-50 py-2 px-2 rounded-lg">Design</button></div> 
        <div><button className="text-sm font-semibold hover:bg-blue-50 py-2 px-2 rounded-lg">Illustration</button></div> 
        <div><button className="text-sm font-semibold hover:bg-blue-50 py-2 px-2 rounded-lg">Lifestyle</button></div> 
        <div><button className="text-sm font-semibold hover:bg-blue-50 py-2 px-2 rounded-lg">Photo & Film</button></div> 
        <div><button className="text-sm font-semibold hover:bg-blue-50 py-2 px-2 rounded-lg">Business</button></div> 
        <div><button className="text-sm font-semibold hover:bg-blue-50 py-2 px-2 rounded-lg">Writing</button></div> 
    </div>
    </section>



    <section >
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10 m-auto w-[85%] "
     data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className=" rounded-xl"
         data-aos="zoom-in"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="1000">
            <img src="https://www.classcentral.com/report/wp-content/uploads/2022/03/Best-Courses-Copywriting-Banner.png" className="rounded-xl hover:scale-105 duration-300"/>
            <h2 className="text-[#7a4af6] mt-5">Best Copywriting Courses to Take in 2023</h2>
            <h2 className=" font-bold mt-2">Transform your writing skills into profit: discover the best copywriting courses to launch your lucrative career or side hustle..</h2>
            <p className="mt-2">April 15, 2023</p>
        </div>
        <div className=" rounded-xl"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <img src="https://www.classcentral.com/report/wp-content/uploads/2023/04/Pandas-BCG-Banner.png" className="rounded-xl hover:scale-105 duration-300"/>
            <h2 className="text-[#7a4af6] mt-5">Best pandas Courses to Take in 2023</h2>
            <h2 className=" font-bold mt-2">Unlock the power of data analysis with the top pandas courses. Pandas is a powerful, open-source Python library</h2>
            <p className="mt-2">April 15, 2023</p>
        </div>
        <div className=" rounded-xl"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000" >
            <img src="https://www.classcentral.com/report/wp-content/uploads/2023/04/NumPy-BCG-Banner.png" className="rounded-xl hover:scale-105 duration-300"/>
            <h2 className="text-[#7a4af6] mt-5">Best NumPy Courses to Take in 2023</h2>
            <h2 className=" font-bold mt-2">Whether you’re a data scientist, machine learning engineer, or just someone who needs to crunch a bunch of numbers in a short amount of time, NumPy is definitely for you.</h2>
            <p className="mt-2">April 15, 2023</p>
        </div>
    </div>
    <div className="text-center mt-20 mb-10 m-auto">
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </a>
        {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
        <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-[#349fcf] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
        <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Next</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
</section>

{/* <FlipCard/> */}
</>
    );
}



export default Blog;


