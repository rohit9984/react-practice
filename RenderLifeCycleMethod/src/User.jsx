import React from 'react'
class User extends React.Component{



    render(){

        console.log("I am inside the render", this.props);


        return(

            <div>
            <h1> HELLO {this.props.name}</h1>

            
            </div>

        )

    }
}

export default User;