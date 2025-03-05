import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        border: 0,
        boxSizing: 'border-box',
    },
    
    body: {
        backgroundColor: '$gray80',
        color: '$gray100'
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 'bold',
    },

}) ;