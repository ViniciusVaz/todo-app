import 'bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Menu from './menu/menu.jsx'
import Routes from '../routes.jsx'

export default props => {
    return (
        <div className='container'>
            <Menu />
            <Routes />
        </div>
    )
}