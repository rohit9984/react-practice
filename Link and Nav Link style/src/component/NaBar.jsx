import {Link, NavLink} from 'react-router-dom'
function NavBar(){
    return(
        <div>
      

       <ul className='navbar'>
        <li><NavLink className ="nav-bar-link" style={({isActive})=>{return {color: isActive ? 'green' :'red'}}} to="/">Home</NavLink></li>
        <li><NavLink className ="nav-bar-link" style={({isActive})=>{return {color: isActive ? 'green' :'red'}}} to="/about">About</NavLink> </li>
        <li><NavLink className ="nav-bar-link" style={({isActive})=>{return {color: isActive ? 'green' :'red'}}} to="/contact">Contact</NavLink></li>
     
     
       </ul> 
      



      

{/* <li><a href='/' >Home </a></li>


<li><a href='/about'>About </a></li> */}


{/* <li><Link to = "/contact">Contact</Link></li> */}

        </div>
    )
}
export default NavBar