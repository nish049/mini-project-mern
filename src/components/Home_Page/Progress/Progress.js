import React from 'react'
import { Container, Card, CardBody, Heading, Stack, StackDivider, Box, Text } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
const progress = () => {
  return (
    <>
      <Container h='calc(80vh)' borderRadius={10} bg='#e6e6e6' pt='5' mt='10' mb='10'>
        <center><Heading>Our Progress</Heading></center>

        <Card boxShadow='dark-lg' borderRadius={10} mt='10' mb='10'>


          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box  >
                <Heading size='xs' textTransform='uppercase'>
                  Weekly Data
                </Heading>
                <div>
                  <Text mt='5' mb='2'>Problems Reported</Text>
                  <Progress mt='3' mb='5' colorScheme='green' hasStripe isIndeterminate value={64} />
                </div>
                <div>
                  <Text mt='5' mb='2'>Problems Solved</Text>
                  <Progress colorScheme='green' value={80} />
                </div>

              </Box>

            </Stack>
          </CardBody>
        </Card>
        <Card boxShadow='dark-lg' borderRadius={10} mt='10' mb='10'>


          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Montly Data
                </Heading>
                <div>
                  <span>Problems Reported</span>
                  <CircularProgress isIndeterminate mt='5' ml='10' color='green.300' value={30} size='80px' >
                    <CircularProgressLabel>40%</CircularProgressLabel>

                  </CircularProgress>
                </div>
                <div>
                  <span>Problems Solved  </span>
                  <CircularProgress mt='5' color='green.300' ml='12' value={30} size='80px'>
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                </div>



              </Box>


            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}

export default progress