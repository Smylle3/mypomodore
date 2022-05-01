import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Switch,
    Text
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MyInput from './myInput'

export default function Options(props) {
    const [enableNotify, setEnableNotify] = useState(false)
    const handleEnable = () => {
        if (Notification.permission === 'granted') {
            Notification.requestPermission((response) => {
                if (response === 'granted') {
                    setEnableNotify(true)
                } else {
                    setEnableNotify(false)
                }
            })
        } else if (
            Notification.permission === 'denied' ||
            Notification.permission === 'default'
        ) {
            Notification.requestPermission((response) => {
                if (response === 'granted') {
                    setEnableNotify(true)
                } else {
                    setEnableNotify(false)
                }
            })
        }
    }

    useEffect(() => {
        setEnableNotify(Notification.permission === 'granted')
    }, [])

    useEffect(() => props.onOpen, [props.onOpen])

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent borderRadius={25}>
                <ModalHeader>Settings</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex direction="column">
                        <Text>TIME (MINUTES)</Text>
                        <FormControl display="flex" flexDirection="row">
                            <MyInput id="pomodoro" number={25} />
                            <MyInput id="break" number={5} />
                        </FormControl>
                        {window.Notification ? (
                            <>
                                <FormControl
                                    display="flex"
                                    alignItems="center"
                                    marginTop={5}
                                >
                                    <FormLabel
                                        htmlFor="email-alerts"
                                        mb="0"
                                        onClick={() => handleEnable()}
                                    >
                                        Enable notifications?
                                    </FormLabel>
                                    <Switch
                                        colorScheme="orange"
                                        isChecked={enableNotify}
                                        onChange={() => handleEnable()}
                                    />
                                </FormControl>
                            </>
                        ) : (
                            <Text color="red" margin="1em 1em 0em 0">
                                This browser doesn't have support for notifications.
                            </Text>
                        )}
                    </Flex>
                </ModalBody>
                <ModalFooter display="flex" justifyContent="center">
                    <Button colorScheme="green" borderRadius={10} onClick={props.onClose}>
                        Apply
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
