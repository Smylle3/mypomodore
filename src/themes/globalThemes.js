const { extendTheme } = require("@chakra-ui/react");

const theme = extendTheme({
    colors: {
        purple: {
            light: '#4A5568',
            main: '#2D3748',
            dark: '#1A202C'
        },
        orange: {
            light: '#FEEBC8',
            main: '#DD6B20',
            dark: '#652B19'
        },
        gray: {
            light: '#EDF2F7',
            main: '#718096',
            dark: '#171923'
        }
    },
    fonts: {
        body: "system-ui, sans-serif",
        heading: "Georgia, serif",
        mono: "Menlo, monospace",
    },
})

export default theme