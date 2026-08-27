// import User from './User';


// function App() {
//   return (
//     <div>
//       <h1>Welcome</h1>
//       <User />
//     </div>
//   );
// }

// export default App;




// if you want to not use default keyword then use it 

import { User } from './User';
import MultiFunction from './MultiFunction';

function App() {


   function hello() {
    alert("Hello Rohit");
  }

  function bye() {
    alert("Good Bye");
  }


  return (
    <div>
      <button onClick={hello}>HELLO</button>
      <button onClick={bye}>BYE</button>

      <MultiFunction/>
      <User />
    </div>
  );
}

export default App;