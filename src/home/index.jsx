import React from 'react'
import {
    Flex,
    Heading
} from '@chakra-ui/react'
import Circles from 'components/circles'
import Timer from 'components/timer'

export default function Home() {
    return (
        <Flex
            w="100vw"
            h="100vh"
            align="center"
            justify="center"
            direction="column"
            bg="#171923"
            color="orange.50"
        >
            <Heading
                bgGradient="linear(to-l, gray.500, gray.50, gray.500)"
                bgClip="text"
                marginBottom={10}
            >
                POMODORO
            </Heading>
            <Circles>
                <Timer />
            </Circles>
            
        </Flex>
    )
}
