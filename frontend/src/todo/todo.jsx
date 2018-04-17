import React, { Component } from 'react'
import Header from '../template/header.jsx'
import TodoForm from './todoForm.jsx'
import TodoList from './todoList.jsx'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e) {
        this.setState({description: e.target.value })
    }

    handleAdd() {
        console.log(this.state.description)
    }

    render() {
        return (
            <div>
                <Header name='Tarefas' small='Cadastro'/>
                <TodoForm description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                <TodoList />
            </div>
        )
    }
}