import React, { useContext, useState } from "react";
import GenreFilter from "../components/GenreFilter";
import WatchListContext from "../context/WatchListContext";
import Moviecard from "../components/Moviecard";
const Watchlist = () => {
  const{watchList, genreList}=useContext(WatchListContext)

  const [search, setSearch] = useState("");

  const[selectedGenre, setSelectedGenre] = useState("");

  const filteredMovies = watchList.filter(
    (movie) =>
      movie?.title?.toLowerCase().includes(search.toLowerCase())

  ).filter(movie => {
    return !selectedGenre || movie?.genre_ids?.includes(Number(selectedGenre));
  })

  return (
    <div className="p-4 pt-16 ">
      <input
        type="text"
        placeholder="Search watchlists..."
        className="p-2 w-3/4 md:w-1/2 border border-red-950 rounded
         bg-pink-200 opacity-60 backdrop-blur-md text-red-950 fixed top-16 left-1/2 
         transform -translate-x-1/2 z-10"
         onChange={(e) => setSearch(e.target.value)}
      />
      <div className="mt-16 flex justify-center">
        <GenreFilter genreList={genreList}
        setSelectedGenre={setSelectedGenre}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
       
        {filteredMovies.map((movie, index) => (
          <Moviecard key={index} movie={movie} />
        ))}
        
      </div>
      </div>
  );
}
export default Watchlist;