import React from 'react'
import { Heading, Box, Center } from '@chakra-ui/react'
import './report.css'
const Report = () => {
    return (
        <Center className='pointer' boxShadow='dark-lg' bg='tomato' h='100px' color='white' ml='5' mt='10' mr='5' mb='5' borderRadius={10}>
            <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8} m='auto'>
                <Heading>Report A Problem </Heading>
            </Box>
        </Center>

    )
}

export default Report