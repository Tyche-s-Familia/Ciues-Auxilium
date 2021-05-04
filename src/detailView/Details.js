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

    // useEffect(() => {
    //     console.log(details);
    // }, [details]);

    if (details) {
    return (
        <>
        
            <Wrapper>
                <TopNavBar />
                <ProjectView details={details}/>
                <UpdatesView />
                <Footer />
            </Wrapper>
        </>
    )
    } else {
        return <h1>Loading</h1>
    }
}

export default Details
