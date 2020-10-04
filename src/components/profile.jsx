import React from 'react';
import {getUser} from "../state";

const Profile = (props)=>{
    let user = getUser();
    return (<div className="row">
                <div className="col-sm-3">
                    <img src={user.avatar} width="90%" alt=""/>
                </div>
                <div className="col-sm-9">
                    <h2>{user.name} {user.lastname}</h2>
                    <h4>Обо мне</h4>
                    <p>{user.about}</p>
                </div>
        </div>
    )
}

export default Profile;