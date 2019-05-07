import React from "react";


function SearchBar(props) {
    return (
        <div className="input-group input-group-lg">
            <input className="form-control" type="text" 
            {...props}
            />
            {/* <input className="form-control" type="text" id="location" 
            name= "location"
            {...props}
            /> */}
            {/* <button id="submit-btn" class="btn btn-primary" type="submit">Submit</button> */}
        </div>
    );
}

// export function Input(props) {
//     return (
//         <input className="form-control" type="text" 
//         name= "position"
//         {...props}
//         />
//     );
//   }
  
//   export function Input2(props) {
//     return (
//         <input className="form-control" type="text" 
//         name= "position"
//         {...props}
//         />
//     );
//   }
  
//   export function FormBtn(props) {
//     return (
//       <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//         {props.children}
//       </button>
//     );
//   }

export default SearchBar;