

import React from "react";
import "./style.css";



function RegisterForm(props) {

    return (


        <form>
        <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            
        </div>
        
        <div className="form-group">
            <label for="exampleInputPassword1">Position</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="">
        </div>
        
        <div className="form-group">
            <label for="exampleInputPassword1">Bio</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="">
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Location:</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="">
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Rate/hr</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="">
        </div>
        
        {/* <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">I have read the Terms</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>


)
}
export default RegisterForm;