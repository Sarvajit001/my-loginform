import React, { useState } from "react";
import "./Accordian.css";
import {FaChevronDown, FaChevronUp ,FaBeer} from "react-icons/fa";
import { Link } from "react-router-dom";


const Accordian = ({ items }) => {
    const[openIndex, setOpenIndex] = useState(null);

    function handleToggle(index) {
    setOpenIndex(openIndex===index?null:index)
  }

  
  if (!Array.isArray(items)) {
    console.error("Accordian expected items array but got:", items);
    return null;
  }


  return !items ||(items.length===0)?"No items available": (
    <>
    <div className="accordian">
           <h1>React Accordion</h1>
      {items.map((item, index) => (
        <div className="accordian-item">
          <button className="accordian-title" onClick={() =>handleToggle(index)}>{item.title}
         {openIndex===index?
          <FaChevronUp className="right"/>:<FaChevronDown className="right"/>
          }
          </button>
            {/* <h3>Have a beer <FaBeer /></h3> */}
          {openIndex===index &&
          <div className="accordian-content">{item.content}</div>
            }
        </div>

        
      ))}
      
    </div>
<Link to="/" className="btn btn-primary mt-3">
        Go Home
      </Link>

    </>
  );
};

export default Accordian;
