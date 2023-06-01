import React from 'react'
import { Alert, AlertTitle, AlertDescription, Box, Heading, Text, Center } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import { WarningTwoIcon } from '@chakra-ui/icons';


const Thank_You = () => {
    return (
        <>
            <Center >

                <Center d="flex" justifyContent="center" alignItems="center" h="100vh" >
                    <Box textAlign="center">
                        <CheckCircleIcon boxSize={100} color='green' />
                        <Heading size="lg" mt="4">
                            Thank you for submitting the issue
                        </Heading>
                        <Text mt="4">
                            We appreciate your help and will work with the concerned department on resolving the issue as soon as possible.
                        </Text>
                        <Alert mt='50' status='error'>


                            <AlertDescription><AlertTitle><WarningTwoIcon color='red' mr='2' mb='1' />Notice:</AlertTitle>Spamming or improper submissions will lead to account termination</AlertDescription>
                        </Alert>
                    </Box>
                </Center>
            </Center>
        </>


    )
}

export default Thank_You