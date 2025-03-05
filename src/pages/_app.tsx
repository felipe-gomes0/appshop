import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";
import Image from 'next/image';
import logo from '../assets/logo.svg';
import { AppProps } from "next/app";

globalStyles();
function App( { Component, pageProps} : AppProps) {
    return (
        <Container>
            <Header>
                <Image src={logo} alt='Logo' width={90} height={90}/>
            </Header>
         <Component {...pageProps} />
        </Container>
    )
}

export default App;
