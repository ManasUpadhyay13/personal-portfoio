import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import SingleLetterForSkills from './SingleLetterForSkills'
import { Experience } from './Expercience'
import Category from './Category'

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: hidden;
`

const HtmlOpen = motion(styled.p`
    position: relative;
    left : 20px;
    color: rgb(116, 112, 112);
    font-family: 'Caveat', cursive;
    font-size : 1.1rem;
`)
const HtmlClose = motion(styled.p`
    position: relative;
    left : 20px;
    color: rgb(116, 112, 112);
    font-family: 'Caveat', cursive;
    font-size : 1.1rem;
`)
const BodyOpen = motion(styled.p`
    position: relative;
    left : 40px;
    color: rgb(116, 112, 112);
    font-family: 'Caveat', cursive;
    font-size : 1.1rem;
`)
const BodyClose = motion(styled.p`
    position: relative;
    left : 40px;
    color: rgb(116, 112, 112);
    font-family: 'Caveat', cursive;
    font-size : 1.1rem;
`)
const Hopen = motion(styled.p`
    position : relative ;
    left : 60px;
    color: rgb(116, 112, 112);
    font-family: 'Caveat', cursive;
    font-size : 1.1rem;
`)
const HClose = motion(styled.p`
    position : relative ;
    left : 60px;
    color: rgb(116, 112, 112);
    font-family: 'Caveat', cursive;
    font-size : 1.1rem;
`)
const POpen = motion(styled.p`
    position : relative;
    left: 60px;
    color: rgb(116, 112, 112);
    font-family: 'Caveat', cursive;
    font-size : 1.1rem;
`)
const PClose = motion(styled.p`
    position : relative;
    left: 60px;
    color: rgb(116, 112, 112);
    font-family: 'Caveat', cursive;
    font-size : 1.1rem;
`)

const ImgOpen = motion(styled.p`
    position : relative;
    left: 60px;
    color: rgb(116, 112, 112);
    font-family: 'Caveat', cursive;
    font-size : 1.1rem;                                                               
`)

const ImgClose = motion(styled.p`
    position : relative;
    left: 60px;
    color: rgb(116, 112, 112);
    font-family: 'Caveat', cursive;
    font-size : 1.1rem;
`)


const Slogan = styled.div`
    display: flex;
    padding: 0px 100px;
`

const Para = motion(styled.div`
    padding: 0px 80px;
    font-size: 1rem;
    color: white;
    @media ( max-width : 1200px){
        font-size: 0.8rem;
    }
    `)

const Span = styled.span`
    color: rgb(15,253,216);
    `
const ImgContainer = motion(styled.div`
    position: relative;
    left: 6%;
    height: 20%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid grey;
    padding: 10px;
`)




export default function Skills() {
    return (
        <Container>
            <HtmlOpen
                initial={{
                    x: -100
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    delay: 0
                }}
            >
                &#60; html &#62;
            </HtmlOpen>

            <BodyOpen
                initial={{
                    x: -150
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    delay: 0.5
                }}
            >
                &#60; body &#62;
            </BodyOpen>


            <Hopen
                initial={{
                    x: -200
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    delay: 1
                }}
            >
                &#60; h2 &#62;
            </Hopen>

            <Slogan>
                <SingleLetterForSkills text={'S'} id={0} />
                <SingleLetterForSkills text={'k'} id={1} />
                <SingleLetterForSkills text={'i'} id={2} />
                <SingleLetterForSkills text={'l'} id={3} />
                <SingleLetterForSkills text={'l'} id={4} />
                <SingleLetterForSkills text={'s'} id={5} />
                <SingleLetterForSkills text={'&'} id={6} />
                <SingleLetterForSkills text={'E'} id={7} />
                <SingleLetterForSkills text={'x'} id={8} />
                <SingleLetterForSkills text={'p'} id={9} />
                <SingleLetterForSkills text={'e'} id={10} />
                <SingleLetterForSkills text={'r'} id={11} />
                <SingleLetterForSkills text={'i'} id={12} />
                <SingleLetterForSkills text={'e'} id={13} />
                <SingleLetterForSkills text={'n'} id={14} />
                <SingleLetterForSkills text={'c'} id={15} />
                <SingleLetterForSkills text={'e'} id={16} />

            </Slogan>

            <HClose
                initial={{
                    x: -200
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    delay: 1
                }}
            >
                &#60; /h2 &#62;
            </HClose>


            <POpen
                initial={{
                    x: -200
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    delay: 3.5
                }}
            >&#60; p &#62;</POpen>
            <Para
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: 1
                }}
                transition={{
                    delay: 4
                }}
            >
                I am a <Span> frontend web developer </Span> with more that 3 years of experience in developing simple yet interactive and cool looking websites.
                I create successful responsive websites that are fast, easy to use, and built with best practices.

                The main area of my expertise is <Span> HTML, CSS, JS, React JS </Span> ,building small and medium web apps,

                I am also experience working with several other programming languages like <Span> C , C++ , JAVA , JAVA SCRIPT , PYTHON . </Span>
            </Para>

            <PClose
                initial={{
                    x: -200
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    delay: 3.5
                }}

            >&#60; /p &#62;</PClose>

            <ImgOpen
                initial={{
                    x: -200
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    delay: 4.5
                }}
            >
                &#60; img &#62;
            </ImgOpen>

            <ImgContainer
                initial={{
                    x: -1750
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    delay: 5
                }}
            >
                {
                    Experience.map((item) => {
                        return (
                            <Category key={item.id} data={item} />
                        )
                    })
                }

            </ImgContainer>

            <ImgClose
                initial={{
                    x: -200
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    delay: 4.5
                }}
            >
                &#60; /img &#62;
            </ImgClose>

            <BodyClose
                initial={{
                    x: -150
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    delay: 0.5
                }}
            >
                &#60; /body &#62;
            </BodyClose>

            <HtmlClose
                initial={{
                    x: -100
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    delay: 0
                }}
            >
                &#60; /html &#62;
            </HtmlClose>

        </Container>
    )
}