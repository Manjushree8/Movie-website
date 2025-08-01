import React, { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import WatchListContext from "../context/WatchListContext";


const Moviecard = ({ movie }) => {
 const{toggleWatchList, watchList} = useContext(WatchListContext);
 
const inWatchList = watchList.some(m => m.id == movie.id)

console.log("watchList", watchList);
 
  
  return (
    <div className="bg-red-950 p-4 rounded-lg shadow-md text-white font-sans relative">
      <img
        src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}` }
        alt={movie.title} 
        className="w-full h-80 object-contain rounded-sm"
      />
      <h3 className="text-lg font-bold mt-4">{movie.title}</h3>
      <p className="text-sm text-white ">{movie.release_date}</p>
      <button className="absolute top-2 right-2 text-red-800 text-xl " onClick={() => toggleWatchList(movie)}>
       
        {inWatchList ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
};

export default Moviecard;
