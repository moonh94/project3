import React from "react";
import {Button} from "reactstrap";
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SearchButton(props) {
  return (
    <Button color="primary" size="sm"className="search-button" {...props} role="button" tabIndex="0">
      Search
    </Button>

 
  );
};


export default SearchButton;