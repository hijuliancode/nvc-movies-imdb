import React from 'react'
import styled from 'styled-components'

import { Card} from 'antd'

import {
  StarOutlined,
} from '@ant-design/icons';

// Components
const { Meta } = Card

// Styles
const MovieElm = styled(Card)`
  padding: 0;
  position: relative;
  transition: all 0.3s ease-in-out;
  &:hover {
    .movie-content {
      opacity: 1;
    }
    .ant-card-meta {
      opacity: 0;
      text-align: center;
    }
  }
  .ant-card-meta {
    opacity: 1;
    text-align: center;
    transition: all 0.3s ease-in-out;
  }
`
const MovieContent = styled.div`
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.50);
  color: white;
  display: flex;
  flex-direction: column;
  height: calc(100% + 2px);
  left: -1px;
  opacity: 0;
  position: absolute;
  top: -1px;
  transition: all 0.3s ease-in-out;
  width: calc(100% + 2px);
`
const Rating = styled.div`
  display: flex;
  flex-direction: column;
  & .anticon {
    color: ${props => props.theme.primaryColor};
    font-size: 48px;
  }
  & .rating-text {
    display: block;
    text-align: center;
    font-size: 18px;
  }
`
const Cast = styled.div`
  line-height: 1.4em;
  margin-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
`


const MovieComponent = () => (
  <MovieElm
    hoverable
    size="small"
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
    <Meta title="Europe Street beat" />
    <MovieContent className="movie-content">
      <Rating>
        <StarOutlined />
        <strong className="rating-text">9.8</strong>
      </Rating>
      <Cast>
        <strong>Cast:</strong> Meraki SC, Ginna Mora, Carlos Sosa, Julian Sosa
      </Cast>
    </MovieContent>
  </MovieElm>
)

export default MovieComponent
