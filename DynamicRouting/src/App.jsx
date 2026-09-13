import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import User from "./User";

function App() {
  const users = [
    { id: 1, name: "anil", email: "anil@test.com" },
    { id: 2, name: "Sachin", email: "sachin@test.com" },
    { id: 4, name: "Rohit", email: "rohit@test.com" },
    { id: 5, name: "Kamlesh", email: "kamlesh@test.com" },
    { id: 6, name: "Vikash", email: "vikash@test.com" },
    { id: 7, name: "Sunny", email: "sunny@test.com" },
    { id: 8, name: "Arun", email: "arun@test.com" },
  ];

  return (
    <Router>

      <h1>React Dynamic Routing</h1>

      {users.map((item) => (
        <div key={item.id}>
          {/* har user ke liye link banata hai ye link ke liye id return karrta hai jaise item.id ke liye 1,2,3 etc */}

          <Link to={"/user/" + item.id + "/"+ item.name}>
            <h3>{item.name}</h3>
          </Link>

            {/* <Link>React Router ka component hai, jo page ko full reload kiye bina URL change karta hai.reactrouter iske alava ye ek page se dusre page par le jata hai  */}


        </div>
      ))}

      <Routes>
        <Route path="/user/:id/:name" element={<User />} />
      </Routes>

    </Router>
  );
}

export default App;