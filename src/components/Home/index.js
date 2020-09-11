import React, { useState } from 'react'
import styled from 'styled-components'

import { Input, Row, Col, Alert } from 'antd'

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
const AlertElm = styled(Alert)`
  margin-bottom: ${props => props.theme.baseSize * 6}px;
`

const HomeComponent = () => {
  const [ movies, setMovies ] = useState({})
  const [ loading, setLoading ] = useState(true)
  const [ querySearch, setQuerySearch ] = useState('')
  const [ errorForm, setErrorForm ] = useState(false)
  const [ results, setResults ] = useState(true)

  const getMovies = async (query) => {
    const data = await API_IMDB.getMovies(query)
      .then(_resp => _resp)
      .catch(error => console.error('Error => ', error))
    return data
  }

  const formSubmit = (e) => {
    e.preventDefault()
    console.log('buscando...', querySearch)
    if (!querySearch) {
      setErrorForm(true)
    } else {
      setLoading(true)
      getMovies(querySearch)
        .then(resp => {
          if(resp.data.total_results > 0) {
            setMovies(resp.data)
            setResults(true)
          } else {
            setMovies([])
            setResults(false)
          }
          setLoading(false)
        })
      setErrorForm(false)
    }
  }
  return (
    <HomeElm>

      <SearchWrapper>
        <form onSubmit={(e) => formSubmit(e)}>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onChange={e => setQuerySearch(e.target.value)}
            autoFocus
          />
        </form>
      </SearchWrapper>

      {(
        (errorForm)
          ? <AlertElm message="Please write a valid name" type="warning" closeText="Close" />
          : null
      )}
      {(
        (!results)
          ? <AlertElm message="There are no results" type="warning" closeText="Close" />
          : null
      )}

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          { movies.results &&
            movies.results.map(movie => (
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }} xl={{ span: 4 }} key={movie.id} >
                <MovieComponent movie={movie} />
              </Col>
            ))
          }
      </Row>

    </HomeElm>
  )
}

export default HomeComponent
