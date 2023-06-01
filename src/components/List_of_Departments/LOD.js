import React from 'react'
import { Flex, Box, Heading, Card, CardBody, Text } from '@chakra-ui/react'
import Departments from './LOD_api'
const LOD = () => {
    const deptData = Departments
    const [DeptName, setDeptName] = React.useState('')

    return (
        <>
            <Flex bg='#e62e00' pt='3' pb='3' mb='10'>
                <Box>
                    <center>
                        <Heading color='white'>Choose The Department...</Heading>
                    </center>
                </Box>

            </Flex >

            {
                deptData.map((currElem) => {


                    return (
                        <>
                            <Card boxShadow='2xl' ml='5' mr='5' className='hovered' bg='#e6e6e6' border='50px' borderColor='black.200' mb='5'>
                                <CardBody >
                                    <center>
                                        <Text >{currElem.name}</Text>

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

export default LOD