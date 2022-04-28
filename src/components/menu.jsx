import { Flex, Grid } from '@chakra-ui/react'
import React from 'react'

export default function Menu() {
    return (
        <Grid
            templateColumns="repeat(3,1fr)"
            gap={1}
            padding={1}
            w="30%"
            minW="20rem"
            h={50}
            borderRadius={50}
            marginBottom={5}
            bgGradient="linear(to-r, transparent, purple.800, transparent)"
        >
            <Flex
                cursor="pointer"
                borderRadius={50}
                w="100%"
                h="100%"
                align="center"
                justify="center"
                border="2px solid orange"
                _hover={{
                    border: '2px solid white',
                    color: 'orange'
                }}
            >
                pomodoro
            </Flex>
            <Flex
                cursor="pointer"
                borderRadius={50}
                w="100%"
                h="100%"
                align="center"
                justify="center"
                _hover={{
                    border: '2px solid white',
                    color: 'orange'
                }}
            >
                short break
            </Flex>
            <Flex
                cursor="pointer"
                borderRadius={50}
                w="100%"
                h="100%"
                align="center"
                justify="center"
                _hover={{
                    border: '2px solid white',
                    color: 'orange'
                }}
            >
                long break
            </Flex>
        </Grid>
    )
}
