import React from 'react'
import { Icon } from '@iconify/react';

function TablePlan(props) {
    return (
        <tr className={`${props.bg === "true" ? "bg-custom-color" : ""}`}>
            <th className='ps-3'>{props.title}</th>
            <th className='text-center'>{props.basic === "true" ? <Icon className="text-danger" icon="akar-icons:check" /> : ""}</th>
            <th className='text-center'>{props.premium === "true" ? <Icon className="text-danger" icon="akar-icons:check" /> : ""}</th>
            <th className='text-center'>{props.platinum === "true" ? <Icon className="text-danger" icon="akar-icons:check" /> : ""}</th>
        </tr>
    )
}

export default TablePlan