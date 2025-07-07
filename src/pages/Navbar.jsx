import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Watchlist from "./Watchlist";
import WatchListContext from "../context/WatchListContext";

const Navbar = () => {
    const { watchList } = useContext(WatchListContext);
  return (
    <nav className="bg-red-950 text-white p-4 flex justify-between fixed w-full top-0 z-10">
        <Link to="/" className="text-xl font-bold text-pink-100">Filmie</Link>
        <Link to="/Watchlist" className="text-xl text-pink-100">
         Watchlist({watchList.length})</Link>
    </nav>
  );
};

export default Navbar;