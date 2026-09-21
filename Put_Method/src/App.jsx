// import React, { useState } from "react";

// export default function ProblemComponent() {
//   const [user, setUser] = useState(null);

//   // 🚨 DANGER: Direct component body ke andar fetch call
//   console.log("🔥 API Call gayi aur Component Render hua!");

//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((res) => res.json())
//     .then((data) => {
//       // Yahan state change ho rahi hai!
//       setUser(data); 
//     });

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h2>Bina useEffect Wala Component</h2>
//       {user ? <p>User: {user.name}</p> : <p>Loading...</p>}
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";

export default function SafeComponent() {
  const [user, setUser] = useState(null);

  // 🛡️ SOLUTION: useEffect lagaya with empty array []
  useEffect(() => {
    console.log("✅ API Call sirf EK BAAR chalegi!");

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []); // <-- Ye [] magic bracket hai!

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>useEffect Wala Safe Component</h2>
      {user ? <p>User: {user.name}</p> : <p>Loading...</p>}
    </div>
  );
}