import Link from 'next/link'
import './index.scss'

function ProdLinks() {
  return (
    <div>
      <h3 className='droptitle'>MƏHSULLARIMIZ</h3>
    <ul className='droplist'>
      <li>
          <Link className='dropLink' href='/products/ekin-makina'>EKIN MAKİNA | İnjeksion Makina</Link>
      </li>
      <li>
          <Link className='dropLink' href='/products/seri-makina'>SERI MAKINA | Karton Qutu Makina</Link>
      </li>
      <li>
          <Link className='dropLink' href='/products/tur-var-makina'>TÜRVAR MAKİNA | Karton Köşəbənt Makina</Link>
      </li>
      <li>
          <Link className='dropLink' href='/products/ileri-makina'>İLERİ MAKİNA | Karton Qatlama Makina</Link>
      </li>
      <li>
          <Link className='dropLink' href='/products/soley-makina'>SOLEY MAKINA | Kağız Klok Makina</Link>
      </li>
      <li>
          <Link className='dropLink' href='/products/aweta'>AWETA | Çeşidləmə Makina</Link>
      </li>
      <li>
          <Link className='dropLink' href='/products/ceylift'> CEYLIFT | Avtokar və ElektroKar</Link>
      </li>
      <li>
        <Link className='dropLink' href='/products/karaduman-kalip'>KARADUMAN KALIP | Plastik yeşik qəlibləri</Link>
      </li>
      <li>
        <Link className='dropLink' href='/products/haknersan'>HAKNERSAN | Muasir Bağların Qurulması</Link>
      </li>
      <li>
          <Link className='dropLink' href='/products/elave-mehsullar'>NOBEL | Karton Kleyi </Link>
      </li>
      <li>
        <Link className='dropLink' href='/products/elave-mehsullar'>Rezin İp</Link>
      </li>
      <li>
        <Link className='dropLink' href='/products/elave-mehsullar'>Meyvə Violu</Link>
      </li>

      <li>
        <Link className='dropLink' href='/products/elave-mehsullar'>Qranul</Link>
      </li>

    </ul>
  </div>

  )
}

export default ProdLinks
