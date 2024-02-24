import '@/styles/reset.css'
import Footer from '@/components/footer/footer';
import NavbarHead from '@/components/nav-head';
import Navbar from '@/components/navbar/navbar';
import { Bebas, roboto} from '@/font/font';
import HeadFooter from '@/components/foot-head';
import Head from 'next/head';
// import Head from 'next/head';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>LALETECH MMC MÜHƏNDİSLİK ŞİRKƏTİ</title>
        <meta name='description' content='Generadted by Elchin Abuzarli'/>
  <link rel='icon' href='/favicon.ico'/>
</Head>

      <body className={`${roboto.variable} ${Bebas.variable}`} >
        <NavbarHead/>
        <Navbar/>
        <main>{children}</main>
        <HeadFooter/>
        <Footer/>
        
        </body>
    </html>
  );
}



// import { Bebas, roboto } from '@/font/font';
// import ProdTitle from '@/product-component/prod-title';

// export default function ProdLayout({ children }) {
//   return (
//     <div >
//       <ProdTitle/>
//       <main>{children}</main>
//     </div>
//   );
// }