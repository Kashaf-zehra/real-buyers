import { createSlice } from '@reduxjs/toolkit';

const packagesSlice = createSlice({
  name: 'packagesSlice',
  initialState: [
    {
      id: 1,
      icon: '/images/prop-shop/basic.svg',
      text: 'Basic',
      alt: 'basic_image',
      listingLimit: 4,
      awardedConnections: 60,
      discription: 'Get a slot for 4 listing with initial 60 connection',
      price: 2500,
      buttonText: 'Add to cart',
      quantity: 1,
    },
    {
      id: 2,
      icon: '/images/prop-shop/hot.svg',
      text: 'Hot',
      alt: 'hot_image',
      listingLimit: 8,
      awardedConnections: 80,
      discription: 'Get a slot for 8 listing with initial 80 connection',
      price: 65000,
      buttonText: 'Add to cart',
      quantity: 1,
    },
    {
      id: 3,
      icon: '/images/prop-shop/super.svg',
      text: 'Super',
      alt: 'super_image',
      listingLimit: 12,
      awardedConnections: 100,
      discription: 'Get a slot for 12 listing with initial 100 connection',
      price: 17500,
      buttonText: 'Add to cart',
      quantity: 1,
    },
  ],

  reducers: {},
});

export default packagesSlice.reducer;
