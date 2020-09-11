import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import {
  FullscreenOutlined,
  FullscreenExitOutlined
} from '@ant-design/icons'

// Components
import HomeComponent from './components/Home'

// Styled Elements
const Alerts = styled.div`
  display: none;
`
const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: ${props => props.theme.baseSize * 6}px;
  position: relative;
  width: 100vw;
  @media screen and (max-height: 600px) {
    min-height: 100vh;
    padding-top: 0;
  }
`
const Container = styled.main`
  background-color: ${props => props.theme.whiteColor};
  box-shadow: 0 12px 24px -4px #263391;
  display: flex;
  min-height: calc(100% - ${props => props.theme.baseSize * 4}px);
  width: calc(100vw - ${props => props.theme.baseSize * 12}px);;
  @media screen and (${props => props.theme.mq.sm}) {}
  @media screen and (${props => props.theme.mq.md}) {}
  @media screen and (${props => props.theme.mq.lg}) {}
`
const ScreenIcons = styled.button`
  background-color: transparent;
  border: 0;
  bottom: calc(${props => props.theme.baseSize} * 5px);
  color: ${props => props.theme.nvcBrandColor1};
  cursor: pointer;
  font-size: 1.2rem;
  position: fixed;
  right: calc(${props => props.theme.baseSize} * 5px);
  transition: transform 0.3s ease-in-out;
  &:active,
  &:focus {
    outline: none;
  }
  &:hover {
    transform: translateY(3px);
  }
`

const App = () => {
  const [fullScreen, setFullScreen] = useState(false)

  const openFullScreen = () => {
    document.getElementById('root')
      .requestFullscreen()
      .then(() => {
        setFullScreen(true)
      })
      .catch((err) => console.error(`Coudn't open in fullscreen mode`))
  }
  const closeFullScreen = () => {
    document.exitFullscreen()
    setFullScreen(false)
  }
  const toggleFullScreen = () => {
    (fullScreen)
      ? closeFullScreen()
      : openFullScreen()
    ;
  }
  
  return (
    <Wrapper>
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={() => <HomeComponent />} />
            <Route exact path="/movies/:id" />
          </Switch>
        </Router>
      </Container>
      <Alerts/>
      <ScreenIcons onClick={() => toggleFullScreen()}>
        {
          (fullScreen)
          ? <FullscreenExitOutlined />
          : <FullscreenOutlined />
        }
      </ScreenIcons>
    </Wrapper>
  )
}

export default App
