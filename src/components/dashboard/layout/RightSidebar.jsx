'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

import BiddingProfile from '../agent/live-bidding/BiddingProfile';
import ShopCart from '../../layouts/ShopCart/ShopCart';
import ProductCart from '../agent/prop-shop/buy-product/ProductCart';
import { ROUTERS } from '@/src/constants/Nav_Data';

const LIVEBIDDING = ROUTERS.dasboardLiveBidding;
const BIDDING = ROUTERS.bidding;
const PROPSHOP = ROUTERS.buyProducts;

const RightSidebar = ({ profileInfo }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname.includes(BIDDING && LIVEBIDDING) ? (
        <BiddingProfile profileInfo={profileInfo} />
      ) : null}

      {pathname.includes(BIDDING) ? <ShopCart /> : null}
      {pathname.includes(PROPSHOP) ? <ProductCart /> : null}
    </>
  );
};

export default RightSidebar;
