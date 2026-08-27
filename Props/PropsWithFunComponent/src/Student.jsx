function Student(props) {
  console.log("props.name");

  return (
    <div style={{ backgroundColor: "lavender" }}>
      <h1>Name: {props.name}</h1>

      {/* <h2>Email: {props.email}</h2>

      <h4>Address: {props.other.address}</h4>
      <h4>Mobile: {props.other.mobile}</h4> */}
      
    </div>
  );
}

export default Student;
