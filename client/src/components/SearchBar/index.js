
import React from "react";

function SearchBar(props) {
    return (

        <div style={{paddingTop: 30, paddingLeft: 50, paddingRight:50}}
            className="input-group input-group-lg">
            {/* <input style={{paddingRight: 30, width: 75}} className="form-control" type="text" placeholder="Position" {...props} />
            <input style={{marginLeft: 30, width: 75}} className="form-control" type="text" placeholder="Location" {...props}  /> */}
            {/* <i class='fas fa-search'></i> */}

        <div className="input-group input-group-lg">
            <input className="form-control" type="text" 
            {...props}></input>
        </div>
           
            {/* <input className="form-control" type="text" id="location" 
            name= "location"
            {...props}
            /> */}

            {/* <button id="submit-btn" class="btn btn-primary" type="submit">Submit</button> */}
        </div>

    )
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