import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <Nav/>
      <section className='body'>
        <a href='/products'>
          <div className='botao'>
            <h2>
              Products
            </h2>
          </div>
        </a>
      </section>
      <Footer/>
    </div>
  )
}
