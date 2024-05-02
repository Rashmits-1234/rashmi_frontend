import React,{Component} from 'react'
class Heading extends Component {
    constructor(props){
        super(props)
        this.state ={
            name:""
        }
    }
    render(){
        return (
            <div>Heading, {this.props.mark}</div>
        )
    }
}
export default Heading