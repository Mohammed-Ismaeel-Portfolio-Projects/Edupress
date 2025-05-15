import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { MdWindow } from 'react-icons/md'
import { FaList } from 'react-icons/fa'

const SectionHeading = ({
  title,
  toggleSidebar,
  isList,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="flex justify-between items-center -z-50 flex-wrap gap-10">
      <h1 className="font-exo text-3xl font-semibold text-black">{title}</h1>
      <div className="right flex gap-5">
        <div className="search relative">
          <input
            type="text"
            className="border-b border-black max-sm:min-w-64 h-8 outline-none"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
          />
          <IoSearch
            style={{
              color: 'rgba(0, 0, 0, 1)',
              width: '20px',
              height: '20px',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '0',
            }}
          />
        </div>
        <button onClick={isList ? toggleSidebar : undefined}>
          <MdWindow
            style={{
              color: !isList ? 'orange' : 'black',
              transition: 'color 0.3s ease',
            }}
          />
        </button>
        <button onClick={!isList ? toggleSidebar : undefined}>
          <FaList
            style={{
              color: isList ? 'orange' : 'black',
              transition: 'color 0.3s ease',
            }}
          />
        </button>
      </div>
    </div>
  )
}

export default SectionHeading
