function Reciver(props)
{

    const data = {name: 'anil sidhu', email: 'anil@test.com'}
    return(
        <>
        <h2>User Name : </h2>
        <button onClick={() => props.alert(data)}> Click Me </button>


        </>
    )
}

export default Reciver;