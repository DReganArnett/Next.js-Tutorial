import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <button className='btn btn-primary'><Link href="/users">Users</Link></button>
      <br /><br />
      <ProductCard />
    </main>
  )
}
