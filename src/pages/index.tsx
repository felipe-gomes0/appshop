import 'keen-slider/keen-slider.min.css';
import { GetStaticProps } from "next";
import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react';
import Link from 'next/link';

import { stripe } from '../lib/stripe';
import { HomeContainer, Product } from "../styles/pages/home";

// import periferico1 from '../assets/1.png'
// import periferico2 from '../assets/2.png'
// import periferico3 from '../assets/3.png'
// import periferico4 from '../assets/4.png'

import Stripe from "stripe";

interface HomeProps {
    products: {
        id: string;
        name: string;
        imageUrl: string;
        price: number;
    }[]
}


export default function Home ({ products } : HomeProps) {

    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            perView: 3,
            spacing: 48,
        },
    });
  


    return (
        <HomeContainer ref={sliderRef} className="keen-slider">
            {products.map(product => {
                return (
                    <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
                        <Product  className="keen-slider__slide number-slide">
                            <Image src={product.imageUrl} width={520} height={480} alt="" />
                            <footer>
                                <strong>{product.name}</strong>
                                <span> {product.price}</span>
                            </footer>
                        </Product >
                    </Link>
                )
            })}
            
        </HomeContainer>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price'],
    });

    const products = response.data.map(product => {
        const price = product.default_price as Stripe.Price;
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-BR', {
                style: "currency",
                currency: "BRL",
            }).format(price.unit_amount ? price.unit_amount / 100 : 0)
        }
    });

    return {
        props :{ 
            products,     
        },
        revalidate: 60 * 60 * 2, // 2 hours
    }
};
