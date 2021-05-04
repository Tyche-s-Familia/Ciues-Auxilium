import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

import {
    ProjectInfo,
    Description
} from './DetailsStyles'

const ProjectView = ({item}) => {
    console.log(item);
    const [idetails, setIDetails] = useState(item);
    // console.log(idetails);
    return (
        // <ProjectInfo />
        <>
            <Link className='test' to={`details/${idetails.id}`}>
                <div>
                
                <h1 className='name'>{idetails.name}</h1>
                <h1 className='author_id'>{idetails.author_id}</h1>
                </div>
            {/* <Description>
                <h3 className='description'>{idetails.description}</h3>
            </Description> */}
            </Link>
        </>
    )
}

export default ProjectView
