import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import './TodoList.css'
class TodoList extends Component {

    render() {
        return (
            <div className="TodoList">
            <header>
                <h1>Todo List!</h1>
                <p>a simple react todo app</p>
            </header>
                <Todo/>
            <footer>
                <NewTodoForm/>
            </footer>
            </div>
        )
    }
}
export default TodoList
