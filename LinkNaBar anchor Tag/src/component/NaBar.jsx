import {Link} from 'react-router-dom'
function NaBar(){
    return(
        <div>
      

       <ul>
        <li><Link to="/about">About</Link> </li>
        <li><Link to="/">Home</Link></li>
     
      <li><Link to="/user/anil">Anil</Link></li>
      <li><Link to="/user/rohit">Rohit</Link></li>
       </ul> 
      



      

{/* <li><a href='/' >Home </a></li>


<li><a href='/about'>About </a></li> */}


{/* <li><Link to = "/contact">Contact</Link></li> */}

        </div>
    )
}
export default NaBar