'use client'
import { Grid } from '@mui/material'
import './index.scss'
import { getAllOsmanCubukProducts } from '@/api/cetinelRequests'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import ProdTitle from '@/product-component/prod-title'
import { MoonLoader } from 'react-spinners'

const OsmanCubuk = () => {

  const [osmanCubukProducts,setOsmanCubukProducts]=useState()
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllOsmanCubukProducts()
      .then((res) => {
        setOsmanCubukProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setOsmanCubukProducts]);

  return (
    <section>

<title>Osman Çubuk-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>

      
      <ProdTitle/>

      
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
        <div className='all-products' style={{ marginBottom: '100px' }}>
          <Grid className='grid' container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {osmanCubukProducts &&
              osmanCubukProducts.map((osmanCubukProduct) => (
                <Grid key={osmanCubukProduct._id} item lg={3}>
                  {/* Osman Cubuk Product Card */}

                  <div class="card">
      <div class="card-image-container">
      <Image
              className='prod-img'
              src={osmanCubukProduct.imageURL}
              alt='Packing'
              width={400}
              height={400}
            />
      </div>
      <p className='prod-name'>{osmanCubukProduct.title}</p>
      <p class="card-title">{osmanCubukProduct.name}</p>

      <Link href={osmanCubukProduct.link} class="card-btn">
      <FontAwesomeIcon icon={faCircleInfo} />
        <span class="card-btn-text">Məhsula Bax</span>
      </Link>
    </div>

                </Grid>
              ))}
          </Grid>
        </div>
      )}
    </section>
  );
}

export default OsmanCubuk;