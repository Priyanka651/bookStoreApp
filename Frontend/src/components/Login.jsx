// import React from 'react'
// import { Link } from 'react-router-dom'; 
// import { useForm } from "react-hook-form"


// function Login() {

// const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

//   const onSubmit = (data) => console.log(data)




//   return (
//    <>
//    <dialog id="my_modal_3" className="modal">
//   <div className="modal-box">
//     <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
//        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
//     </form>
//     <h3 className="font-bold text-lg">Login</h3>

//     {/* Email passwd fields */}
//     <div className='mt-4 space-y-2'>
//     <span>Email</span>
//     <br></br>
//     <input type="email" placeholder="Enter your Email" 
//     className="w-80 border rounded-md  px-3 py-1 outline-none" {...register("email", { required: true })} />
//     </div>

// {/* passowrd div */}
//     <div className='mt-4 space-y-2'>
//          <span>Password</span> <br></br>
//     <input type="password" placeholder="Enter your password" 
//     className="w-80 border rounded-md px-3 py-1 outline-none" {...register("password", { required: true })}/>
//     </div>
 
//     {/* login button */}
//     <div className="flex justify-around mt-4">
//          <button className='bg-pink-500 px-3 py-1 border rounded-md hover:bg-pink-700 duration-200 text-white'>Login</button>
//          <p>Not registered? 


//           {/* Signup k link vale router me change kr denge we already defined route in app.jsx */}
//         {/* <span className='underline text-blue-500 cursor-pointer'>Signup</span> */}
//          <Link to="/Signup"
//          className='underline text-blue-500 cursor-pointer'>Signup</Link>
//         </p>
//     </div>
   
//   </div>
// </dialog>
//    </>
//   )
// }

// export default Login;







import React from 'react';
import { Link } from 'react-router-dom'; 
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </Link>

          <h3 className="font-bold text-lg">Login</h3>

          {/* Form starts here */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 border rounded-md px-3 py-1 outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            </div>

            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 border rounded-md px-3 py-1 outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
            </div>

            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className='bg-pink-500 px-3 py-1 border rounded-md hover:bg-pink-700 duration-200 text-white'
              >
                Login
              </button>

              <p>
                Not registered?{' '}
                <Link to="/Signup" className='underline text-blue-500 cursor-pointer'>
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
