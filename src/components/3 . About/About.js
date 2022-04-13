import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import SingleLetterForAbout from './SingleLetterForAbout'

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    overflow: hidden;
    
`

const Left = styled.div`
    flex: 1;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Slogan = styled.div`
    margin-left: 60px;
    display: flex;
    position: relative;
    left: 30px;
    @media (max-width : 500px){
        top: -40px;
    }
`
const Para = motion(styled.div`
    position: relative;
    margin-left: 90px;
    font-size: 1.1rem;
    color: white;
    @media (max-width : 1000px){
        font-size : 0.9rem;
    }
    @media (max-width : 500px){
        top: -100px;
    }
`)

const HtmlOpen = motion(styled.p`
    position: relative;
    top: 20px;
    left : 20px;
    color: rgb(116, 112, 112);
    @media (max-width : 1000px){


        font-size : 1rem
    }
    font-family: 'Caveat', cursive;
    font-size : 1.2rem;
`)
const HtmlClose = motion(styled.p`
    position: relative;
    top: -20px;
    left : 20px;
    color: rgb(116, 112, 112);
    @media (max-width : 1000px){


        font-size : 1rem
    }
    font-family: 'Caveat', cursive;
    font-size : 1.2rem;
    @media (max-width : 500px){
        top: -160px;
    }
`)
const BodyOpen = motion(styled.p`
    position: relative;
    top: 20px;
    left : 40px;
    color: rgb(116, 112, 112);
    font-family: 'Caveat', cursive;
    font-size : 1.2rem;
    @media (max-width : 1000px){
        font-size : 1rem
    }
    @media (max-width : 500px){
        top: -10px;
    }
`)
const BodyClose = motion(styled.p`
    position: relative;
    top: -20px;
    left : 40px;
    color: rgb(116, 112, 112);
    @media (max-width : 1000px){


        font-size : 1rem
    }
    font-family: 'Caveat', cursive;
    font-size : 1.2rem;
    @media (max-width : 500px){
        top: -140px;
    }
`)
const Hopen = motion(styled.p`
    position : relative ;
    top: 10px;
    left : 60px;
    color: rgb(116, 112, 112);
    @media (max-width : 1000px){


        font-size : 1rem
    }
    font-family: 'Caveat', cursive;
    font-size : 1.2rem;
    @media (max-width : 500px){
        top: -40px;
    }
`)
const HClose = motion(styled.p`
    position : relative ;
    top: 0;
    left : 60px;
    color: rgb(116, 112, 112);
    @media (max-width : 1000px){
    
    font-size : 1rem}
    font-family: 'Caveat', cursive;
    font-size : 1.2rem;
    @media (max-width : 500px){
        top: -50px;
    }
`)
const POpen = motion(styled.p`
    position : relative;
    top: 0;
    left: 60px;
    color: rgb(116, 112, 112);
    @media (max-width : 1000px){
    
    font-size : 1rem}
    font-family: 'Caveat', cursive;
    font-size : 1.2rem;
    @media (max-width : 500px){
        top: -80px;
    }
`)
const PClose = motion(styled.p`
    position : relative;
    top: -10px;
    left: 60px;
    color: rgb(116, 112, 112);
    @media (max-width : 1000px){
    
    font-size : 1rem}
    font-family: 'Caveat', cursive;
    font-size : 1.2rem;
    @media (max-width : 500px){
        top: -120px;
    }
`)
const Right = motion(styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    @media (max-width : 1200px){
        opacity: 0;
    }
`)

const Category = motion(styled.div`   
    position: relative;
    border: 1px solid rgb(142,142,142);
    padding: 15px;
    width: 70%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`)
const CategoryName = styled.h4`
    padding: 0 15px;
    background-color: rgb(29,29,29);
    position: absolute;
    top: -8%;
    font-weight: normal;
    text-align: center;
    color: white;
`

const Collection = styled.div`
`
const Items = styled.div`
    display: flex;  
`
const Question = styled.h4`
    margin-right: 3px;
    color: whitesmoke;
    `
const Answer = styled.p`
    color: rgb(15,253,216);
`
const Single = styled.p`
    color: rgb(15,253,216);
`



function About() {
    return (
        <Container>
            <Left>

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
                    <SingleLetterForAbout text={'M'} id={0} />
                    <SingleLetterForAbout text={'E'} id={1} />
                    <SingleLetterForAbout text={','} id={2} />
                    <SingleLetterForAbout text={'M'} id={3} />
                    <SingleLetterForAbout text={'y'} id={4} />
                    <SingleLetterForAbout text={'s'} id={5} />
                    <SingleLetterForAbout text={'e'} id={6} />
                    <SingleLetterForAbout text={'l'} id={7} />
                    <SingleLetterForAbout text={'f'} id={8} />
                    <SingleLetterForAbout text={'&'} id={9} />
                    <SingleLetterForAbout text={'I'} id={10} />
                    <SingleLetterForAbout text={','} id={11} />
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
                    I’m a Front-End Developer located in India ( Uttar Pradesh ). I have a serious passion for building simple and unique websites, animations and dynamic user experiences. <br /> <br />

                    Well-organised person, problem solver, independent employee with high attention to detail. Fan of Robert Downey jr ( aka IROM MAN ) and M.S. Dhoni ( Former Indain Cricket Team player), outdoor activities, making videos. A family person, a proud son of his parents and a cool big brother. <br /> <br />

                    Interested in the entire frontend spectrum and working on ambitious projects with positive people.
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
            </Left>
            <Right>

                {/* Category for personal details  */}

                <Category
                    initial={{
                        y: -400
                    }}
                    animate={{
                        y: 0
                    }}
                    transition={{
                        delay: 4.5
                    }}
                >
                    <CategoryName>PERSONAL DETAILS</CategoryName>
                    <Collection>
                        <Items>
                            <Question>Name : </Question>
                            <Answer> Manas Upadhyay</Answer>
                        </Items>
                        <Items>
                            <Question>Age : </Question>
                            <Answer> 20 Years Old</Answer>
                        </Items>
                        <Items>
                            <Question>DOB : </Question>
                            <Answer> 13th Oct 2001</Answer>
                        </Items>
                        <Items>
                            <Question>Email : </Question>
                            <Answer> manasupadhyay1318@gmail.com</Answer>
                        </Items>
                    </Collection>
                </Category>

                {/* Category for the locality of the user  */}

                <Category
                    initial={{
                        y: -800
                    }}
                    animate={{
                        y: 0
                    }}
                    transition={{
                        delay: 5
                    }}
                >
                    <CategoryName>LOCALITY</CategoryName>
                    <Collection>
                        <Items>
                            <Question>City : </Question>
                            <Answer> Lucknow</Answer>
                        </Items>
                        <Items>
                            <Question>University : </Question>
                            <Answer>Integral University</Answer>
                        </Items>
                        <Items>
                            <Question>State : </Question>
                            <Answer>Uttar Pradesh</Answer>
                        </Items>
                        <Items>
                            <Question>Country : </Question>
                            <Answer>India</Answer>
                        </Items>
                    </Collection>
                </Category>

                {/* Category for the education details of the user */}

                <Category
                    initial={{
                        y: 800
                    }}
                    animate={{
                        y: 0
                    }}
                    transition={{
                        delay: 6
                    }}
                >
                    <CategoryName>Education Details</CategoryName>
                    <Collection>
                        <Single> - BCA student at Integral Univesity , Lucknow</Single>
                        <Single> - Completed 12th from Amrit Public School (CBSE board )</Single>
                        <Single> - Completed 10th from Fatima School (ICSE board )</Single>
                    </Collection>
                </Category>


                {/* categoty for the knowladge of the website */}

                <Category
                    initial={{
                        y: 400
                    }}
                    animate={{
                        y: 0
                    }}
                    transition={{
                        delay: 5.5
                    }}
                >
                    <CategoryName>About the WEBSITE</CategoryName>
                    <Collection>
                        <Single> - This is a personal portfolio website created to show the development skills of the developer.</Single>
                        <Single> - This website is created using the popular JAVA SCRIPT framework React js along other libraries like styled components , framer motion , etc... </Single>
                    </Collection>
                </Category>


            </Right>

        </Container>
    )
}

export default About