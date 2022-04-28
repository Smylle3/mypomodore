import React, { useEffect, useState } from 'react'
import { Button, CircularProgress, CircularProgressLabel, Text } from '@chakra-ui/react'

export default function Timer() {
    const [isStart, setIsStart] = useState(false)
    const [timer, setTimer] = useState(false)
    const [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    const [prog, setProg] = useState(1)
    const [isState, setIsState] = useState('pomodoro')
    const [firstTime, setFirstTime] = useState(0)

    let seconds = 0
    let minutes = 0
    let progress = 0

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
            setFirstTime(firstTime + 1)
        } else if (firstTime % 2 !== 0) {
            setIsState('break')
            progress = 300
            setFirstTime(firstTime + 1)
        }
        setIsStart(true)
        setTimer(setInterval(() => showTime(), 1000))
    }

    function stopTimer(event) {
        if (event.type === 'click') {
            setFirstTime(0)
        }
        setIsStart(false)
        clearInterval(timer)
        seconds = 0
        minutes = 0
        progress = 1500
        setMin(0)
        setSec(0)
        setProg(0)
    }

    function showTime() {
        seconds++
        progress--
        setProg(progress)
        setSec(seconds)
        if (seconds >= 60) {
            seconds = 0
            setSec(seconds)
            minutes++
            setMin(minutes)
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
                <Text fontFamily="monospace" >{min >= 10 ? min : `0${min}`}:{sec >= 10 ? sec : `0${sec}`}</Text>
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
