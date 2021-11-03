import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div style={{display: 'flex',  width: '100%', height:'10vh', backgroundColor:'gray'}}>
            <div style={{width:'20vw', backgroundColor:'darkgray', display:'flex', alignItems: 'center', justifyContent: 'center'}}>ArchSiteLogo</div>
            <div style={{display:'flex', alignItems: 'center', width:'80vw', justifyContent: 'right'}}>
                <Link to='/'>HOME</Link>
                <Link to='/about'>NOSOTROS</Link>
                <Link to='/approach'>ACERCAMIENTO</Link>
                <Link to='/contact'>CONTACTO</Link>
            </div>
        </div>
    )
}

export default Navbar
