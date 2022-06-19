import React from 'react'
import Footer from './components/footer'
import Hero from './components/hero'
import Nav from './components/nav'
import Modal from './components/props/modal'

import './App.css'


function App() {

    const [state, setState] = React.useState(false)
    const [logo, setLogo] = React.useState("BNI")
    console.log(logo)
    return (
        <div>
            {state ? <Modal logo={logo} setState={setState} /> : ""}
            <Nav />
            <Hero setLogo={setLogo} setState={setState} />
            <Footer />
        </div>
    )
}

export default App