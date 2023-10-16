import React from 'react'
import FlipCard from './FlipCard';

function GAtools() {
  return (
<section className='p-10 flex flex-row'
 data-aos="fade-up"
 data-aos-easing="ease-out-cubic"
 data-aos-duration="2000">

   <div className='mt-10'>
   <h1 className="text-3xl font-bold text-center p-3 mt-2">
        Grachiever
        Tools and <span className="text-[#4eb0e1]">Services.</span>
      </h1>
      <div className='flex justify-between'>
      <form className="flex items-center w-full">   
    <label for="simple-search" className="sr-only">Search Python,React</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
    </div>
    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
     data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span className="sr-only">Search</span>
    </button>
</form>
<select className="bg-blue-600 text-white sm:mt-5 sm:w-full md:w-64 lg:w-64  h-11 border rounded-xl sm:text-sm text-xs p-1 md:m-2 font-semibold outline-none"
 data-aos="zoom-in"
 data-aos-easing="ease-out-cubic"
 data-aos-duration="2000">
            <option>Category</option>
            <hr />
            <option>Tranding</option>
            <option>New</option>
            <option>Top Best</option>

        </select>
</div>
<div className="flex gap-5 justify-normal flex-row flex-wrap py-10">
    <FlipCard/>
    <FlipCard/>
    <FlipCard/>
    <FlipCard/>
    <FlipCard/>
    <FlipCard/>
    <FlipCard/>
    <FlipCard/>
    <FlipCard/>
    <FlipCard/>
    <FlipCard/>
</div>

   </div>

</section>
  );
};

export default GAtools;