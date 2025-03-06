import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
    customerName: string;
    product: {
        name: string;
        imageUrl: string;
    }
}

export default function Sucess({ customerName, product} : SuccessProps) {
    return (
        <>
        <Head> 
            <title>Compra efetuada! | Web Shop</title>
            <meta name="robots" content="noindex"/>
        </Head>
            <SuccessContainer>
                <h1>Compra concluída com sucesso! </h1>

                <ImageContainer>
                    <Image src={product.imageUrl} width={120} height={160} alt=""/>
                </ImageContainer> 

                <p>
                    Obrigado <strong>{customerName}</strong>, seu produto <strong>{product.name}</strong> está a caminho de sua casa. Fique de olho no seu e-mail para os detalhes do envio!
                </p>

                <Link href="/">
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
    const sessionId  = String(query.session_id);


    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product'],
    });

    const customerName = session.customer_details?.name;
    const product = session.line_items?.data[0].price?.product as Stripe.Product;
    console.log(product);
    
    return {
        props: {
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0],
            }
        },
    }
};