'use client'

import ReferencesTitle from '@/components/reference-title'
import React from 'react'
import './index.scss'

import {  Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAllReferences } from '@/api/referenceRequest';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { MoonLoader } from 'react-spinners';


function References() {

  const [references,setReferences]=useState()

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Set loading to true when starting to fetch data
    setLoading(true);
    getAllReferences()
      .then((res) => {
        setReferences(res);
      })
      .finally(() => {
        // Set loading to false when data fetching is complete
        setLoading(false);
      });
  }, [setReferences]);
  return (
    <section className='reference-container'>
            <title>Referanslar-LALETECH MMC | LALETECH MMC | Mühəndislik Şirkəti</title>

      <ReferencesTitle/>
      <div className='reference-wrapper'>

      <div className='div-grid'>
        
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
   <Grid  style={{display:'flex',justifyContent:'center', alignItems:'center',marginTop:'100px'}} container spacing={{ xs: 12, sm: 6, md: 4, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     {references &&
       references.map((reference) => (
         <Grid key={reference._id} item lg={3}>
           {/* Reference Card */}

           <div class="card">
           <Image
              className='reference-image'
              src={reference.imageURL}
              alt='Packing'
              width={400}
              height={400}
            />
  <div class="card__content">
    <p class="card__title">{reference.name}</p>
    <p class="card__description">{reference.content}</p>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center', gap:'7px'}}>
    <Link target='blank' class="card__link" href={reference.link}>Daha Çox </Link>
    <FontAwesomeIcon className="card__icon" icon={faCircleChevronRight} />
    </div>

  </div>
</div>
         </Grid>
       ))}

</Grid>
)}

</div>

      </div>
    </section>
  )
}

export default References
