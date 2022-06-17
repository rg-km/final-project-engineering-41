import React from 'react'
import { Icon } from '@iconify/react';
import userIcon from '../../assets/userIcon.png'


function TablePost() {
    return (
        <tr style={{ borderBottom: "1px solid #D9D9D9" }}>
            <th className='py-4 ps-4 fw-bold'>P-12/21/22</th>
            <th className='fw-normal'>John Doe</th>
            <th className='fw-normal'>Materi Pengertian, Karakteristik dan Komponen Sistem Produksi</th>
            <th className='fw-normal'>Matematika</th>
            <th className='fw-normal' >SMA/K</th>
            <th>
                <div className='d-flex'>
                    <div style={{ backgroundColor: "#00B929" }} className='px-3 d-flex justify-content-center align-items-center text-light rounded-3'>
                        <Icon icon="bx:edit-alt" />
                    </div>
                    <div className='ms-3 px-3 border border-danger text-danger'>
                        <Icon icon="ci:trash-full" />
                    </div>
                </div>
            </th>
        </tr>
    )
}

export default TablePost