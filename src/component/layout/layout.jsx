import React from 'react'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer'

const Loyout = ({ children }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FDFDFD"
        }}>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default Loyout