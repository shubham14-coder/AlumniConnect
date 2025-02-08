import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AlumniCard from '../AlumniCard'; // Component for rendering individual alumni details
import Navbar from '../navbar'; // Your existing navbar component
import { FaSearch } from 'react-icons/fa';
import MobileNav from '../MobileNav';

const AlumniSearchPage = () => {
  const alumniList = useSelector((state) => state.alumni.alumniList); // Get alumni list from Redux store
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [graduationYear, setGraduationYear] = useState(""); // State for graduation year filter
console.log(alumniList);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); // Update search term state
  };

  const handleYearChange = (e) => {
    setGraduationYear(e.target.value); // Update graduation year state
  };

  // Filter alumni based on search term and graduation year
  const filteredAlumni = alumniList.filter(alumni =>
    (alumni.name.toLowerCase().includes(searchTerm) || alumni.position.toLowerCase().includes(searchTerm)) &&
    (graduationYear ? alumni.graduationYear.toString() === graduationYear : true) // Only filter by year if specified
  );

  return (
    <>
    <div className="font-montserrat bg-gray-900 text-white min-h-screen w-[100vw]">
      <Navbar/>
      <div className="px-4 py-4 md:px-6 md:py-6">
        <h1 className="text-2xl font-poppins mb-4">Search Alumni</h1>

        {/* Search Bar */}
        <div className="flex items-center mb-4">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            className="bg-[#2C3141] text-white rounded-md px-4 py-2 flex-1"
            type="text"
            placeholder="Search by name or position..."
            value={searchTerm}
            onChange={handleSearchChange} // Handle search input
          />
        </div>

        {/* Graduation Year Filter */}
        <div className="mb-4">
          <label className="text-gray-400 mb-2 block" htmlFor="graduation-year">Graduation Year:</label>
          <select
            className="bg-[#2C3141] text-white rounded-md px-4 py-2"
            id="graduation-year"
            value={graduationYear}
            onChange={handleYearChange} // Handle year selection
          >
            <option value="">All Graduation Years</option>
            {/* Populate years dynamically based on alumniList */}
            {[...new Set(alumniList.map(alumni => alumni.graduationYear))].map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Alumni Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map(alumni => (
              <AlumniCard key={alumni.id} {...alumni} /> // Pass alumni data and use key
            ))
          ) : (
            <p className="text-gray-400">No alumni found for your search.</p>
          )}
        </div>
       
      </div>
     
    </div>
    <MobileNav/>
     </>
  );
};

export default AlumniSearchPage;
