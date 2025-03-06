import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 456,
});

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #EFEFEF 1%, #B1B1B1 100%);',    
    borderRadius: 8,
    cursor: 'pointer',
    minWidth: 540,
    position: 'relative',
    overflow: 'hidden',
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease',


    img: {
        objectFit: 'contain',
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem', 
        padding: '2rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0,0,0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        'strong': {
            fontSize: '$md',
            color: '$gray100',
        },

        span: {
            fontSize: '$xl',
            color: '$gray300',
            fontWeight: 'bold',
        },

        
    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        },
    }
});