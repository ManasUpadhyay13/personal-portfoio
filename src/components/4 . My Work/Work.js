import React from 'react'
import styled from 'styled-components'
import { AllSkills } from './AllSkills'
import WorkOverview from './WorkOverview'
// import motion from 'framer-motion'

const Container = styled.div`
    width: 100%;
    min-height: 90vh;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`

// const WorkContaier = styled.div`

// `
function Work() {
  return (
    <Container>
      {
        AllSkills.map((item)=>{
          return(
            <WorkOverview key={item.id} data={item} />
          )
        })
      }
    </Container>
  )
}

export default Work