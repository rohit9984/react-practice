import React from 'react';
export default class Student extends React.Component{

    

    render(){

        console.log("Hello jee meri");

        
        return(

           <div style={{backgroundColor: "Yellow", padding: "10px"} }>
            
            <h1>Student {this.props.name}</h1>

           <h3>Student Email : {this.props.email}</h3>

           
        
           </div>

            
        )
    }
}
