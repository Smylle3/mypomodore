import {
    Button,
    Flex,
    FormControl,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import MyInput from './myInput'

export default function Options(props) {
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
                            Notification.permission
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
