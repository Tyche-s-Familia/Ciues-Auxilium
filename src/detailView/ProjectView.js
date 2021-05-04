import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

import {
    ProjectInfo,
    Description
} from './DetailsStyles'

const ProjectView = ({item}) => {

    const [idetails, setIDetails] = useState(item);

    return (

        <>
            <Link className='test' to={`details/${idetails.id}`}>
                <div>
                
                <h1 className='name'>{idetails.name}</h1>
                <h1 className='author_id'>{idetails.author_id}</h1>
                </div>
            </Link>
        </>
    )
}

export default ProjectView
