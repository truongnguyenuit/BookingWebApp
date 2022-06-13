import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'
import "./searchItem.css"

const SearchItem = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] 
  return (
    <div>SearchItem</div>
  )
}

export default SearchItem