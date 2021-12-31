import React from "react";
const Profile = ()=>{
    return(
        <>
            <div className="profile_card">
            <div className='p_img'>
                <img src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_960_720.png"/>
                </div><br/>
                <h2>Hello, {`Yourname`}</h2>
                <p>Welcome back</p>
                <p>{`yourname@email.com`}</p>
            </div>
        </>
    );
}
export default Profile;