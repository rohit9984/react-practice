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
          <Link to={"/user/" + item.id + "/"+ item.name}>
            <h3>{item.name}</h3>
          </Link>
        </div>
      ))}

      <Routes>
        <Route path="/user/:id/:name" element={<User />} />
      </Routes>

    </Router>
  );
}

export default App;