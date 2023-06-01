import React from 'react'
import { Heading, Flex, Box, Text } from '@chakra-ui/react'
import Problems from './LOP_api'
import { Card, CardBody } from '@chakra-ui/react'
import './LOP.css'
const LOP = () => {
    const probData = Problems
    return (
        <>
            <Flex bg='#e62e00' pt='3' pb='3' mb='10'>
                <Box>
                    <center>
                        <Heading>Choose The Problem...</Heading>
                    </center>
                </Box>

            </Flex >

            {
                probData.map((currElem) => {
                    return (
                        <>
                            <Card boxShadow='2xl' ml='5' mr='5' className='hovered' bg='#e6e6e6' border='50px' borderColor='black.200' mb='10'>
                                <CardBody >
                                    <center>
                                        <Heading>{currElem.name}</Heading>
                                        <Text>{currElem.description}</Text>
                                    </center>
                                </CardBody>
                            </Card>
                            <Button mt='5' colorScheme='red'><ChevronLeftIcon boxSize={8} />Go Back</Button>

                        </>
                    )
                })
            }
        </>

    )
}

export default LOP