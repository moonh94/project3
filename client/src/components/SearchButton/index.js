import React from "react";
import {Button} from "reactstrap";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Searchspan(props) {
  return (
    <Button style={{backgroundColor: "#E9ECEF", color: "black", paddingTop: 3, paddingLeft: 10, paddingRight: 10, height: 38}}>
    <span size="sm" className="search-span" {...props}  tabIndex="0">
      Search
    </span>
    </Button>

 
  );
};


export default Searchspan;