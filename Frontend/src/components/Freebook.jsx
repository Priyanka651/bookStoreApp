// import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../components/Cards";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

//same course.jsx vala krna api call vgera for homepage pe jo books hai unka data lene k lea

function Freebook(){

//same course.jsx vala

const[book,setBook]=useState([]);
useEffect(()=>{
  const getBook=async()=>{
    try{
      const res= await axios.get("http://localhost:4001/book");
      
     const data= res.data.filter((data)=>data.category==="free");
      //yha pe filter vala data dikhana hai means sb ni aana chahiye na jese courses me hai many books so yha seelcted filtered chahiye
        console.log(data);
        setBook(data);
    }catch(error){
      console.log(error);
    }
  };
  getBook();
},[]);

  // const filterData=list.filter((data)=>data.category==="free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <>

    {/* this div closes at the end  */}
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
      <h1 className=" font-semi-bold text-xl pb-2">Free Offered Courses</h1>
      <p className="pb-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sequi eum eveniet ipsum accusamus dolores recusandae 
        quia consectetur ipsa aperiam et facere aut minus consequatur a, 
        aspernatur odit aliquid nihil.</p>
        </div>

  


  {/* slider */}
<div>
<Slider {...settings}>
{/* {filterData.map((item)=>( */}
{book.map((item)=>(
  <Cards item={item} key={item.id}/>
))}

      </Slider>

</div>

{/* closed the div down */}
</div>

    </>
  )
}
export default Freebook;
