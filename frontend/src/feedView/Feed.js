import React, { useEffect, useState } from "react"

import SearchBar from './SearchBar'
import TopNavBar from './TopNavBar'
import NavBar from './NavBar'
import MainArea from './MainArea'
import Footer from './Footer'

import APIurl from "../config"

import { atom, useRecoilState } from 'recoil'

import {
  Wrapper,
} from '../GlobalStyles'

const axios = require('axios').default

export const searchState = atom({
	key: 'searchState',
	defalut: '',
})

export default function Feed() {

	const [data, setData] = useState()
	const [search, setSearch] = useRecoilState(searchState)

  useEffect(() => {}, [data])

  useEffect(() => {
    if (search !== null && search !== undefined && search !== '') {
      axios
      .get(`${APIurl}projects`, {mode:'cors'})
      .then((res) => setData(
        res.data.filter((item) => item.name.lowerCase().includes(search.toLowerCase()))
      )
      )
      .catch(console.error)
    }
    else {
      axios
      .get(`${APIurl}projects`, {mode:'cors'})
      .then((res) => {
        setData(res.data)
      })
      .catch(console.error)
    }
  }, [search])
  
  console.log(data)

  if (data) {
    return (
      <Wrapper>
        <TopNavBar />
        <SearchBar />
        <NavBar />
        <MainArea data={data} />
        <Footer />
      </Wrapper>
    )
  }
  else {
    return <h1>Loading</h1>
  }
}
