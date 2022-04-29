import {
    Box,
    FormLabel,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from '@chakra-ui/react'
import { useAuth } from 'context/context'
import React from 'react'

export default function MyInput(props) {
    const { userPomodoro, setUserPomodoro, userBreak, setUserBreak } = useAuth()

    const handleChange = (event) => {
        if (props.id === 'pomodoro') {
            setUserPomodoro(event)
        } else if (props.id === 'break') {
            setUserBreak(event)
        }
    }
    return (
        <Box>
            <FormLabel color="gray.400">{props.id}</FormLabel>
            <NumberInput
                step={5}
                defaultValue={props.id === 'pomodoro' ? userPomodoro : userBreak}
                min={1}
                max={1440}
                marginRight={10}
                onChange={(e) => handleChange(e)}
            >
                <NumberInputField bg="gray.200" />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </Box>
    )
}
