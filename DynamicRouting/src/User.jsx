import { useParams } from "react-router-dom";

function User() {
  const { id, name } = useParams();

  console.warn(id);

  return (
    <div>
      <h1>Hi this is user no {id}</h1>
      <h1>Hi this is {name}</h1>
    </div>
  );
}

export default User;