import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlaceContext } from "../ContextHook/placeContext";
import { AnimatePresence, motion } from "framer-motion";
import SlideShow from "../components/SlideShow";
import { toast } from "react-toastify";

const IndexPage = () => {
  const { allPlaces, error, loading } = useContext(PlaceContext);
  const [renderOnce, setRenderOnce] = useState(false);
  const [ clicked,setClicked] = useState(false);

  useEffect(() => {
    if (!renderOnce) {
      setRenderOnce(true);
      if (renderOnce) {
        setRenderOnce(false);
      }
    }
  }, []);

  const handleClick=(currentPlace)=>{
    alert(currentPlace)
    allPlaces.map((place)=>{
      if(currentPlace === place._id){
        setClicked(!clicked)
        toast.success('Added to Favorites')
      }else{
        return;
      }
    })
  
  }

  const placesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 3,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="h-[80vh] w-full flex items-center justify-center bg-white"
          >
            <div className="newtons-cradle index">
              <div className="newtons-cradle__dot"></div>
              <div className="newtons-cradle__dot"></div>
              <div className="newtons-cradle__dot"></div>
              <div className="newtons-cradle__dot"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
        <motion.div
          variants={renderOnce ? placesVariants : {}}
          initial="hidden"
          animate="visible"
          className="indexLocations mt-8 grid max-w-8xl pt-4 px-4 sm:px-6 md:px-10 lg:px-12 gap-x-6 gap-y-8"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          }}
        >
          {allPlaces?.length > 0 &&
            allPlaces.map((place, idx) => (
              <div key={idx} className="relative">
              <div onClick={()=> handleClick(place._id)} className=" absolute p-1 z-10 cursor-grab right-2 top-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[13px] h-[13px] " fill={ clicked ? '#ff385c' : 'none'} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              </div>
              <Link  to={"/place/" + place._id} className="relative" >
               
                <div className="bg-gray-500 mb-2 rounded-2xl flex">
                <SlideShow images={place?.photos}/>
                </div>
                <h2 className="font-bold truncate">{place.address}</h2>
                <h3 className="text-sm text-gray-500 truncate">{place.title}</h3>
                <div className="mt-1">
                  <span className="font-bold">${place.price}</span> per night
                </div>
              </Link>
              </div>
            ))}
           
        </motion.div>
         <div className=" w-full flex items-center justify-center p-2">
         <div className="scene">
           <div className="cube">
             <span className="side top">Thank You😊</span>
             <span className="side front">Load More</span>
           </div>
         </div>
         </div>
         </>
      )}
    </>
  );
};

export default IndexPage;
