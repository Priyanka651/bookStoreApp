import React from 'react'
import banner from '../../public/banner.png';
 function Banner() {
  return (
   <>
   {/* parent div */}
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">

    <div className="order-2 md:order-1 w-full md:w-1/2 mt-x12 md:mt-32">

    <div className="space-y-12 ">
    <h1 className='text-4xl font-bold'>Hello, welcome here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>

    <p className="text-xl ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil accusamus dolores, iure temporibus inventore saepe, 
        maiores eveniet molestias rem id est repudiandae obcaecati possimus laudantium sit.
         Impedit nemo accusamus perferendis.</p>

{/* email button */}
<label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="Enter your email to login" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>
{/* above email button end */}
  </div>

{/* button section secondary */}
<button className="btn mt-6 bg-pink-500 hover:bg-pink-600 text-white border-none text-sm flex items-center justify-center px-8 py-3 rounded-lg">
  Get Started
</button>
{/* button section end */}

</div>



{/* Right section Starts */}

    <div className=" order-1 w-full md:w-1/2 flex">
    <img src={banner} className="w-92 h-92 mt-10" alt="bannerImage"/>
    </div>
   </div>
   </>
  )
}
export default Banner;
