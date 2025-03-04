import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logo from '../assets/logo.svg';
import { Container, Header } from "../styles/pages/app";

globalStyles();
function App( { Component, pageProps} : AppProps) {
    return (
        <Container>
            <Header>
                <img src={logo.src} />
            </Header>
         <Component {...pageProps} />
        </Container>
    )
}

export default App;
