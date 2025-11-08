
import { Link, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function Signup() {
 
  const location=useLocation()
  const from=location.state?.from?.pathname || "/";
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); 

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  const onSubmit =async (data) => {
     const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
     }

//call API by using axios to store above data
await axios.post("http://localhost:4001/user/signup",userInfo)
.then((res)=>{
  console.log(res.data)
//if we have response data then will do signup
if(res.data){
  // alert("signup succesfully")
    toast.success('signup succesfully!');
  navigate(from,{replace:true});
  
}

//after signup, data store ho je browser k local storage me 
localStorage.setItem("Users", JSON.stringify(res.data.user));
})

.catch((err) => {
  console.log(err.response.data);
  // alert(err.response.data.message);
  toast.error(err.response.data.message);
});


// .catch((err)=>{
//   console.log(err)
//   alert("error:"+err)
//})
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
              {...register("fullname", { required: "Name is required" })}
              placeholder="Enter your name"
              className="w-full border rounded-md px-3 py-2 outline-none"
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">{errors.fullname.message}</p>
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
 