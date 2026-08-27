import React from "react";
 class Student extends React.Component{

    componentWillUnmount(){
        alert("componenteWillUnmount called");
        console.warn("component will call")
    }


    render(){
        return(

            <div className="student">
                <h1> Student Component </h1>
            </div>
        )
    }

 }

 export default Student;