'use client'
import { Grid } from '@mui/material'
import './index.scss'
import { getAllSoleyProducts } from '@/api/soleyRequests'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import ProdTitle from '@/product-component/prod-title'
import { MoonLoader } from 'react-spinners'

const SoleyMakina = () => {
  const [soleyProducts,setSoleyProducts]=useState()
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllSoleyProducts()
      .then((res) => {
        setSoleyProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setSoleyProducts]);
  return (
    <section>

<title>Soley Makina-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>

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
            {soleyProducts &&
              soleyProducts.map((soleyProduct) => (
                <Grid key={soleyProduct._id} item lg={3}>
                  {/* Soley Makina Product Card */}
                  <div class="card">
      <div class="card-image-container">
      <Image
              className='prod-img'
              src={soleyProduct.imageURL}
              alt='Packing'
              width={400}
              height={400}
            />
      </div>
      <p class="card-title">{soleyProduct.name}</p>

      <Link href={soleyProduct.link} class="card-btn">
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

export default SoleyMakina;
