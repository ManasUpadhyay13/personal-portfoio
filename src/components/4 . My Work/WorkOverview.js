import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'

const Container = motion(styled.div`
  width: 23%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 5px 10px;
  box-shadow: 0.5px 0.5px 2px white;
`)

const AboutWork = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
`
const WorkHeading = styled.h1`
  color: rgb(15,253,216);
  @media ( max-width: 1300px){
    font-size: 2rem;
  }
`

const Descriptioin = styled.p`
  font-size: 1.1rem;
  color: white;
  letter-spacing: 1px;
  @media ( max-width: 1500px){
    font-size: 1rem;
  }
`

function WorkOverview({data}) {
  return (
    <Container
    initial={{
      scale: 0
    }}
    animate={{
      scale: 1
    }}
    transition={{
      delay : (data.id)/1.2
    }}
    >
      <WorkHeading>{data.title}</WorkHeading>
      <ReactPlayer 
      width='100%'
      controls
      url={data.scr}/>

      <AboutWork>
        <Descriptioin>{data.desc}</Descriptioin>
      </AboutWork>
    </Container>
  )
}

export default WorkOverview 