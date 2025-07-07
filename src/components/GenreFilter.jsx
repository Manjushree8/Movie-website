import React, { useContext } from "react";

const GenreFilter = ({genreList, setSelectedGenre}) => {
    
    return(
       <select className="p-2 mb-4 border border-red-950 rounded bg-pink-900 opacity-60 backdrop-blur-md text-white"
       onChange={
        (e) => setSelectedGenre(e.target.value)
       }>
        <option value="">All Genre</option>
        {genreList.map(genre =>{
            return(
                <option key={genre} value={genre.id}>{genre.name}</option>
            )
 } )}
       </select>
    )
}

export default GenreFilter;