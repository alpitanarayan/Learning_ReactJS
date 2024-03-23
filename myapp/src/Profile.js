import {useState} from 'react'

// Not Recommended------>

// function Profile(){
//     const [loggedIn, setLoggedIn] = useState(false)
//     if (loggedIn){
//     return(
//         <div>
//             <h1>Welcome Alpita</h1>
//         </div>
//         )
//     }

//     else{
//         return(
//             <div>
//                 <h1> Welcome Guest </h1>
//             </div>
//         )
//     }

// }

function Profile (){
    const [loggedIn, setLoggedIn] = useState(1)
    return (
        <div>
            {/* IF-ELSE CONDITION */}
            {loggedIn ? <h1>Welcome Alpita !!</h1> : <h1>Welcome Guest !!</h1>}

            {/* IF-ELSE-IF CONDITION*/}
            {loggedIn == 1 ? <h1>Welcome User 1 </h1> : loggedIn == 2 ? <h1> Welcome User2 </h1> : <h1> Welcome Guest</h1>}
        </div>
    )
}

export default Profile;