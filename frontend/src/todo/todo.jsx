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
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(response => this.setState({ description, list: response.data}))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleChange(e) {
        this.setState({description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        
        if (description.length > 0) {
            axios.post(URL, { description })
                .then(response => this.refresh())
        }
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

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <Header name='Tarefas' small='Cadastro'/>
                <TodoForm 
                    description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}/>
                <TodoList 
                    list={this.state.list} 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove}/>
            </div>
        )
    }
}