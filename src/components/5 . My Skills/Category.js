import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = motion(styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    box-shadow: 1px 1px 2px gray;
    margin: 5px 10px;
`)

const ContainerPercentage = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    overflow: hidden;
    @media ( max-width : 1200px){
        font-size: 0.7rem;
    }
`

const ContainerName = styled.p`
    margin-top: 5px;
    @media ( max-width : 1200px){
        font-size: 0.9rem;
    }
    @media ( max-width : 1100px){
        font-size: 0.6rem;
    }
`
const ContainerNumber = motion(styled.p`

`)

const ContainerWidth = motion(styled.div`
    height: ${props => props.width}%;
    width: 15%;
    background-color: rgb(15,253,216);
`)

function Category({ data }) {
    return (
        <Container id={data.id}
            initial={{
                scale: 0
            }}
            animate={{
                scale: 1
            }}
            transition={{
                delay: 6 + data.id,
            }}
        >
            <ContainerPercentage>
                <ContainerNumber
                    initial={{
                        y: 200
                    }}
                    animate={{
                        y: 0
                    }}
                    transition={{
                        duration: 1,
                        delay: 6.3 + data.id
                    }}
                >{data.percent}%</ContainerNumber>
                <ContainerWidth
                    initial={{
                        y: 200
                    }}
                    animate={{
                        y: 0
                    }}
                    transition={{
                        duration: 1,
                        delay: 6.3 + data.id
                    }}
                    width = {data.percent} 
                ></ContainerWidth>
            </ContainerPercentage>
            <ContainerName>{data.title}</ContainerName>
        </Container>
    )
}

export default Category