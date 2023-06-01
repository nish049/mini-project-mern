import React from 'react'
import { Divider, Flex, Heading, Text, Avatar, Box, Badge } from '@chakra-ui/react'
import { Image, Button, Card, CardBody } from '@chakra-ui/react'
import { ChevronLeftIcon, InfoIcon } from '@chakra-ui/icons'
const DepProbDetails = () => {
    return (
        <>
            <Flex bg='black' pt='3' pb='3' mb='10'>
                <Box>
                    <center>
                        <Heading color={'white'}><InfoIcon mr='3' mb='1' />Details about the problem...</Heading>
                    </center>
                </Box>

            </Flex >
            <Box borderRadius={10} mr='5' ml='5' mb='5' padding='6' boxShadow='dark-lg' bg='#e6e6e6'>

                <Text borderRadius={10} pl='4' pr='4' mb='5' bg='blue.700' color='white' fontSize='3xl'><strong>Problem Reported By...</strong></Text>
                <Avatar ml='3' mt='3' mb='3' size='lg' src='https://bit.ly/sage-adebayo' />
                <Text><strong>Name : </strong>Name of the person</Text>
                <Text><strong>Age  :</strong> Age of the person</Text>
                <Text><strong>Phone  :</strong>Phone no.of the person</Text>
                <Text><strong>Email  :</strong>Email of the person</Text>
                <Text color='blue.600'>
                    <Badge colorScheme='blue'>City</Badge> : City Name </Text>
                <Text color='green'>
                    <Badge colorScheme='green'>Problems Reported</Badge> No. of Prblms</Text>




            </Box>
            <Card ml='5' mr='5' mb='5' boxShadow='dark-lg'
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >


                <vStack mb='3'>
                    <CardBody>
                        <Text borderRadius={10} pl='4' pr='4' mb='5' bg='#cc0000' color='white' fontSize='3xl'><strong>About the problem...</strong></Text>


                        <Text py='2'>
                            <Text fontSize='xl' as="span"><strong>Name :</strong> </Text><Text as="span">Name of the problem</Text>
                            <Text >
                                <Text fontSize='xl' ><strong>Description :</strong> </Text><Text mb='5'>This will be full description about the problem.This will be full description about the problem.This will be full description about the problem.</Text>
                            </Text>
                            <Divider mb='5' />
                            <Text mb='2' color='blue.600'>
                                <Badge colorScheme='blue' fontSize={'sm'}>Location</Badge> : Full Location</Text>
                            <Text mb='2' color='blue.600'>
                                <Badge colorScheme='blue' fontSize={'sm'}>Date</Badge> : Date Reported</Text>

                            <Text color='red' mb='2'>
                                <Badge colorScheme='red' fontSize={'sm'}>Problem persisted for : </Badge> No.of days</Text>
                            <Text color='green'>
                                <Badge colorScheme='green' fontSize={'sm'}>Acknowledgement Number : </Badge> #Ack </Text>
                        </Text>
                    </CardBody>


                    <Text pl='5' fontSize={'xl'}><strong>Image Provided:</strong></Text>
                    <Image pl='2' pr='2' pb='2'
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                </vStack>



            </Card >
            <Button ml='5' colorScheme='red'><ChevronLeftIcon boxSize={8} />Go Back</Button>

        </>

    )
}

export default DepProbDetails