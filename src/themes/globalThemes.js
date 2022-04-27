const { createTheme } = require('@mui/material')
const { blue, orange } = require('@mui/material/colors')

const theme = createTheme({
    palette: {
        primary: {
            light: blue[100],
            main: blue[500],
            dark: blue[900]
        },
        secondary: {
            light: orange[100],
            main: orange[500],
            dark: orange[900]
        }
    }
})

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})

export {darkTheme, theme}
