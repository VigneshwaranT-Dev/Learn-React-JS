import React from "react"

export class Works extends React.Component{
    constructor() {
        super();
        this.state = {designation: 'Front End Developer'}
        console.log(this.state);
    };
    render(){
        const {work} = this.props;
        const { company } = work
        
        return(
            <>
                <h3>I'm Working as a {this.state.designation} in {company}</h3> 
                <button className="btn btn-primary" onClick={() => {
                    this.state.designation === 'Full Stack Developer' ? this.setState({designation: 'Front End Developer'}) : this.setState({designation: 'Full Stack Developer'})
                }}>
                    Click Me
                </button>
            </>
        )
    }
}