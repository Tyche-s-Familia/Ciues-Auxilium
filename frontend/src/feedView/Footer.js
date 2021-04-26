import React from 'react'

import {
    Foot,
    GitLink,
    Philosophy
} from '../GlobalStyles'

const Footer = () => {
    return (
        <Foot>
            <GitLink to='github' >GitHub</GitLink>
            <Philosophy to='philosophy' >Philosophy</Philosophy>
        </Foot>
    )
}

export default Footer
