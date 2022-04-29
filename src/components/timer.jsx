import React, { useEffect, useState } from 'react'
import { Button, CircularProgress, CircularProgressLabel, Text } from '@chakra-ui/react'

export default function Timer() {
    const [isStart, setIsStart] = useState(false)
    const [timer, setTimer] = useState(false)
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    const [fSec, setFSec] = useState(0)
    const [fMin, setFMin] = useState(25)
    const [prog, setProg] = useState(1)
    const [isState, setIsState] = useState('pomodoro')
    const [firstTime, setFirstTime] = useState(0)

    let seconds = 0
    let minutes = 0
    let progress = 0

    let finalSeconds = 0
    let finalMinutes = 0

    useEffect(() => {
        if (prog === 0) {
            stopTimer(0)
            startTimer()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prog])

    function startTimer() {
        if (firstTime % 2 === 0) {
            setIsState('pomodoro')
            progress = 1500
            finalMinutes = 25
            setFirstTime(firstTime + 1)
        } else if (firstTime % 2 !== 0) {
            setIsState('break')
            progress = 300
            finalMinutes = 5
            setFirstTime(firstTime + 1)
        }
        setIsStart(true)
        setTimer(setInterval(() => showTime(), 1000))
    }

    function stopTimer(event) {
        if (event.type === 'click') {
            setFirstTime(0)
            finalMinutes = 25
        } else if (isState === 'break') {
            finalMinutes = 5
            setFMin(finalMinutes)
        } else if (isState === 'pomodoro') {
            finalMinutes = 25
            setFMin(finalMinutes)
        }
        setIsStart(false)
        clearInterval(timer)
        seconds = 0
        finalSeconds = 0
        minutes = 0
        progress = 1500
        setMin(0)
        setFSec(0)
        setSec(0)
        setProg(1)
    }

    function showTime() {
        finalSeconds--
        seconds++
        progress--
        setProg(progress)
        setSec(seconds)
        setFSec(finalSeconds)
        if (seconds >= 60) {
            seconds = 0
            setSec(seconds)
            minutes++
            setMin(minutes)
        }
        if (finalSeconds < 0) {
            finalSeconds = 59
            setFSec(finalSeconds)
            finalMinutes--
            setFMin(finalMinutes)
        }
    }

    return (
        <CircularProgress
            value={prog}
            max={isState === 'pomodoro' ? 1500 : 300}
            size="20rem"
            capIsRound
            color={isState === 'pomodoro' ? 'orange.main' : 'blue.500'}
            trackColor="transparent"
            thickness={3}
        >
            <CircularProgressLabel
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                <Text fontSize="md" fontFamily="serif">
                    {isState === 'pomodoro' ? 'Working Time' : 'Breaking Time'}
                </Text>
                <Text fontFamily="monospace">
                    {min >= 10 ? min : `0${min}`}:{sec >= 10 ? sec : `0${sec}`}
                </Text>
                <Text fontSize="md">
                    {fMin >= 10 ? fMin : `0${fMin}`}:{fSec >= 10 ? fSec : `0${fSec}`}
                </Text>
                {isStart ? (
                    <Button
                        variant="unstyled"
                        colorScheme="blackAlpha"
                        letterSpacing={9}
                        onClick={(e) => stopTimer(e)}
                    >
                        reset
                    </Button>
                ) : (
                    <Button
                        variant="unstyled"
                        colorScheme="blackAlpha"
                        letterSpacing={9}
                        onClick={() => startTimer()}
                    >
                        start
                    </Button>
                )}
            </CircularProgressLabel>
        </CircularProgress>
    )
}
