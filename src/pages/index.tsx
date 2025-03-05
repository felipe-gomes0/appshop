import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import { GetServerSideProps } from "next";

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import periferico1 from '../assets/1.png'
import periferico2 from '../assets/2.png'
import periferico3 from '../assets/3.png'
import periferico4 from '../assets/4.png'
import { stripe } from "../lib/stripe";

interface HomeProps {
    Products: {
        id: string;
        name: string;
        imageUrl: string;
        price: number;
    }[]
}


export default function Home ({ products} : HomeProps) {

    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            perView: 3,
            spacing: 48,
        },
    });


    return (
        <HomeContainer ref={sliderRef} className="keen-slider">
            <Product className="keen-slider__slide number-slide1">
                <Image src={periferico1} width={520} height={480} alt=""/>
                <footer>
                    <strong>Akko 5075b plus v2</strong>
                    <span>Switch Cream Blue</span>
                </footer>
                </Product >
            <Product className="keen-slider__slide number-slide2">
                <Image src={periferico2} width={520} height={480} alt=""/>
                <footer>
                    <strong>Logitech MX Mechanical</strong>
                    <span>Switch Tactile Brown</span>
                </footer>
            </Product>
            <Product className="keen-slider__slide number-slide3">
                <Image src={periferico3} width={520} height={480} alt=""/>
                <footer>
                    <strong>Logitech MX Mechanical</strong>
                    <span>Switch Tactile Brown</span>
                </footer>
            </Product>
            <Product className="keen-slider__slide number-slide4">
                <Image src={periferico4} width={520} height={480} alt=""/>
                <footer>
                    <strong>Logitech MX Master 3s</strong>
                    <span>Clique Silencioso</span>
                </footer>
            </Product>
        </HomeContainer>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
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
            price: price.unit_amount / 100, 
        }
    })
    

    return {
        props :{ 
            products,     
        }
    }
};