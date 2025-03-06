/* eslint-disable @typescript-eslint/no-explicit-any */
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/src/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";


interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
        defaultPriceId: string;
    };
};

export default function Product({ product }: ProductProps) {
    const [ isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

    async function handleBuyProduct() {
        try {
            
            setIsCreatingCheckoutSession(true);
            const response = await axios.post('/api/checkout', {
                priceId: product.defaultPriceId,
            });
            
            console.log(response);
            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl;
            
        } catch (err) {
            console.log(err);
            
            // conectar com uma ferramente de observabilidade - Datadog / Sentry

            setIsCreatingCheckoutSession(false);
            alert('Erro ao direcionar ao checkout!')
        }
    }

    return (
       <ProductContainer>
        <ImageContainer>
            <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
            <h1>{product.name}</h1>
            <span>{product.price}</span>

            <p>{product.description}</p>

            <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
                Comprar agora
            </button>
        </ProductDetails>
       </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
        ],
        fallback: 'blocking',
    }
};

export const getStaticProps: GetStaticProps< any, { id: string }> = async ({ params }) => {
    const productId = params?.id ? String(params.id) : '';

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    });

    const price = product.default_price as Stripe.Price;

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                description: product.description,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                    style: "currency",
                    currency: "BRL",
                    }).format(price.unit_amount ? price.unit_amount / 100 : 0),
                defaultPriceId: price.id, 
            },
        },
        revalidate: 60 * 60, // 1 hour
    }
};