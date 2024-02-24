'use client'
import { Grid } from '@mui/material'
import './index.scss'
import { useEffect, useState } from 'react'
import { getAllKaradumanProducts } from '@/api/karadumanRequests'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import ProdTitle from '@/product-component/prod-title'
import { MoonLoader } from 'react-spinners'

const KaradumanKalip = () => {
  const [karadumanProducts,setKaradumanProducts]=useState()
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllKaradumanProducts()
      .then((res) => {
        setKaradumanProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setKaradumanProducts]);

  return (
    <section>
    <title>Karaduman Kalıp-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>


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
            {karadumanProducts &&
              karadumanProducts.map((karadumanProduct) => (
                <Grid key={karadumanProduct._id} item lg={3}>
                  {/* Karaduman Product Card */}
                  <div class="card">
      <div class="card-image-container">
      <Image
              className='prod-img'
              src={karadumanProduct.imageURL}
              alt='Packing'
              width={400}
              height={400}
            />
      </div>
      <p class="card-title">{karadumanProduct.name}</p>

      <Link href={karadumanProduct.link} class="card-btn">
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

export default KaradumanKalip;