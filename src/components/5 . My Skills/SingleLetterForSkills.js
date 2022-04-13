import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = motion(styled.div`
    
`)
const Text = motion(styled.span`
    font-size: 4rem;
    font-weight: bolder;
    font-family: 'PT Sans', sans-serif;
    color: rgb(15,253,216);
    letter-spacing: 1px;
    margin-left: ${props => props.id === 6 || props.id === 7  ? 30 : 0}px;
    cursor: pointer;
    @media ( max-width : 1200px){
        font-size: 3rem;
    }
`)
function SingleLetterForSkills({ text, id }) {
    return (
        <Container
            initial={{
                scale: 0,
                rotate: -90
            }}
            animate={{
                scale: 1,
                rotate: 0
            }}
            transition={{
                delay: 1.5 + (id / 7)
            }}

        >
            <Text id={id}
                initial={{
                    scale: 1
                }}
            >
                {text}
            </Text>
        </Container>
    )
}

export default SingleLetterForSkills