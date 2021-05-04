import React, { useEffect, useState } from "react"

import {
    ProjectInfo,
    Description
} from './DetailsStyles'

const ProjectView = (props) => {
    const [idetails, setIDetails] = useState(props.details);
    console.log(idetails);
    return (
        // <ProjectInfo />
        <>
            <div>
                <h1 className='name'>{idetails.name}</h1>
                <h1 className='author_id'>{idetails.author_id}</h1>
            </div>
            <Description>
                <h3 className='description'>{idetails.description}</h3>
            </Description>
            
        </>
    )
}

export default ProjectView
