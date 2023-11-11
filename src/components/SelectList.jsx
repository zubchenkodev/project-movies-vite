import React from 'react'

const SelectList = ({list, handleChange}) => {
  return (
    <select name="selectList" id="selectList" className='movies-select' value={list} onChange={handleChange}>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="now_playing">Now Playing</option>
    </select>
  )
}

export default SelectList;