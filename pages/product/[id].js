import React from 'react';
import axios from 'axios';
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer';

function Product({product = {} }){
    return(
        <div>
            <Header/>
            <Nav/>
            <div className='produto'>
                <h1>{product.title}</h1>
                <div className='imagem'>
                <img src={product.image} />
                </div>
                <h3>${product.price}</h3>
                <div className='descricao'>
                    <p>{product.description}</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export async function getStaticProps(context) {
    const response = await axios.get(
        'https://fakestoreapi.com/products/' + context.params.id
    );
    const product = await response.data;
    return {
        props: {product}
    }
   }

export async function getStaticPaths() {
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    )
    const products = await response.data;
    const paths = products.map((product) => {
        return {params:{id:String(product.id)}}
    })
    return {
        paths,
        fallback: true,
    }
}

export default Product;