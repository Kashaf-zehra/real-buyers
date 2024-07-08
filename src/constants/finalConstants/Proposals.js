export const PROPOSALS_DATA = [
  {
    id: 1,
    adId: 1,
    proposalStatus: 'rejected',
    title: 'House #1',
    proposalTitle: 'Furnish House For sale',
    proposalDescription:
      'Plot for sale in Zeenatabad Society, Scheme 33 Sector 19A, 120 Sqyd West open corner 24 Feet road (Leased). Corner Boundary Wall Society 150 Feet Road.',
    coverImage: '/images/properties/PropertyCardImageHouse.png',
    date: '2023-11-22T14:29:32Z',
    dateWords: '1 day ago',
    agent: 1,
    user: 1,
    new: true,
    featured: true,
    categories: [1, 2],
    amenities: [11, 14, 12, 15, 12],
    sliderImages: [
      '/images/slider/apartments.svg',
      '/images/slider/houses.svg',
      '/images/slider/commercial.svg',
    ],
    propertyData: {
      agentPrice: '1.2 Crore',
      propertyDemand: '1 Crore 50 Lac',
      propertyArea: '1080 sq.ft',
      propertyType: 'Houses',
      subPropertyType: 'topFloor',
      propertyDirection: 'East Open',
      propertyLocation: {
        address: 'Sector 31 - Punjabi Saudagar City Phase 2, Scheme 33',
        purpose: 'Sell',
        type: 'House',
        area: 'Gulistan-e johar',
        city: 'Karachi',
        geoLocation:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14472.341891430968!2d67.115604!3d24.929158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33feab1c28595%3A0xa3b2a5dc2f97a82e!2seSpark%20Consulting%20Group!5e0!3m2!1sen!2s!4v1702632437533!5m2!1sen!2s',
      },
      propertyStats: {
        areaSize: 'Large',
        range: '1000000',
        installment: 'Available',
        readyFor: 'Possession',
      },
      propertyImages: [
        '/images/proposals/images/proposalImage1.png',
        '/images/proposals/images/proposalImage2.png',
        '/images/proposals/images/proposalImage3.png',
        '/images/proposals/images/proposalImage4.png',
        '/images/proposals/images/proposalImage5.png',
        '/images/proposals/images/proposalImage6.png',
      ],
      propertyVideos: [
        '/images/proposals/videos/proposalVideo1.png',
        '/images/proposals/videos/proposalVideo2.png',
        '/images/proposals/videos/proposalVideo3.png',
        '/images/proposals/videos/proposalVideo4.png',
        '/images/proposals/videos/proposalVideo5.png',
        '/images/proposals/videos/proposalVideo6.png',
      ],
      propertyOverview: {
        type: 'Residential plot',
        location: 'Scheme 33,Karachi',
        price: '1.5 Crore',
        purpose: 'For Sale',
        bedroom: '03',
        bath: '05',
        parking: '02',
      },
    },
  },
  {
    id: 1,
    adId: 1,
    proposalStatus: 'rejected',
    title: 'House #1',
    proposalTitle: 'Furnish House For sale',
    proposalDescription:
      'Plot for sale in Zeenatabad Society, Scheme 33 Sector 19A, 120 Sqyd West open corner 24 Feet road (Leased). Corner Boundary Wall Society 150 Feet Road.',
    coverImage: '/images/properties/PropertyCardImageHouse.png',
    date: '2023-11-22T14:29:32Z',
    dateWords: '1 day ago',
    agent: 1,
    user: 1,
    new: true,
    featured: true,
    categories: [1, 2],
    amenities: [11, 14, 12, 15, 12],
    sliderImages: [
      '/images/slider/apartments.svg',
      '/images/slider/houses.svg',
      '/images/slider/commercial.svg',
    ],
    propertyData: {
      agentPrice: '1.2 Crore',
      propertyDemand: '1 Crore 50 Lac',
      propertyArea: '1080 sq.ft',
      propertyType: 'Houses',
      subPropertyType: 'topFloor',
      propertyDirection: 'East Open',
      propertyLocation: {
        address: 'Sector 31 - Punjabi Saudagar City Phase 2, Scheme 33',
        purpose: 'Sell',
        type: 'House',
        area: 'Gulistan-e johar',
        city: 'Karachi',
        geoLocation:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14472.341891430968!2d67.115604!3d24.929158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33feab1c28595%3A0xa3b2a5dc2f97a82e!2seSpark%20Consulting%20Group!5e0!3m2!1sen!2s!4v1702632437533!5m2!1sen!2s',
      },
      propertyStats: {
        areaSize: 'Large',
        range: '1000000',
        installment: 'Available',
        readyFor: 'Possession',
      },
      propertyImages: [
        '/images/proposals/images/proposalImage1.png',
        '/images/proposals/images/proposalImage2.png',
        '/images/proposals/images/proposalImage3.png',
        '/images/proposals/images/proposalImage4.png',
        '/images/proposals/images/proposalImage5.png',
        '/images/proposals/images/proposalImage6.png',
      ],
      propertyVideos: [
        '/images/proposals/videos/proposalVideo1.png',
        '/images/proposals/videos/proposalVideo2.png',
        '/images/proposals/videos/proposalVideo3.png',
        '/images/proposals/videos/proposalVideo4.png',
        '/images/proposals/videos/proposalVideo5.png',
        '/images/proposals/videos/proposalVideo6.png',
      ],
      propertyOverview: {
        type: 'Residential plot',
        location: 'Scheme 33,Karachi',
        price: '1.5 Crore',
        purpose: 'For Sale',
        bedroom: '03',
        bath: '05',
        parking: '02',
      },
    },
  },
];

export const ADD_PROPOSAL = [
  {
    id: 1, //id
    adId: 1,
    proposalTitle: 'Plot For sale Zeenatabad Society Scheme 33 Sector 19a',
    proposalDescription:
      'Plot for sale in Zeenatabad Society, Scheme 33 Sector 19A, 120 Sqyd West open corner 24 Feet road (Leased). Corner Boundary Wall Society 150 Feet Road.',
    userid: 1, // current user ID
    agentid: null,
    adStatus: 'published', // draft or published //text
    locationPurpose: {
      adPurpose: 'sell', // sell or rent //text
      propertyType: 'House', // house, plots, commercial, //text
      propetySubType: 'Flat', //text
      // address:'401/B, Blossom Trade Center',
      // location: 'Gulistan e Johar',
      geolocation: '', //text
    },
    sizeBudgets: {
      propertyArea: {
        area: 121, //number
        unit: 'sqft', //text
      },
      propertyAmount: {
        area: 121, //number
        unit: 'sqft', //text
      },
      instalmentAvailable: true, //bolean
      readyPossession: true, //bolean
    },
    featureAmenities: [
      // Array object
      { id: 1, name: 'Bedrooms', count: 3 },
      { id: 2, name: 'BathRooms', count: 3 },
      { id: 3, name: 'Parking', count: 3 },
      // ...
    ],
    media: {
      //object Array
      images: ['imagesrc1', 'imagesrc2', 'imagesrc3', 'imagesrc4', 'imagesrc5'], //array
      videos: ['videosrc1', 'videosrc2', 'videosrc3', 'videosrc4', 'videosrc5'], //array
    },
  },
];
