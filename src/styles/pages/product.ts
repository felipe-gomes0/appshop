import { styled } from '..';

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    gap: '4rem',

    maxWidth: 1180,
    margin: '0 auto',
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,

    background: 'linear-gradient(180deg, #EFEFEF 1%, #B1B1B1 100%);',    
    borderRadius: 8,
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'contain',
    }
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray900',
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$blue300',
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$xs',
        lineHeight: 1.6,
        color: '$gray500',
    },

    button: {
        marginTop: '4rem',
        backgroundColor: '$blue300',
        border: 0,
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',
        transition: 'background-color 0.1s ease-in',

        '&:hover': {
            backgroundColor: '$blue500',
            color: '$gray80'
        }

    },
})
