import { Flex } from '@chakra-ui/react'
import React from 'react'

export default function Circles(props) {
    return (
        <Flex
            boxShadow="-20px -20px 70px 10px #2D3748"
            borderRadius="full"
            marginTop={50}
        >
            <Flex
                bgGradient="linear(to-br, gray.900, purple.500)"
                boxShadow="30px 30px 30px 5px #322659"
                borderRadius="full"
                w="20rem"
                h="20rem"
                align="center"
                justify="center"
            >
                <Flex
                    borderRadius="full"
                    w="17rem"
                    h="17rem"
                    align="center"
                    justify="center"
                    bg="gray.700"
                >{props.children}</Flex>
            </Flex>
        </Flex>
    )
}
