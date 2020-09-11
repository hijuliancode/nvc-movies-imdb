import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Input, Row, Col } from 'antd'

import API_IMDB from '../../services/imdb.service'

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

const HomeComponent = () => {
  const [ movies, setMovies ] = useState([])
  const [ flagMovies, setFlagMovies ] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  }, [movies, flagMovies])

  const getMovie = async (movie_id) => {
    const data = await API_IMDB.getMovie(movie_id)
      .then(_resp => _resp)
      .catch(error => console.error('Error => ', error))
    return data
  }
  return (
    <HomeElm>
      <SearchWrapper>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onChange={e => console.log(e.target.value)}
          autoFocus
        />
      </SearchWrapper>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }} >
          <MovieComponent />
        </Col>
      </Row>

    </HomeElm>
  )
}

export default HomeComponent
