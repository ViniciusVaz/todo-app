import React from 'react'
import If from '../helpers/if.jsx'

export default props => (
    <If test={!props.hide}>
        <button className={`btn btn-${props.style}`} onClick={props.onClick}>
            <i className={`fa fa-${props.icon}`}></i>
        </button>
    </If>
)