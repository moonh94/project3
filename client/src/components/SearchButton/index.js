import React from "react";
// import {Button} from "reactstrap";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Searchspan(props) {
  return (
    <span color="primary" size="sm" className="search-span" {...props}  tabIndex="0">
      Search
    </span>

 
  );
};


export default Searchspan;