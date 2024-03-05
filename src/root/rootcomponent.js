import React from 'react';
import Logo from '../components/app/logo';
import Tweetlist from '../components/app/tweetlist';
import RemoteAPI from '../components/remote/remoteapi';

// class  extends Component {   /// class based component, ccc (not used anymore)
//     constructor(props) {
//         super(props);
//     }
//     state = {  }
//     render() { 
//         return (  );
//     }
// }

// export default ;

// functional based component, ffc
function Root() {
    return (
        <div> 
            <h1>I am root component</h1>
            <Logo></Logo>
            <Tweetlist></Tweetlist>
            <RemoteAPI></RemoteAPI>
        </div>

    );
}

export default Root;

