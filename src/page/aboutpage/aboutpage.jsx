import React from 'react'
import NavBar from '../../component/navBar/navBar'
import Aboutsection from '../../component/aboutsection/aboutsection'
import FeatureSection from '../../component/featuresection/featuresection'

const Aboutpage = () => {


    return (
        <div style={{
            backgroundColor: '#369FE4'
        }}>
            <NavBar color='#369FE4' />
            <Aboutsection />
            <FeatureSection background='#FCBA4D' />
        </div>
    )
}

export default Aboutpage