import React from 'react'
import styled from 'styled-components'

import { Input, Row, Col } from 'antd'



// Components
import MovieComponent from '../Movie'
const { Search } = Input

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

    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }} >
        <MovieComponent/>
      </Col>
    </Row>
    
  </HomeElm>
)

export default HomeComponent
