import React from 'react'
import { Spacer, Badge, Heading, Text, Button, ButtonGroup, Stack, Divider, Image, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { WarningTwoIcon, CheckIcon, InfoIcon } from '@chakra-ui/icons'
import Problems from './R_Problems_api'
import './R_Problems.css'
const reported_problems = Problems
const R_Problems = () => {
    return (
        <>{
            reported_problems.map((currElem) => {
                return (
                    <>
                        <center>
                            <Card maxW='sm' boxShadow='dark-lg' mb='7' bg='#e6e6e6'>
                                <CardBody>
                                    <Image
                                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                        alt='Image of the problem'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md' color='tomato'>{currElem.name}</Heading>
                                        <Text color='blue.600' >
                                            <Badge colorScheme='blue'>Date</Badge>: {currElem.date}
                                        </Text>
                                        <Text color='blue.600'>
                                            <Badge colorScheme='blue'>Location</Badge> : {currElem.location}


                                        </Text>
                                        {/* <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text> */}
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='green'>
                                            <CheckIcon mr='2' />Solved
                                        </Button>
                                        <Button variant='ghost' colorScheme='blue'>
                                            Full Details<InfoIcon ml='2' />
                                        </Button>
                                        <Spacer />
                                        <Button>
                                            <WarningTwoIcon color='red' />
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>

                        </center>
                    </>
                )
            }
            )
        }
        </>
    )
}

export default R_Problems