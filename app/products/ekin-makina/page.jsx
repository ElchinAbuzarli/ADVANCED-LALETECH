'use client'
import { Grid } from '@mui/material'
// import ekinLogo from '../images/ekinmakinabg.png'

import './index.scss'
import { getAllProducts } from '@/api/ekinRequests'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import  {MoonLoader}  from 'react-spinners'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import ProdTitle from '@/product-component/prod-title'
const EKIN = () => {

  const [ekinProducts,setEkinProducts]=useState()
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllProducts()
      .then((res) => {
        setEkinProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setEkinProducts]);

  return (
    <div>
                  <title>Ekin Makina-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>

      <ProdTitle/>
      
      {/* <img className='prod-logo' style={{marginTop:'100px', marginBottom:'100px'}} src={ekinLogo} alt="" /> */}
      {loading ? (
                <MoonLoader
                className='loading'
                color={"#5DDAC9"}
                loading={loading}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
      ) : (
        <div className='all-products'>
          <Grid style={{ marginBottom: '100px' }} className='grid' container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {ekinProducts &&
              ekinProducts.map((ekinProduct) => (
                <Grid key={ekinProduct._id} item lg={3}>

                    {/* EKIN CARD */}
                  <div class="card">
      <div class="card-image-container">
      <Image
              className='prod-img'
              src={ekinProduct.imageURL}
              alt='Packing'
              width={400}
              height={400}
            />
      </div>
      <p class="card-title">{ekinProduct.weight} {ekinProduct.name}</p>

      <Link href={ekinProduct.link} class="card-btn">
      <FontAwesomeIcon icon={faCircleInfo} />
        <span class="card-btn-text">Məhsula Bax</span>
      </Link>
    </div>

                </Grid>
              ))}
          </Grid>
        </div>
      )}
    </div>
  );
}
export default EKIN
