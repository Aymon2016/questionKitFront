import React from 'react'
import Footer from '../footer/footer'

const Loyout = ({ children }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FDFDFD"
        }}>
            {children}
            <Footer />
        </div>
    )
}

export default Loyout