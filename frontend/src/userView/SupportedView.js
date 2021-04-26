import React from 'react'

import {
    Supported,
    NameSup,
    DetailsSup,
    UserSup
} from './UsersStyles'

const SupportedView = () => {
    return (
        <Supported>
            <UserSup>USER’S SUPPORTED PROJECTS</UserSup>
            <NameSup>Name of SUPPORTED</NameSup>
            <DetailsSup>Detail of SUPPORTED</DetailsSup>
        </Supported>
    )
}

export default SupportedView
