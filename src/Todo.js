import React, { Component } from 'react'
import './Todo.css'
class Todo extends Component {
    static defaultProps={
        content: ['hi there', "I'm sharaf", "this is a test for the todo app functionality"]
    }
    constructor(props){
        super(props)

        this.state={
            isEditing: false
        }
        this.handleClick=this.handleClick.bind(this)
        this.editForm=this.editForm.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleClick(e){
        e.target.innerHTML==='Remove' && e.target.parentElement.parentElement.remove()
        if(e.target.innerHTML==='Edit'){
            this.editForm(e)
            this.setState({isEditing: true})

        }
    }

    editForm(e){
        return (
            <form onSubmit={this.handleSubmit} className="editForm">
                <input className="editInput" type='text' id='edit' placeholder="edit"/>
                <button>SAVE</button>
            </form>
        )
    }
    handleSubmit(e){
        e.preventDefault()
        console.log(e)
    }
    render() {

        const makeTodo = this.props.content.map(todo=>{
            if(!this.state.isEditing){
                return (<li className="TodoItem" key={todo}>{todo}
                    <span>
                        <span onClick={this.handleClick}>Remove</span>
                        <span onClick={this.handleClick}>Edit</span>
                    </span>
                    </li>)
            }else if(this.state.isEditing){
                return this.editForm()
            }
            
        })
        return (
            <div className="Todo">
                {makeTodo}
                <li className="TodoItem">
                
                </li>
                
            </div>
        )
    }
}
export default Todo