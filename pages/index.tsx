import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, {useState} from "react";

const inter = Inter({subsets: ['latin']})

const products = [
    {
        "name": "Apple iPhone 12 Pro",
        "price": "$999.99",
        "category": "Electronics",
        "brand": "Apple",
        "description": "The latest and greatest iPhone from Apple, featuring a triple-camera system, A14 Bionic chip, Ceramic Shield front cover, and 5G capability."
    },
    {
        "name": "Samsung Galaxy S21",
        "price": "$799.99",
        "category": "Electronics",
        "brand": "Samsung",
        "description": "The latest flagship smartphone from Samsung, featuring a triple-camera system, Snapdragon 888 processor, and 5G capability."
    },
    {
        "name": "Sony WH-1000XM4 Noise Cancelling Headphones",
        "price": "$349.99",
        "category": "Electronics",
        "brand": "Sony",
        "description": "The latest and greatest noise-cancelling headphones from Sony, featuring advanced noise-cancellation technology and Alexa and Google Assistant compatibility."
    },
    {
        "name": "Bose SoundSport Wireless Headphones",
        "price": "$129.99",
        "category": "Electronics",
        "brand": "Bose",
        "description": "Wireless headphones from Bose, featuring a comfortable fit and high-quality sound."
    },
    {
        "name": "MacBook Pro",
        "price": "$1,299.99",
        "category": "Electronics",
        "brand": "Apple",
        "description": "The latest MacBook Pro from Apple, featuring a 10th generation Intel Core i5 processor, 16GB of memory, and a 512GB SSD."
    },
    {
        "name": "LG OLED TV",
        "price": "$1,499.99",
        "category": "Electronics",
        "brand": "LG",
        "description": "The latest OLED TV from LG, featuring 4K resolution, HDR support, and built-in smart TV capabilities."
    },
    {
        "name": "Nike Air Zoom Pegasus 38",
        "price": "$129.99",
        "category": "Clothing",
        "brand": "Nike",
        "description": "The latest version of the popular Nike Air Zoom Pegasus running shoe, featuring a lightweight design and responsive Zoom Air cushioning."
    },
    {
        "name": "Adidas Ultraboost 21",
        "price": "$159.99",
        "category": "Clothing",
        "brand": "Adidas",
        "description": "The latest version of the popular Adidas Ultraboost running shoe, featuring a lightweight design and responsive Boost cushioning."
    }
]


function Product(name: string, price: number, category: string, brand: string, description: string) {
    return (
        <div>
            <h2>{name}</h2>
            <div>
                <h3>{brand}</h3><h3>{category}</h3>
            </div>
            <p>{description}</p>
            <h2>{price}</h2>
        </div>

    )
}

let counter: number = 0;

function add() {
    counter++;
}

function subtract() {
    counter--;
}

export default function Home() {
    return (
        <>
            <div>
                <h1>{counter}</h1>
                <div>
                    <button type="button" onClick={() => subtract()}>Odebrat</button>
                    <button type="button" onClick={() => add()}>Přidat</button>
                </div>
            </div>

            <div>
                {products.map((product) => <Product name={product.name} price={product.price} category={product.category} brand={product.brand} description={product.description}/>)}
            </div>
        </>
    )
}

