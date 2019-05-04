

import React from "react";
import "./style.css";



function RegisterForm(props) {

    return (
<<<<<<< HEAD
        <form>
        <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="name" className="form-control" {...props}/>
=======


        <form>
        <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
>>>>>>> master
            
        </div>
        
        <div className="form-group">
            <label for="exampleInputPassword1">Position</label>
<<<<<<< HEAD
            <input type="password" className="form-control" {...props}/>
=======
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="">
>>>>>>> master
        </div>
        
        <div className="form-group">
            <label for="exampleInputPassword1">Bio</label>
<<<<<<< HEAD
            <input type="name" className="form-control" {...props}/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Location:</label>
            <input type="name" className="form-control" {...props}/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Rate/hr</label>
            <input type="name" className="form-control" {...props}/>
        </div>
        
       
        <button {...props} type="submit" className="btn btn-primary">{props.children}</button>
        </form>

    );
=======
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
>>>>>>> master
}
export default RegisterForm;