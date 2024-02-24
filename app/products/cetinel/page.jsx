'use client'
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import './index.scss';
import { getAllCetinelProducts } from '@/api/cetinelRequests';

import HashLoader from "react-spinners/HashLoader";
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import ProdTitle from '@/product-component/prod-title';
import { MoonLoader } from 'react-spinners';

const CETINEL = () => {
  const [cetinelProducts, setCetinelProducts] = useState(null); // Initialize cetinelProducts as null
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllCetinelProducts()
      .then((res) => {
        setCetinelProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setCetinelProducts]);

  return (
    <section>
            <title>Çetinel Endüstri-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>

<ProdTitle/>

      <div className='all-products' style={{ marginBottom: '100px' }}>
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
          <Grid className='grid' container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {cetinelProducts &&
              cetinelProducts.map((cetinelProduct) => (
                <Grid key={cetinelProduct._id} item lg={3}>
                  {/* CETINEL Product Card */}
                  <div class="card">
      <div class="card-image-container">
      <Image
              className='prod-img'
              src={cetinelProduct.imageURL}
              alt='Packing'
              width={400}
              height={400}
            />
      </div>
      <p class="card-title">{cetinelProduct.name}</p>

      <Link href={cetinelProduct.link} class="card-btn">
      <FontAwesomeIcon icon={faCircleInfo} />
        <span class="card-btn-text">Məhsula Bax</span>
      </Link>
    </div>
                </Grid>
              ))}
          </Grid>
        )}
      </div>
    </section>
  );
}

export default CETINEL;
