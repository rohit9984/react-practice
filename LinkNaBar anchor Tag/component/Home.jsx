import {Link} from "react-router-dom"
function Home() {
  return (
    <div>
      <h1>Home Page.</h1>
      <p>This is a Home Page oue asesome App</p>
      <p>And here we learning about react</p>

      <Link to = "/about">Go to About Page</Link>
      
    </div>
  );
}

export default Home;