import React from 'react'
import '../assets/css/loader.css'
function LoadingSpinner() {
    return (
        <>
        <div className="d-flex justify-content-center" style={{ height: '100vh', alignItems: 'center' }}>
            <div className="loader"></div>
        </div>
        
        </>
    )
}



export default LoadingSpinner