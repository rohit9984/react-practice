import {useState} from 'react'
function Profile(){
    
    const [loggedIn, setLoggedIn] = useState(1)
return(
    <div>
        {/* {loggedIn?<h1>Right</h1>:<h1>Welcome</h1>} */}

        {loggedIn == 1?
<h1>Welcome User 1</h1>
: loggedIn == 2 ?< h1>Welcome User2</h1>
:< h1>Welcome User3</h1>}
    </div>
)
}
export default Profile;