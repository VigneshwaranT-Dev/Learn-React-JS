import React from "react"

export class Works extends React.Component{
    render(){
        const {work} = this.props;
        const {designation, company} = work
        return(
           <h3>I'm Working as a {designation} in {company}</h3> 
        )
    }
}