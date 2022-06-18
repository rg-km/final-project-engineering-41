import React from 'react'
import TableRow from '../props/table.js'
import Table from 'react-bootstrap/Table';
import { Icon } from '@iconify/react';
import TablePost from '../props/tablepost.js';


function Post() {
    return (
        <>
            <div className='d-flex mt-5 align-items-center justify-content-between'>
                <div>
                    <h2 className='fw-bold'>Post Courses</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div style={{ border: "1px solid #D9D9D9" }} className="p-1 search-input">
                    <Icon style={{ maxWidth: "30px" }} icon="ant-design:search-outlined" />
                    <input style={{ color: "#D9D9D9" }} placeholder='Search..' />
                </div>
            </div>
            <div className="d-flex flex-column  align-items-center justify-content-center mt-5">
                <table className='w-100 flex justify-content-center'>
                    <thead>
                        <tr style={{ backgroundColor: "#F5F8F8" }}>
                            <th className='py-3 ps-4'>IdPost</th>
                            <th>Author</th>
                            <th>Judul</th>
                            <th>Pelajaran</th>
                            <th>Kategori</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <TablePost />
                        <TablePost />
                        <TablePost />
                    </tbody>
                </table>

                <div className='d-flex w-100 mt-5 justify-content-end'>
                    <button className='custom-button-2'>Add Post</button>
                </div>
            </div>

        </>
    )
}

export default Post