import React, { useEffect, useState } from "react"


import TopNavBar from '../feedView/TopNavBar'
import Footer from '../feedView/Footer'
import ProjectView from './ProjectView'
import UpdatesView from './UpdatesView'

import {
    Wrapper
} from './DetailsStyles'

const axios = require('axios').default

const Details = ({match}) => {
    const id = match.params.id
    console.log(id);
    const [details, setDetails] = useState();
    const url = `https://notpatreon-deploy.herokuapp.com/projects/${id}`
    console.log(url);
    useEffect(() => {
        axios
        .get(`${url}`, {mode:'cors'})
        .then((res) => {
            console.log(res.data);
            setDetails(res.data);
        })
        .catch(console.error);

    },[])

    useEffect(() => {
        console.log(details);
    }, [details]);

    if (details) {
    return (
        <>
            <TopNavBar />
                <div>
                    <h1 className='name'>{details.name}</h1>
                    <h1 className='author_id'>{details.author_id}</h1>


                    <h3 className='description'>{details.description}</h3>
                </div>

        </>
    )
    } else {
        return <h1>Loading</h1>
    }
}

export default Details
