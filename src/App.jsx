import { ChakraProvider } from '@chakra-ui/react'
import theme from 'themes/globalThemes'
import Home from 'home'

export default function App() {
    return (
        <ChakraProvider theme={theme}>
            <Home />
        </ChakraProvider>
    )
}
