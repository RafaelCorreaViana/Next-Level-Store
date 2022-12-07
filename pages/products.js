import React from 'react';
import axios from 'axios';
import Header from './components/Header'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Link from 'next/link';

function Users({products}) {
    return(
        <div>
            <Header/>
            <Nav voltar='/' />
            <div className='products'>
                {
                products.map((product) => (
                    <div className='product'>
                        <div className='img'> <img src={product.image}></img> </div>
                        <div className='texto' id='preco'> ${product.price} </div>
                        <Link href='/product/[id]' as={`product/${product.id}`} >    
                            <div className='texto link'> {product.title} </div>
                        </Link>
                    </div>
                ))}

            </div>
            <Footer/>
        </div>
    )
}

export async function getStaticProps(context) {
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );
    const data = await response.data;

    return {
        props: {products:data}
    }
}

export default Users;