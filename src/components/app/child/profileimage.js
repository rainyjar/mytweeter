import React from 'react';

function ProfileImage(props) {
    return ( 
        <div>
            {/* <img src={require(`../../../asset/` + props.profile)} alt="" height={70} width={80}></img> */}
            <img src={props.profile} alt="" height={70} width={80}></img>
        </div>
     );
}

export default ProfileImage;