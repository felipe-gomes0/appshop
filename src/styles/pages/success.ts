import { styled } from "@stitches/react";


export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '2xl',
        color: '$blue300',
    },

    p: {
        fontSize: '$md',
        color: '$gray500',
        maxWidth: 560,
        textAlign: 'center',     
        marginTop: '2rem',
        lineHeight: 1.4,

        'strong' : {
            fontSize: '$lg',
            fontWeight: 'bold',
            color: '$blue300'
        },

    },

   

    a: {
        marginTop: '5rem',
        display: 'block',
        color: '$blue300',
        fontSize: '$lg',
        fontWeight: 'bold',
        textDecoration: 'none',


        '&:hover': {
            color: '$blue500'
        },
    }

});

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 230,
    height: 245,
    background: 'linear-gradient(180deg, #EFEFEF 1%, #B1B1B1 100%);',    
    borderRadius: 8,
    padding: '0.25rem',
    marginTop: '4rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img : {
        width: 200,
        objectFit: 'contain',
    }


});