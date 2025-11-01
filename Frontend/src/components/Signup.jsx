// import React from 'react';
// import { Link } from 'react-router-dom';

// import { useForm } from "react-hook-form";


// import Login from './Login';
// function Signup() {

//  const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log(data);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="relative border-2 shadow-md p-8 rounded-md w-[500px] bg-white">
//         {/* Close Button */}
//         {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
//         <Link to="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

//         {/* Heading */}
//         <h3 className="font-bold text-xl text-center mb-4">Signup</h3>

//         {/* Fields */}
//         <div className="space-y-3">
//           <div>
//             <span>Name</span>
//             <input type="text" placeholder="Enter your name" className="w-full border rounded-md px-3 py-2 outline-none" />
//           </div>
//           <div>
//             <span>Email</span>
//             <input type="email" placeholder="Enter your email" className="w-full border rounded-md px-3 py-2 outline-none" />
//           </div>
//           <div>
//             <span>Password</span>
//             <input type="password" placeholder="Enter your password" className="w-full border rounded-md px-3 py-2 outline-none" />
//           </div>
//         </div>

//         {/* Button */}
//         <div className="flex flex-col items-center mt-6">
//           <button className="bg-pink-500 w-full py-2 border rounded-md hover:bg-pink-700 duration-200 text-white">
//             Signup
//           </button>
//           <p className="text-xl mt-1">
//             Have an account?{' '}
//             <button className="underline text-blue-500 cursor-pointer" 
//              onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>
//               <Login/>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;


import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';

function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative border-2 shadow-md p-8 rounded-md w-[500px] bg-white">
        
        {/* Close Button */}
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>

        {/* Heading */}
        <h3 className="font-bold text-xl text-center mb-4">Signup</h3>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

          {/* Name Field */}
          <div>
            <span>Name</span>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className="w-full border rounded-md px-3 py-2 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <span>Email</span>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="w-full border rounded-md px-3 py-2 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <span>Password</span>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              className="w-full border rounded-md px-3 py-2 outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="bg-pink-500 w-full py-2 border rounded-md hover:bg-pink-700 duration-200 text-white"
          >
            Signup
          </button>
        </form>

        {/* Login Section */}
        <div className="flex flex-col items-center mt-4">
          <p className="text-md">
            Have an account?{' '}
            <button
              className="underline text-blue-500 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
          </p>

          {/* Login Modal */}
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Signup;
 