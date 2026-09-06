import {Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Register from './Register';

function Navbar(){

    return(

        <div>
        <h1>Hello Guise This is a navbar</h1>
        

        <li> <Link to = "/">Home</Link></li>
        <li> <Link to = "/About">About</Link></li>
        <li> <Link to = "/Register">Register</Link></li>

        
        <li>{<Home/>}</li>
        <li>{<About/>}</li>
        <li>{<Register/>}</li>

        <></>
        </div>
    )

}
export default Navbar