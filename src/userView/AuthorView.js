import React from 'react'

import {
    Author,
    AuthorName,
    AuthorImg,
    AuthorDetail
} from './UsersStyles'

const AuthorView = () => {
    return (
        <Author>
            <AuthorName>AUTHOR NAME && BIO</AuthorName>
            <AuthorImg>IMG</AuthorImg>
            <AuthorDetail>Detail</AuthorDetail>
        </Author>
    )
}

export default AuthorView
