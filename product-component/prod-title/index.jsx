'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './index.scss'


function ProdTitle() {
  const pathname = usePathname()

  return (
    <section className='prod-title-container'>
      <div className='prod-title-wrapper'>
      <h1 className='prod-title'>MƏHSULLARIMIZ</h1>
      </div>


      <div className='product-nav'>
      <Link className={`prod-nav ${pathname === '/products/ekin-makina' ? 'active' : 'prod-nav'}`} href="/products/ekin-makina">EKIN MAKINA</Link>
            <Link className={`prod-nav ${pathname === '/products/laletech-sogutma' ? 'active' : 'prod-nav'}`} href='/products/laletech-sogutma'>LALETECH</Link>
            <Link className={`prod-nav ${pathname === '/products/aweta' ? 'active' : 'prod-nav'}`} href='/products/aweta'>AWETA</Link>
            <Link className={`prod-nav ${pathname === '/products/seri-makina' ? 'active' : 'prod-nav'}`} href='/products/seri-makina'>SERI MAKINA</Link>
            <Link className={`prod-nav ${pathname === '/products/ceylift' ? 'active' : 'prod-nav'}`} href='/products/ceylift'>CEYLİFT</Link>
            <Link className={`prod-nav ${pathname === '/products/ileri-makina' ? 'active' : 'prod-nav'}`} href='/products/ileri-makina'>ILERI MAKINA</Link>
            <Link className={`prod-nav ${pathname === '/products/soley-makina' ? 'active' : 'prod-nav'}`} href='/products/soley-makina'>SOLEY MAKINA</Link>
      
            <Link className={`prod-nav ${pathname === '/products/osman-cubuk' ? 'active' : 'prod-nav'}`} href='/products/osman-cubuk'>OSMAN ÇUBUK</Link>
            <Link className={`prod-nav ${pathname === '/products/tur-var-makina' ? 'active' : 'prod-nav'}`} href='/products/tur-var-makina'>TÜR-VAR MAKİNA</Link>

            <Link className={`prod-nav ${pathname === '/products/karaduman-kalip' ? 'active' : 'prod-nav'}`} href='/products/karaduman-kalip'>KARADUMAN KALIP</Link>
            <Link className={`prod-nav ${pathname === '/products/haknersan' ? 'active' : 'prod-nav'}`} href='/products/haknersan'>HAKNERSAN</Link>
            <Link className={`prod-nav ${pathname === '/products/cetinel' ? 'active' : 'prod-nav'}`} href='/products/cetinel'>ÇETİNEL</Link>
            <Link className={`prod-nav ${pathname === '/products/uzay-baskul' ? 'active' : 'prod-nav'}`} href='/products/uzay-baskul'>UZAY BASKÜL</Link>


            <Link className={`prod-nav ${pathname === '/products/filo-kompressor' ? 'active' : 'prod-nav'}`} href='/products/filo-kompressor'>FİLO KOMPRESÖR</Link>
            <Link className={`prod-nav ${pathname === '/products/other-products' ? 'active' : 'prod-nav'}`} href='/products/other-products'>ƏLAVƏ MƏHSULLAR</Link>

       </div>


    </section>
  )
}

export default ProdTitle
