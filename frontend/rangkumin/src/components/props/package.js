import React from 'react'
import { Icon } from '@iconify/react';
import '../../styles/package.css'

function Package(props) {
    return (
        <div className='d-flex align-items-center my-3'>
            <div className='shape position-relative'>
                <Icon className="text-danger position-absolute check" icon="akar-icons:check" />
            </div>
            <div className="ms-3">
                {props.title}
            </div>
        </div>
    )
}

export default Package