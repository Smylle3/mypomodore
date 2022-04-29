import React from 'react'
import { Flex, Heading, IconButton, useDisclosure } from '@chakra-ui/react'
import { BsFillGearFill } from 'react-icons/bs'
import Circles from 'components/circles'
import Timer from 'components/timer'
import Options from 'components/options'
import { useAuth } from 'context/context'

export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { setUserPomodoro, setUserBreak } = useAuth()

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
            <IconButton
                variant="ghost"
                colorScheme="blackAlpha"
                icon={<BsFillGearFill color="white" />}
                onClick={onOpen}
            />
            <Circles>
                <Timer />
            </Circles>
            <Options
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                setUserBreak={setUserBreak}
                setUserPomodoro={setUserPomodoro}
            />
        </Flex>
    )
}
