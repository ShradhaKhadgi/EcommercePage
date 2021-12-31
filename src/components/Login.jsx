import React from "react";
const Login = () =>{
    return(
        <>
            <div className="profile_card">
            <h2 className="my-4">Login</h2>
            <div className="col-md-8">
            <label className="form-label">Username</label>
            <input type="text" className="form-control mx-5" id="inputUname"/>
        </div>
        <div className="col-md-8">
            <label className="form-label">Password</label>
            <input type="text" className="form-control mx-5" id="inputPwd"/>
        </div>
        <div className="col-12">
            <button type="button" className="btn btn-primary my-4">Login</button>
        </div>
            </div>
        </>
    );
}
export default Login;