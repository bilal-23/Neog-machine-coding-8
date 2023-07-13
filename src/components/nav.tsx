import { useMeetupContext } from "@/context/meetup-provider";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const { searchTerm, setSearchTerm } = useMeetupContext();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md border-b">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        Meetups
      </Link>
      <div className="flex bg-white rounded shadow  justify-between items-center ">
        <label htmlFor="search" className="hidden">
          Search
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search by title and tags"
          className="text-black p-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 flex-grow "
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
    </header>
  );
};

export default Nav;
