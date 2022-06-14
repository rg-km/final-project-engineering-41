import React from 'react'

function RenderImage(props) {


    const handleImage = () => {
        props.setState(true)
        props.setLogo(props.logoName)
    }

    return (
        <div onClick={() => handleImage()} className="d-flex align-items-center">
            <input name="bank" type="radio"></input>
            <img className="logo-bank" src={props.image} alt="" />
        </div>
    )
}

export default RenderImage