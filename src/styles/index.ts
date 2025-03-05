import { createStitches } from '@stitches/react';

export const {
    config, 
    styled,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
    
} = createStitches({
    theme: {
        colors: {
            white: '#F8F8FF',
            gray80: '##F4F4F4',
            gray100: '#e1e1e6',
            gray300: '#c4c4cc',
            gray500: '#494D52',
            gray800: '#202024',
            gray900: '#121214',

            blue100: '#CCDAFF',
            blue300: '#6BB7CB',
            blue500: '#0B41CB',
        },

        fontSizes: {
            xs: '1rem',
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        }
    }
});

