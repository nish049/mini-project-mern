import React from 'react'
import { Card, CardBody } from '@chakra-ui/react'
import { Container, Flex, Avatar, Text, Badge, Box } from '@chakra-ui/react'



const Header = () => {
    return (
        <>
            <Flex bg='#e62e00'>
                <Avatar ml='3' mt='3' mb='3' src='https://bit.ly/sage-adebayo' />
                <Box ml='3' mt='3' mb='3'>
                    <Text fontWeight='bold'>
                        Name

                    </Text>
                    <Badge colorScheme='green'>
                        Citizen
                    </Badge>

                </Box>


            </Flex>

            <Card mt='10' ml='5' p='5' bg='black' color='white' mr='5'>
                <CardBody >
                    <Container >
                        <center>
                            <Text fontSize='2xl'>Hello Citizen!!</Text>
                            <Text fontSize='2xl'>Welcome Back...</Text>
                            <Text fontSize='1xl'>Help us to build a better place</Text>
                        </center>
                    </Container>
                </CardBody>
            </Card>
        </>
    )
}

export default Header