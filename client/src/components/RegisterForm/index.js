

import React from "react";
import "./style.css";



function RegisterForm(props) {

    return (
        <form>
        <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="name" className="form-control" {...props}/>
            
        </div>
        
        <div className="form-group">
            <label for="exampleInputPassword1">Position</label>
            <input type="password" className="form-control" {...props}/>
        </div>
        
        <div className="form-group">
            <label for="exampleInputPassword1">Bio</label>
            <input type="name" className="form-control" {...props}/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Location</label>
            <input type="name" className="form-control" {...props}/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Rate/hr</label>
            <input type="name" className="form-control" {...props}/>
        </div>
        
       
        <button {...props} type="submit" className="btn btn-primary">{props.children}</button>
        </form>

    );
}
export default RegisterForm;