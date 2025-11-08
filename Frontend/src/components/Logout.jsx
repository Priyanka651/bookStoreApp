import React from 'react'
import { useAuth } from '../context/AuthProvider.jsx';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            // setAuthUser({
            //     ...authUser,
            //     user: null
            // });

            setAuthUser(null);

            localStorage.removeItem("Users");
            toast.success("Logout Successful");
            
        //paste same from login
        document.getElementById("my_modal_3")?.close();
        setTimeout(() => {  
        window.location.reload(); 
        }, 3000);

        } catch (error) {
            toast.error("Logout error: " + (error && error.message ? error.message : error));
            setTimeout(() => {}, 2000);
        }
    };

  return (
    <div>
        <button onClick={handleLogout} className='px-2 py-2 bg-red-500 text-white rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Logout;