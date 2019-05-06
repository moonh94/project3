import React from "react";


function SearchBar(props) {
    return (
        <div style={{paddingTop: 50, paddingLeft: 250, paddingRight: 250}}
            className="input-group input-group-lg">
            <input style={{paddingRight: 30}} className="form-control" type="text" {...props} />
            <input className="form-control" type="text" {...props} />
<<<<<<< HEAD
            
=======
            {/* <button id="submit-btn" class="btn btn-primary" type="submit">Submit</button> */}
>>>>>>> 7dfea7f0896d2a352a3cb82d5797d572f8b162cb
        </div>
    );
}

export default SearchBar;