import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SearchButton(props) {
  return (
    <span className="search-button" {...props} role="button" tabIndex="0">
      Search
    </span>
  );
}

export default SearchButton;