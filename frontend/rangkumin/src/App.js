import React from 'react'
import Hero from './components/hero'
import Modal from './components/props/modal'
import FooterCopy from './components/footerCopy'
import Header from './components/headerCopy'
import { Routes, Route } from 'react-router-dom'
import CardSubscribe from './components/cardSubscribe'
import { Card } from 'react-bootstrap'


function App() {
    const [state, setState] = React.useState(false)
    const [logo, setLogo] = React.useState("BNI")
    console.log(logo)
    return (
        <>
            {/* <div className="position-relative">
                {state ? <Modal logo={logo} setState={setState} /> : ""}
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Hero setLogo={setLogo} setState={setState} />} />
                        <Route path="/plan" element={<CardSubscribe />} />
                    </Routes>
                    <FooterCopy />
                </div>
            </div> */}
            <CardSubscribe />
        </>
    )
}

export default App