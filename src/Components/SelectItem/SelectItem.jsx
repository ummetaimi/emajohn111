import React from "react";
import "./SelectItem.css"
const SelectItem = (props) => {
    const{name, price, img} = props;
  return( 
    <div>
        <div className="img">
            <img src={img} alt="" />
        </div>
        <h3>ProductName: {name}</h3>

    </div>
  )
};

export default SelectItem;
