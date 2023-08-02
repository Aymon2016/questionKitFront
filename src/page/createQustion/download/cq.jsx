import React from 'react'
import { useLocation } from 'react-router-dom';
const CqDownload = () => {

    const location = useLocation();
    const dataReceived = location.state;
    console.log(dataReceived)

    return (
        <div>CqDownload</div>
    )
}

export default CqDownload