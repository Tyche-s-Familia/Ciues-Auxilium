import React, { useState, useRef } from "react"
import { atom, useRecoilState } from 'recoil'

import {
    Search,
    FormButton,
    Input,
    Form
} from '../GlobalStyles'

export const searchState = atom({
	key: 'searchState',
	defalut: '',
})

const SearchBar = () => {
    
    const [input, setInput] = useState("")
    const [search, setSearch] = useRecoilState(searchState)
    const [barOpened, setBarOpened] = useState(false)
    const formRef = useRef()
    const inputFocus = useRef()

    const onFormSubmit = e => {
        e.preventDefault();
        setSearch(input)
        setInput("");
        setBarOpened(false);
        console.log(`Was submitted with input: ${input}`)
    }

    return (
        <Search>
            <Form
              barOpened={barOpened}
              onClick={() => {
                setBarOpened(true)
                inputFocus.current.focus()
              }}
              onFocus={() => {
                setBarOpened(true)
                inputFocus.current.focus()
              }}
              onBlur={() => {
                setBarOpened(false)
              }}
              onSubmit={onFormSubmit}
              ref={formRef}
            >
              <FormButton type="submit" value='submit' barOpened={barOpened}>
                Search:
              </FormButton>
              <Input
                onChange={e => setInput(e.target.value)}
                ref={inputFocus}
                value={input}
                barOpened={barOpened}
                placeholder="Search here..."
              />
            </Form>
          </Search>
    )
}

export default SearchBar
