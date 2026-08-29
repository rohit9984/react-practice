import{useParams} from "react-router-dom"
function User(){

    const params = useParams();
    const {name} = params;
    console.warn(name)


    return(
        <div>
            <h1>
                This is User {name}'s Page
            </h1>
        </div>
    )

}

export default User