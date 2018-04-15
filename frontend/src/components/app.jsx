import React from "react"
import Todo from './todo/todo.jsx'
import About from '../components/about/about.jsx'

export default props => {
    return (
        <div className='container'>
            <Todo />
            <About />
        </div>
    )
}