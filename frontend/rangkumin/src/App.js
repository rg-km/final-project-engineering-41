import React from 'react'
// import Hero from './components/hero'
// import Modal from './components/props/modal'
import Footer from './components/footer'
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import Settings from './components/adminSettings'
// import CardSubscribe from './components/cardSubscribe'


function App() {
    // const [state, setState] = React.useState(false)
    // const [logo, setLogo] = React.useState("BNI")
    // console.log(logo)
    return (
        <>
            <div className="position-relative">
                {/* {state ? <Modal logo={logo} setState={setState} /> : ""} */}
                <div>
                    <Header />
                    <Routes>
                        {/* <Route path="/" element={<Hero setLogo={setLogo} setState={setState} />} /> */}
                        <Route path="/settings" element={<Settings />} />
                        {/* <Route path="/plan" element={<CardSubscribe />} /> */}
                    </Routes>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default App