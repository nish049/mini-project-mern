import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Divider } from '@chakra-ui/react'
import { Button, InputGroup, InputLeftAddon, InputRightAddon, Input, Badge, Text, Avatar, Card, CardBody } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
const Edit_Profile = () => {
    return (
        <>
            <Card margin='5' bg='black' borderRadius={10} >

                <Tabs mt='5' padding='auto' variant='soft-rounded' colorScheme='green'>

                    <TabList justifyContent={'center'} >

                        <Tab color='white'>Your Profile</Tab>
                        <Tab color='white'>Edit Profile</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Card mt='10' boxShadow={'dark-lg'}>

                                <CardBody>
                                    <center>
                                        <Avatar mb='3' size='2xl' />

                                    </center>
                                    <center>
                                        <Badge mb='5' colorScheme='green'>
                                            Citizen
                                        </Badge>
                                    </center>
                                    <Divider mb='10' />
                                    <Text mb='3' fontSize='xl'><strong>Name : </strong>Name of the person</Text>
                                    <Text mb='3' fontSize='xl'><strong>Age : </strong>Age of the person</Text>
                                    <Text mb='3' fontSize='xl'><strong>Phone : </strong>Phone of the person</Text>
                                    <Text mb='3' fontSize='xl'><strong>Email  : </strong>Email of the person</Text>
                                    <Text mb='3' fontSize='xl'><strong>Area  : </strong>Area of the person</Text>
                                    <Text mb='3' fontSize='xl'><strong>City  : </strong>Area of the person</Text>

                                    <Text color='green' fontSize={'xl'}>
                                        <Badge fontSize={'md'} colorScheme='green'>Problems Reported : </Badge> 1234</Text>
                                </CardBody>

                            </Card>
                            <Button mt='5' colorScheme='red'><ChevronLeftIcon boxSize={8} />Go Back</Button>
                        </TabPanel>
                        <TabPanel>
                            <Card mt='10' boxShadow={'dark-lg'}>

                                <CardBody>
                                    <center>
                                        <Avatar mb='3' size='2xl' />

                                    </center>
                                    <center>
                                        <Badge mb='5' colorScheme='green'>
                                            Citizen
                                        </Badge>
                                    </center>
                                    <Divider mb='10' />
                                    <InputGroup>
                                        <InputLeftAddon children='Name' />
                                        <Input maxLength={20} mb='5' type='text' placeholder='Name of the person' />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftAddon children='Age' />
                                        <Input pattern='\d*' mb='5' type='number' placeholder='Age of the person' />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftAddon children='Phone No.' />
                                        <Input maxLength={10} mb='5' type='number' placeholder='Ph.No of the person' />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftAddon children='Email' />
                                        <Input maxLength={25} mb='5' type='text' placeholder='Email of the person' />
                                        <InputRightAddon children='@gmail.com' />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftAddon children='Address' />
                                        <Input maxLength={100} mb='5' type='text' placeholder='Address of the person' />
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftAddon children='City' />
                                        <Input maxLength={20} mb='5' type='text' placeholder='City of the person' />
                                    </InputGroup>
                                    <Divider />
                                    <Button colorScheme='green'>Submit</Button>

                                </CardBody>
                            </Card>
                            <Button mt='5' colorScheme='red'><ChevronLeftIcon boxSize={8} />Go Back</Button>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Card>

        </>
    )
}

export default Edit_Profile