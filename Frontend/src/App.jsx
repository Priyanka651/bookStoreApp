import Home from './Home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contacts from './components/Contacts/Contacts.jsx';
import {Navigate,Route, Routes} from 'react-router-dom';
import { useAuth } from './context/AuthProvider.jsx';

import { Toaster } from 'react-hot-toast';

function App() {

const [authUser, setAuthUser] = useAuth();
console.log(authUser);


  return (
    <>
      {/* <Home />
      <Course/> */}
<div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={authUser ? <Courses/> : <Navigate to="/signup"/>}/>
       <Route path='/Signup' element={<Signup/>}/>
         <Route path='/Contact' element={<Contacts/>}/>
        </Routes>

             <Toaster />
</div>
    </>
  );
}

export default App;




//  import Navbar from './components/Navbar';
//  import Banner from './components/Banner';
//  import Footer from './components/Footer';
// import Freebook from './components/Freebook';


// function App() {
//   return (
//     <>
//      <Navbar/>
//              <Banner/>
//              <Freebook/>
//              <Footer/>
//     </>
//   )
// }

// export default App;