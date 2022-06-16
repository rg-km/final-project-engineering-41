import React from 'react'

function RenderImage(props) {


    const handleImage = () => {
        props.setState(true)
        props.setLogo(props.logoName)
    }

    return (
        <div onClick={() => handleImage()} className="d-flex w-100 justify-content-between align-items-center">
            <input name="bank" type="radio"></input>
            <div className="d-flex justify-content-center align-items-center">
                <img className="logo-bank" src={props.image} alt="" />
            </div>
        </div >
    )
}

export default RenderImage