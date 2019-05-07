
import React from "react";

function SearchBar(props) {
    return (
        <div style={{paddingTop: 30, paddingLeft: 50, paddingRight:50}}
            className="input-group input-group-lg">
            <input style={{paddingRight: 30, width: 75}} className="form-control" type="text" placeholder="Position" {...props} />
            <input style={{marginLeft: 30, width: 75}} className="form-control" type="text" placeholder="Location" {...props}  />
            {/* <i class='fas fa-search'></i> */}
            {/* <button id="submit-btn" class="btn btn-primary" type="submit">Submit</button> */}
        </div>

    );
}

export default SearchBar;