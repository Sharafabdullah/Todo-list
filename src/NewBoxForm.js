import React, { Component } from 'react'

class NewBoxForm extends Component {
    constructor(props){
        super(props)

        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }


    handleSubmit(e){
        e.preventDefault()
        this.props.createBox()
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="height" name='height'onChange={this.handleChange} />
                <input type="text" id="width" name='width' onChange={this.handleChange} />
                <input type="text" id="bgColor" name='bgColor' onChange={this.handleChange} />
                <button>Add a new Box</button>
            </form>
        )
    }
}
export default NewBoxForm