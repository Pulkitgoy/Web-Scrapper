import React from 'react'
import Image from 'next/image'
import './globals.css'
import "../tailwind.config.ts"
import Searchbar from '@/components/Searchbar'
import HeroCarousel from '@/components/HeroCarousel'
const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here
              <Image src="/assets/icons/arrow-right.svg" width={16} height={16} alt="Arrow right" />
            </p>

            <h1 className="head-text">
              Buy your Favorites practically with <span className='text-primary'>WiseBuy</span>
            </h1>

            <p className='mt-6'>
              Powerfull, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>
            <Searchbar/>

          </div>
          <HeroCarousel/>
        </div>
      </section>

      <section className='trending-section'>
        <h2 className='section-text'>Trending Products</h2>
        <div className='flex flex-wrap gap-x-8 gap-y-16'>
          {['Apple Iphone', 'Book' , 'headPhone'].map((prod)=>{
            return <div key={prod}>{prod}</div>
          })}
        </div>
      </section>
    </>
  )
}

export default Home