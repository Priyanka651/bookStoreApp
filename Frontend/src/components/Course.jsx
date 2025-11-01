import list from '../../public/list.json';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';


function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-24'>

       {/* heading */} 
     <div className="mt-24 items-center text-center  dark:bg-slate-900 dark:text-white">
      <h1 className='text-2xl md:text-4xl'>We're delighted to have you<span className="text-pink-500"> here!:)</span></h1>
      <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus facilis esse voluptatibus quas dicta ab similique mollitia iste,
         praesentium minima accusantium vel voluptatem animi 
        ipsa illum id suscipit, iure dolores?</p>


 {/* we used link to go back to home page when click button back  */}
      <Link to="/">
        <button className="mt-6 bg-pink-500  text-white rounded-md px-4 py-1 hover:bg-pink-700 duration:300 ">Back</button>
        </Link>
    </div>
    {/* heading div close here */}
{/* 
     {/* list of courses */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
    {/* list end here above */}
    </div>
    </>
  )
}

export default Course;