'use client'
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import './index.scss';
import { getAllUzayProducts } from '@/api/uzaybaskulRequests';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import ProdTitle from '@/product-component/prod-title';
import { MoonLoader } from 'react-spinners';

const UzayBaskul = () => {
  const [uzayProducts, setUzayProducts] = useState(null); // Initialize uzayProducts as null
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllUzayProducts()
      .then((res) => {
        setUzayProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setUzayProducts]);

  return (
    <section>
  
  <title>Uzay Baskül-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>


<ProdTitle/>

      {/* Display loading message or spinner when data is loading */}
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
            {uzayProducts &&
              uzayProducts.map((uzayProduct) => (
                <Grid key={uzayProduct._id} item lg={3}>
                  {/* Uzay Baskul Product Card */}
                  <div class="card">
      <div class="card-image-container">
      <Image
              className='prod-img'
              src={uzayProduct.imageURL}
              alt='Packing'
              width={400}
              height={400}
            />
      </div>
      <p class="card-title">{uzayProduct.name}</p>

      <Link href={uzayProduct.link} class="card-btn">
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

export default UzayBaskul;
