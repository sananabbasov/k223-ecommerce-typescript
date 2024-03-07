import ProductCard from '@/components/ProductCard'
import React from 'react'
import '@/app/globals.css'
import Slider from '@/components/Slider'

interface Product{
    id: number,
    productName: string,
    price: number,
    photoUrl: string
}


function index({ products }: { products: Product[] }) {
  return (
    <div>
      <Slider />
      <ProductCard products={products} />
    </div>
  )
}

export default index


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://192.168.110.249:8080/api/v1/Product/featured`)
  const result = await res.json()
  const products = result.data;



  // Pass data to the page via props
  return { props: { products } }
}