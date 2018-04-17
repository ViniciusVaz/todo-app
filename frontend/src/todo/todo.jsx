import React, { Component } from 'react'
import axios from 'axios'

import Header from '../template/header.jsx'
import TodoForm from './todoForm.jsx'
import TodoList from './todoList.jsx'

const URL = 'http://localhost:4004/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(response => this.setState({description: '', list: response.data}))
    }

    handleChange(e) {
        this.setState({description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description

        axios.post(URL, { description })
            .then(response => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(response => this.refresh())
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, {done: true})
            .then(response => this.refresh())
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, {done: false})
            .then(response => this.refresh())
    }

    render() {
        return (
            <div>
                <Header name='Tarefas' small='Cadastro'/>
                <TodoForm 
                    description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                <TodoList 
                    list={this.state.list} 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove}/>
            </div>
        )
    }
}