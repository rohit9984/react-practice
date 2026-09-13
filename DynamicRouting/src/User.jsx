import { useParams } from "react-router-dom";

function User() {
  const { id, name } = useParams(); 

// useParams() React Router ka hook hai. Iska use URL ke dynamic parameter ko read karne ke liye hota hai—for example, URL mein user ID, product ID, ya post ID lena. React Router matched route ke parameters ko object ke form mein return karta hai. object ka use react ke XML ME {} ke andar print karane ke liye kar sakte ho
// reactrouter


  console.warn(id);

  return (
    <div>
      <h1>Hi this is an user id {id}</h1>
      <h1>Hi Your Name is  {name}</h1>
    </div>
  );
}

export default User;