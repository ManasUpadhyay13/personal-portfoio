import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SingleLetterForContact from './SingleLetterForContact'
import { motion } from 'framer-motion'
import { Quotes } from './Quotes'
import { Facebook, GitHub, Instagram, LinkedIn, YouTube } from '@material-ui/icons'
const Container = styled.div`
    width: 100%;
    height: 90vh;
    overflow: hidden;
    display: flex;
`

const Left = styled.div`
    flex : 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
`

const HtmlOpen = motion(styled.p`
    font-family: 'Caveat', cursive;
    font-size: 1.1rem;
    color: rgb(116, 112, 112);
    margin-left : 10px;
`)
const HtmlClose = motion(styled.p`
    font-family: 'Caveat', cursive;
    font-size: 1.1rem;
    color: rgb(116, 112, 112);
    margin-left : 10px;
`)
const BodyOpen = motion(styled.p`
    font-family: 'Caveat', cursive;
    font-size: 1.1rem;
    color: rgb(116, 112, 112);
    margin-left : 20px;
`)
const BodyClose = motion(styled.p`
    font-family: 'Caveat', cursive;
    font-size: 1.1rem;
    color: rgb(116, 112, 112);
    margin-left : 20px;
`)
const HOpen = motion(styled.p`
    font-family: 'Caveat', cursive;
    font-size: 1.1rem;
    color: rgb(116, 112, 112);
    margin-left : 30px;
`)
const HClose = motion(styled.p`
    font-family: 'Caveat', cursive;
    font-size: 1.1rem;
    color: rgb(116, 112, 112);
    margin-left : 30px;
`)
const FormOpen = motion(styled.p`
    font-family: 'Caveat', cursive;
    font-size: 1.1rem;
    color: rgb(116, 112, 112);
    margin-left : 30px;
`)
const FormClose = motion(styled.p`
    font-family: 'Caveat', cursive;
    font-size: 1.1rem;
    color: rgb(116, 112, 112);
    margin-left : 30px;
`)
const Heading = styled.div`
    display: flex;
    margin-left: 60px;
`
const Form = motion(styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 60px;
`)
const Name = styled.input`
    width: 50%;
    height: 20%;
    border : none;
    background : rgb(44,44,44);
    padding: 10px 20px;
    color : white;
    font-size: 1rem;
    margin: 10px;
`
const Email = styled.input`
    width: 50%;
    height: 20%;
    border : none;
    background : rgb(44,44,44);
    padding: 10px 20px;
    color : white;
    font-size: 1rem;
    margin: 10px;
`
const Message = styled.input`
    width: 90%;
    height: 40%;
    border : none;
    background : rgb(44,44,44);
    padding: 10px 20px;
    color : white;
    font-size: 1rem;
    margin: 10px;
`
const Button = (styled.button`
    cursor: pointer;
    font-size:1rem;
    width: 20%;
    height: 20%;
    border: none;
    color: white;
    margin: 10px;
    background: none;
    border: 2px solid rgb(15,253,216);
    transition: all 0.4s;
    :hover{
      transform: translateY(-5px);
      background-color: rgb(15,253,216);
      color : black
    }
`)

const Right = motion(styled.div`
    flex : 1;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`)

const Thought = styled.h1`
    font-size: 5rem;
    font-weight: bolder;
    letter-spacing: 5px;
    color: white;
    position: relative;
    ::after{
      content: 'of the day';
      color: rgb(15,253,216);
      background-color: rgb(29,29,29);
      font-size: 1.5rem;
      position: absolute;
      top: 35%;
      left: 35%;
      letter-spacing: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`

const Quote = styled.h2`
    font-size: 1.4rem;
    color: white;
`

const Author = styled.h4`
    font-size: 2rem;
    color: rgb(15,253,216);
`
const Social = styled.div`
    height: 40%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    font-size: 1.2rem;
    color: white;
`
const SocialHeading = styled.h1`
    
`

const SocialIcons = styled.div`
    height: 20%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SocialIcon = styled.h1`
    font-size: 3rem !important;
    cursor: pointer;
`


export const Contact = () => {
  const [RandomNumber, setRandomNumber] = useState(0)
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 2000) + 1)
  }, [])

  const Q = Quotes[RandomNumber].text
  const A = Quotes[RandomNumber].author === null ? 'Anonymous' : Quotes[RandomNumber].author

  return (
    <Container>
      <Left>
        <HtmlOpen
          initial={{
            y: -50
          }}
          animate={{
            y: 0
          }}
          transition={{
            delay: 0
          }}
        >
          &#60; html &#62;
        </HtmlOpen>

        <BodyOpen
          initial={{
            y: -100
          }}
          animate={{
            y: 0
          }}
          transition={{
            delay: 0.5
          }}
        >
          &#60; body &#62;
        </BodyOpen>

        <HOpen
          initial={{
            x: -100
          }}
          animate={{
            x: 0
          }}
          transition={{
            delay: 1
          }}
        >
          &#60; h2 &#62;
        </HOpen>

        <Heading>
          <SingleLetterForContact text={'C'} id={0} />
          <SingleLetterForContact text={'o'} id={1} />
          <SingleLetterForContact text={'n'} id={2} />
          <SingleLetterForContact text={'t'} id={3} />
          <SingleLetterForContact text={'a'} id={4} />
          <SingleLetterForContact text={'c'} id={5} />
          <SingleLetterForContact text={'t'} id={6} />
          <SingleLetterForContact text={'M'} id={7} />
          <SingleLetterForContact text={'e'} id={8} />
        </Heading>

        <HClose
          initial={{
            x: -100
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

        <FormOpen
          initial={{
            x: -100
          }}
          animate={{
            x: 0
          }}
          transition={{
            delay: 4
          }}>
          &#60; form &#62;
        </FormOpen>

        <Form
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

          <Name placeholder='Enter your name' type='name' />
          <Email placeholder='Enter your email' type='email' />
          <Message placeholder='Enter the message' type='text' />
          <Button
            whileHover={{
              scale: 0.8
            }}
            whileTap={{
              scale: 1.1
            }}
          >Send Message</Button>
        </Form>

        <FormClose
          initial={{
            x: -100
          }}
          animate={{
            x: 0
          }}
          transition={{
            delay: 4
          }}
        >
          &#60; /form &#62;
        </FormClose>

        <BodyClose
          initial={{
            y: 100
          }}
          animate={{
            y: 0
          }}
          transition={{
            delay: 0.5
          }}
        >
          &#60; /body &#62;
        </BodyClose>

        <HtmlClose
          initial={{
            y: 50
          }}
          animate={{
            y: 0
          }}
          transition={{
            delay: 0
          }}
        >
          &#60; /html &#62;
        </HtmlClose>

      </Left>
      {/* <Right
        initial={{
          y:10000
        }}
        animate={{
          y : 0
        }}
        transition={{
          delay : 5.5
        }}
      
      >
        <Thought>THOUGHT</Thought>
        <Quote>
          {Q}
        </Quote>
        <Author>
          - {A}
        </Author>
        <Social>
          <SocialHeading>SOCIALS</SocialHeading>
          <SocialIcons>

            <SocialIcon>
              <Facebook style={{fontSize : '2rem'}} />
            </SocialIcon>

            <SocialIcon>
              <Instagram style={{fontSize : '2rem'}} />
            </SocialIcon>

            <SocialIcon>
              <YouTube style={{fontSize : '2rem'}} />
            </SocialIcon>

            <SocialIcon>
              <LinkedIn style={{fontSize : '2rem'}} />
            </SocialIcon>

            <SocialIcon>
              <GitHub style={{fontSize : '2rem'}}/>
            </SocialIcon>

          </SocialIcons>
        </Social>
      </Right> */}
    </Container>
  )
}
