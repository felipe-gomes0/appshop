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
            gray900: '#121214',
            gray800: '#202024',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',

            blue500: '#6BB7CB',
            blue300: '#6BB7CB',
        },

        fontSizes: {
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        }
    }
});

