import "./list.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
// import SearchItem from "../../components/searchItem/SearchItem";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  // const [date, setDate] = useState(location.state.date)
  // const [openDate, setOpenDate] = useState(false)
  // const [options, setOptions] = useState(location.state.options)
  return (
    <div>
      <Navbar/>
    </div>
  )
}
export default List;
