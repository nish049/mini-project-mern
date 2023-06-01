import React from 'react'
import { Spacer, Text, Button, Center, Textarea, Flex, Box, Heading, Input, InputGroup, Stack, Container, InputLeftAddon } from '@chakra-ui/react'
import { AspectRatio } from '@chakra-ui/react'

import './MapboxMap.css'

const Pdetails = () => {
    return (
        <>
            <Flex bg='#e62e00' pt='3' pb='3' mb='10'>
                <Box>
                    <center>
                        <Heading color={'white'} ml='5'>More Details...</Heading>
                    </center>
                </Box>

            </Flex >
            <Container>
                <Stack spacing={6} mb='10'>
                    <InputGroup>
                        <InputLeftAddon children='Name of the problem' />
                        <Input type='text' placeholder='Automatically fill' />l</InputGroup>

                    {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
                    <InputGroup>
                        <InputLeftAddon children='Associated Department' />
                        <Input type='text' placeholder='Automatically fill' />l</InputGroup>
                </Stack>
                <Text><strong>Description: </strong></Text>

                <Textarea mb='6' placeholder='Add more details(optional)...' />
                <Text><strong>Upload a photo : </strong></Text>

                <Input type="file" name="image" accept="image/*" ></Input>
                <Button mt='3' type="submit">Upload</Button>

                <AspectRatio mt='10' mb='8' ratio={16 / 9}>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
                    />

                </AspectRatio>

                <Center className='pointer' boxShadow='dark-lg' bg='red' h='100px' color='white' mt='10' mb='5' borderRadius={10}>
                    <Box as='button' borderRadius='md' bg='red' color='white' px={4} h={8} m='auto'>
                        <Heading>Submit</Heading>
                    </Box>
                </Center>
            </Container >
        </>
    )
}

export default Pdetails