import React from "react";


function SearchBar(props) {
    return (
        <div style={{paddingTop: 50, paddingLeft: 250, paddingRight: 250}}
            className="input-group input-group-lg">
            <input style={{paddingRight: 30}} className="form-control" type="text" {...props} />
            <input className="form-control" type="text" {...props} />
            
        </div>
    );
}

export default SearchBar;