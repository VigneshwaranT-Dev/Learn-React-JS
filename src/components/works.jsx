import React from "react"

export class Works extends React.Component{
    constructor() {
        super();
        this.state = {designation: 'Front End Developer', company: 'SimpleSolve Technologies PVT. LTD'}
        console.log(this.state);
    };
    render(){
        const {work} = this.props;
        const { company } = work
        console.log(this.state);
        
        return(
            <>
                <h3>I'm Working as a {this.state.designation} in {this.state.company}.</h3> 
                {/* <button className="btn btn-primary" onClick={() => {
                    this.state.designation === 'Full Stack Developer' ? this.setState({designation: 'Front End Developer'}) : this.setState({designation: 'Full Stack Developer'})
                }}>
                    Click Me
                </button> */}
                <button className="btn btn-primary" onClick={() => {
                    this.setState((prev) => {
                        return {
                            ...prev, company: 'Google'
                        }
                    })
                }}>
                    Click Me
                </button>
            </>
        )
    }
}