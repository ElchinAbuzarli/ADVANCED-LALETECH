'use client'
import React, { useEffect, useState } from 'react';
import './index.scss';
import { Grid } from '@mui/material';
import { getAllOtherProducts } from '@/api/otherRequests';
import Image from 'next/image';
import ProdTitle from '@/product-component/prod-title';
import { MoonLoader } from 'react-spinners';

const OtherProducts = () => {
  const [otherProducts, setOtherProducts] = useState(null); // Initialize otherProducts as null
  const [loading, setLoading] = useState(true); // Introduce loading state

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllOtherProducts()
      .then((res) => {
        setOtherProducts(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setOtherProducts]);

  return (
    <section>
     <title>Xammal və Əlavə Məhsullar-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>

      <ProdTitle/>

      {/* <div className='other-title'><h1>XAMMAL VƏ ƏLAVƏ MƏHSULLAR</h1></div> */}

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
        <Grid style={{ marginTop: '100px', marginBottom: '100px' }} className='grid' container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {otherProducts &&
            otherProducts.map((otherProduct) => (
              <Grid key={otherProduct._id} item lg={3}>
                {/* Other Product Card */}

                <div class="card">
      <div class="card-image-container">
      <Image
              className='prod-img'
              src={otherProduct.imageURL}
              alt='Packing'
              width={400}
              height={400}
            />
      </div>
      <p class="card-title">{otherProduct.name}</p>


    </div>
              </Grid>
            ))}
        </Grid>
      )}
    </section>
  );
}

export default OtherProducts;
