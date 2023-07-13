import React from "react";

function Users(props){
    return(
        <div>
            <h2>This is the Users.jsx file </h2>
            <h3>{props.data.name}</h3>
            <h3>{props.data.age}</h3>
        </div>
    )
}

export default Users;