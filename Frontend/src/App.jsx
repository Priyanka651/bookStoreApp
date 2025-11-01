import Home from './Home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
      {/* <Home />
      <Course/> */}
<div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
         <Route path='/Signup' element={<Signup/>}/>
        </Routes>
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