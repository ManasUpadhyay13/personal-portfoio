import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import SingleLetter from './SingleLetter'

const Container = styled.div`
    height: 90vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 0px 100px;
    position: relative;
    @media (max-width : 1500px){
        padding: 0 50px;
    }
`
const BodyOpen = motion(styled.p`
    font-family: 'Caveat', cursive;
    font-size: 1.4rem;
    position: relative;
    left: -20px;
    color: rgb(116, 112, 112);
    @media (max-width : 1500px){
        font-size : 1.2rem;
    }
    @media (max-width : 500px){
        top: -20px;
    }
`)
const BodyClose = motion(styled.p`
    font-family: 'Caveat', cursive;
    font-size: 1.4rem;
    position: relative;
    left: -20px;
    color: rgb(116, 112, 112);
    @media (max-width : 1500px){
        font-size : 1.2rem;
    }
    @media (max-width : 500px){
        top: -60px;
    }
`)
const HtmlOpen = motion(styled.p`
    font-family: 'Caveat', cursive;
    font-size: 1.4rem;
    position: relative;
    left : -40px;
    color: rgb(116, 112, 112);
    @media (max-width : 1500px){
        font-size : 1.2rem;
    }
`)
const HtmlClose = motion(styled.p`
    font-family: 'Caveat', cursive;
    font-size: 1.4rem;
    position: relative;
    left : -40px;
    color: rgb(116, 112, 112);
    @media (max-width : 1500px){
        font-size : 1.2rem;
    }
    @media (max-width : 500px){
        top: -80px;
    }
`)
const Hopen = motion(styled.p`
    font-family: 'Caveat', cursive;
    position: relative;
    font-size: 1.4rem;
    color: rgb(116, 112, 112);
    @media (max-width : 1500px){
        font-size : 1.2rem;
    }
    @media (max-width : 500px){
        top: -40px;
    }
`)
const HClose = motion(styled.p`
    font-family: 'Caveat', cursive;
    position: relative;
    font-size: 1.4rem;
    color: rgb(116, 112, 112);
    @media (max-width : 1500px){
        font-size : 1.2rem;
    }
    @media (max-width : 500px){
        top: -40px;
    }
`)


const Heading = styled.div`
    width: 100%;
    position: relative;
    left: 20px;
    @media (max-width : 500px){
        top: -40px;
    }
    `
const Para = styled.h1`
    display: flex;
    `
const Right = motion(styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width : 1330px){
        opacity: 0;
    }
`)

const RightFirstDiv = styled.div`
    width: 50%;
    height: 60%;
    background-color: gray;
    position: relative;
    left: -20px;
    transform: rotate(-5deg);
    @media (max-width : 1300px) {
        width: 40%;
        height: 60%;
    }
`

const RightSecondDiv = styled.div`
    width: 100%;
    height: 100%;
    transform: rotate(10deg);
    position: relative;
    left: 40px;
    @media (max-width : 1550px) {
        left: 0;
    }
`
const RightImg = styled.img`
    width: 100%;
    object-fit: contain;
`

function Home() {
    const [load, setLoad] = useState(0)
    setTimeout(() => {
        setLoad(load + 1)
    }, 2000);
    
    return (
        <Container>

            <Left>

                <HtmlOpen
                    initial={{
                        y : -200
                    }}
                    animate={{
                        y:0
                    }}
                    transition={{
                        delay : 0
                    }}
                >
                    &#60; html &#62;
                </HtmlOpen>

                <BodyOpen
                    initial={{
                        y : -300
                    }}
                    animate={{
                        y:0
                    }}
                    transition={{
                        delay: 0.4
                    }}
                >
                    &#60; body &#62;
                </BodyOpen>

                <Hopen
                    initial={{
                        y : -300
                    }}
                    animate={{
                        y:0
                    }}
                    transition={{
                        delay: 0.8
                    }}
                >
                    &#60; h1 &#62;
                </Hopen>
                <Heading>

                    <Para>
                        <SingleLetter text={'H'} id={0} />
                        <SingleLetter text={'i'} id={1} />
                        <SingleLetter text={','} id={2} />
                    </Para>

                    <Para>
                        <SingleLetter style={{color : "black"}} text={'I'} id={3} />
                        <SingleLetter text={"'"} id={4} />
                        <SingleLetter text={'m'} id={5} />
                        <SingleLetter text={'M'} id={6} />
                        <SingleLetter text={'a'} id={7} />
                        <SingleLetter text={'n'} id={8} />
                        <SingleLetter text={'a'} id={9} />
                        <SingleLetter text={'s'} id={10} />
                        <SingleLetter text={','} id={11} />
                    </Para>

                    <Para>
                        <SingleLetter text={'w'} id={12} />
                        <SingleLetter text={'e'} id={13} />
                        <SingleLetter text={'b'} id={14} />
                        <SingleLetter text={'d'} id={15}/>
                        <SingleLetter text={'e'} id={16} />
                        <SingleLetter text={'v'} id={17} />
                        <SingleLetter text={'e'} id={18} />
                        <SingleLetter text={'l'} id={19} />
                        <SingleLetter text={'o'} id={20} />
                        <SingleLetter text={'p'} id={21} />
                        <SingleLetter text={'e'} id={22} />
                        <SingleLetter text={'r'} id={23} />
                    </Para>

                </Heading>

                <HClose
                    initial={{
                        y : 300
                    }}
                    animate={{
                        y:0
                    }}
                    transition={{
                        delay: 0.8
                    }}
                    
                >
                    &#60; /h1 &#62;
                </HClose>


                <BodyClose
                    initial={{
                        y : 300
                    }}
                    animate={{
                        y:0
                    }}
                    transition={{
                        delay: 0.4
                    }}
                >
                    &#60; /body &#62;
                </BodyClose>
                <HtmlClose
                    initial={{
                        y : 200
                    }}
                    animate={{
                        y:0
                    }}
                    transition={{
                        delay: 0
                    }}
                >
                    &#60; /html &#62;
                </HtmlClose>
            </Left>

            <Right
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: 1
                }}
                transition={{
                    delay: 5
                }}
            >
                <RightFirstDiv>
                    <RightSecondDiv>
                        <RightImg src='https://firebasestorage.googleapis.com/v0/b/personal-portfolio-a59ea.appspot.com/o/WhatsApp%20Image%202022-03-26%20at%207.42.13%20PM.jpeg?alt=media&token=4c30b756-e32f-4102-8ccd-e04f5a4f6cb8' />
                    </RightSecondDiv>
                </RightFirstDiv>

            </Right>

        </Container>
    )
}

export default Home