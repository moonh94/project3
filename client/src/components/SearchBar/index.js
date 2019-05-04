import React from "react";


function SearchBar(props) {
    return (
        <div className="input-group input-group-lg">
            <input className="form-control" type="text" {...props} />
            <input className="form-control" type="text" {...props} />
            <button id="submit-btn" class="btn btn-primary" type="submit">Submit</button>
        </div>
    );
}

export default SearchBar;