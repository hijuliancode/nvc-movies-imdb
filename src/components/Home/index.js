import React from 'react'
import styled from 'styled-components'

import { Input } from 'antd'

// Components
const { Search } = Input;

// Styles
const HomeElm = styled.div`
  padding: ${props => props.theme.baseSize * 6}px;
  width: 100%;
`
const SearchWrapper = styled.div`
  margin-bottom: ${props => props.theme.baseSize * 6}px;
`

const HomeComponent = () => (
  <HomeElm>
    <SearchWrapper>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={value => console.log(value)}
      />
    </SearchWrapper>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, minima hic sint cumque in deleniti dignissimos nam inventore eius, quia facilis distinctio natus, commodi similique voluptates. Officiis maxime dolore quidem.
  </HomeElm>
)

export default HomeComponent
