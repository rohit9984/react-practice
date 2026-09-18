import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Store all products received from the backend
  const [users, setUser] = useState([]);

  // Store ID of product currently being edited
  const [userId, setUserId] = useState(null);

  // Store selected product name
  const [name, setName] = useState("");

  // Store selected product price
  const [price, setPrice] = useState("");

  // useEffect runs once when the component mounts
  useEffect(() => {
    getUsers();
  }, []);

  // =====================================================
  // GET ALL PRODUCTS
  // =====================================================
  function getUsers() {
    fetch("http://localhost:8080/api/products")
      .then((result) => result.json())
      .then((resp) => {
        setUser(resp);

        // Pre-fill fields with first item if available
        if (resp && resp.length > 0) {
          setUserId(resp[0].id);
          setName(resp[0].name);
          setPrice(resp[0].price);
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
      });
  }

  // =====================================================
  // DELETE PRODUCT
  // =====================================================
  function deleteUser(id) {
    fetch(`http://localhost:8080/api/products/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        if (!result.ok) throw new Error("Failed to delete");
        // Re-fetch updated list after successful deletion
        getUsers();
      })
      .catch((error) => {
        console.error("Delete Error:", error);
      });
  }

  // =====================================================
  // SELECT PRODUCT FOR UPDATE
  // =====================================================
  function selectUser(id) {
    const item = users.find((user) => user.id === id);

    if (item) {
      setUserId(item.id);
      setName(item.name);
      setPrice(item.price);
    }
  }

  // =====================================================
  // UPDATE PRODUCT
  // =====================================================
  function updateUser() {
    if (!userId) {
      alert("Please select an item to update first.");
      return;
    }

    const payload = { name, price };

    fetch(`http://localhost:8080/api/products/${userId}`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((result) => {
        if (!result.ok) throw new Error("Failed to update");
        return result.json();
      })
      .then((resp) => {
        console.log("Updated:", resp);
        getUsers(); // Refresh list with updated values
      })
      .catch((error) => {
        console.error("Update Error:", error);
      });
  }

  // =====================================================
  // INLINE CSS
  // =====================================================
  const sty = {
    backgroundColor: "green",
    color: "white",
    textAlign: "center",
    padding: "8px",
  };

  // =====================================================
  // UI / JSX
  // =====================================================
  return (
    <div className="app">
      {/* Product Table */}
      <table border={1} cellPadding={8} style={{ margin: "20px 0" }}>
        <thead>
          <tr>
            <td colSpan={4}>
              <section style={sty}>Pre-filled table</section>
            </td>
          </tr>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => deleteUser(product.id)}>
                  Delete
                </button>{" "}
                <button onClick={() => selectUser(product.id)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* =================================================
          UPDATE FORM
          ================================================= */}
      <div style={{ marginTop: "20px" }}>
        <h3>Update Item</h3>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
        />
        <br />
        <br />

        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter product price"
        />
        <br />
        <br />

        <button onClick={updateUser}>
          Update Product
        </button>
      </div>
    </div>
  );
}

export default App;