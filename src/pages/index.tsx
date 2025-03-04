import { styled } from "../styles"

const Button = styled('button', {
    backgroundColor: '$primary',
    color: 'white',
    padding: '10px 20px',
    borderRadius: 5,
    cursor: 'pointer',

    span: {
        fontWeight: 'bold',
    },


    '&:hover': {
        backgroundColor: 'lightblue'
    }
})

export default function Home () {
    return (
        <Button><span>Enviar</span></Button>
    )
}