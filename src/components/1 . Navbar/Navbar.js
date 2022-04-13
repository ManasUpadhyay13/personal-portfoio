import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Container = motion(styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgb(44,44,44);
`)

const Items = motion(styled.div`
    padding: 5px 10px;
    position: relative;
    text-align: center;
    &::after{
        content: '';
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        border-bottom: 1px solid rgb(15,253,216);
        transition: all 0.3s;
    }
    &:hover::after{
        height: 100%;
        width: 100%;
    }
    `)

const ItemName = styled.h3`
    color: white;
    @media(max-width : 1010px) {
        font-size: 1rem;
    }
    @media(max-width : 600px) {
        font-size: 0.8rem;
    }
   
`

function Navbar() {
    return (
        <Container
            initial={{
                x: -3000
            }}
            animate={{
                x: 0
            }}
            transition={{
                duration: 1
            }}
        >


            <Link to='/' style={{ textDecoration: 'none' }}>
                <Items
                    animate={{
                        y: 0
                    }}
                    initial={{
                        y: -100
                    }}
                    transition={{
                        delay: 1
                    }}
                >

                    <ItemName>
                        Home
                    </ItemName>

                </Items>
            </Link>

            <Link to='/about' style={{ textDecoration: 'none' }}>
                <Items
                    animate={{
                        y: 0
                    }}
                    initial={{
                        y: -100
                    }}
                    transition={{
                        delay: 1.4
                    }}
                >



                    <ItemName>
                        About ME
                    </ItemName>

                </Items>
            </Link>
            <Link to='/work' style={{
                textDecoration: 'none'
            }}>
                <Items
                    animate={{
                        y: 0
                    }}
                    initial={{
                        y: -100
                    }}
                    transition={{
                        delay: 1.8
                    }}
                >
                    <ItemName>
                        MY Work
                    </ItemName>

                </Items>
            </Link>
            <Link to='/skills' style={{ textDecoration: 'none' }}>
                <Items
                    animate={{
                        y: 0
                    }}
                    initial={{
                        y: -100
                    }}
                    transition={{
                        delay: 2.2
                    }}
                >
                    <ItemName>
                        MY Skills
                    </ItemName>

                </Items>
            </Link>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
                <Items
                    animate={{
                        y: 0
                    }}
                    initial={{
                        y: -100
                    }}
                    transition={{
                        delay: 2.6
                    }}
                >
                    <ItemName>
                        Contact ME
                    </ItemName>
                </Items>
            </Link>

        </Container>
    )
}

export default Navbar