import React from "react"

import SearchBar from './SearchBar'
import TopNavBar from './TopNavBar'
import NavBar from './NavBar'
import MainArea from './MainArea'
import Footer from './Footer'

import { atom, useRecoilState } from 'recoil'

import {
  Wrapper,
} from '../GlobalStyles'

const axios = require('axios').default

export const searchState = atom({
	key: 'searchState',
	defalut: '',
})

const Feed = () => {
    return (
        <Wrapper>
          <TopNavBar />
          <SearchBar />
          <NavBar />
          <MainArea />
          <Footer />
        </Wrapper>
    )
}

export default Feed
