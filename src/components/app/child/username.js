import React from 'react';

function Username(props) {
    return ( 
        <div style={{borderBottom: '2px solid blue'}}>
            {"@"+props.user1}
        </div>
     );
}

export default Username;