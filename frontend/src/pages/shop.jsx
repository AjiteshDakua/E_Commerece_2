import React from 'react'
import Hero from '../components/hero/hero';
import Popular from '../components/popular/popular';
import Offers from '../components/offers/offers';
import Newcollections from '../components/newcollections/newcollections';
import Newslatter from '../components/newslatter/newslatter';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offers/>
      <Newcollections/>
      <Newslatter/>
      
    </div>
  );
};

export default Shop
