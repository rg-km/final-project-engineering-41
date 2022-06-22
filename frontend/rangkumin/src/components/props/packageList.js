import React from 'react'
import Package from './package'
import '../../styles/cardSubscribe.css'

function PackageList(props) {

    const checkHandler = (e) => {
        props.setState(e.target.id)
    }
    return (
        <div className={`${props.state === props.title ? "custom-red-border" : ""} d-flex shadow custom-radius flex-column px-5 py-4`}>
            <h3 className='fw-bold'>{props.title}</h3>
            <p className='text-muted'>{props.desc}</p>
            <div className='d-flex align-items-center'>
                <h3 className='fw-bold'>{props.price}</h3>
                <div className="ms-1">/ bulan</div>
            </div>
            <h4 className='my-4 fw-bolder'>Basic Include:</h4>
            <Package title="Belajar mengenal UI/UX Design" />
            <Package title="Belajar membuat Design System" />
            <Package title="Belajar tentang typography" />
            <Package title="Design week setiap minggu" />
            <Package title="Membuat Project Website atau mobile" />
            {props.add === "true" ?
                <Package title="Membuat Project Website atau mobile" />
                :
                ""
            }
            <div className='mt-auto'>
                <button onClick={e => checkHandler(e)} id={props.title} className="custom-button-2 w-100 mt-4">Coba Gratis</button>
                <p className="text-muted text-center mt-3">*Syarat dan ketentuan berlaku</p>
            </div>

        </div>
    )
}

export default PackageList