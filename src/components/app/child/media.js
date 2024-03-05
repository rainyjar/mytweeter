import React from 'react';

function Media(props) {
    return (
 
            <img src={require(`../../../asset/` + props.media)} alt=""width={400}></img>
      
    );
}

export default Media;