import React from 'react'

import {
    Updates,
    ProjectUpdates,
    UpdateDate,
    Description
} from './DetailsStyles'

const UpdatesView = () => {
    return (
        <Updates>
            <ProjectUpdates>USER’S PROJECTS</ProjectUpdates>
            <UpdateDate>Name of PROJECTS</UpdateDate>
            <Description>Detail of PROJECTS</Description>
        </Updates>
    )
}

export default UpdatesView
