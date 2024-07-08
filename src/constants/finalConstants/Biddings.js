export const BIDDINGS_DATA = [
  {
    id: 1,
    propertyId: 1,
    proposalId: 1,
    biddingStatus: 'draft',
    bidTitle: 'Need A Bedroom Appartment',
    bidDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    creationDate: '2023-11-22T14:29:32Z',
    connects: 6,
    user: 1,
    new: true,
    saved: true,
    flaged: false,
  },
  {
    id: 2,
    propertyId: 1,
    proposalId: 1,
    biddingStatus: 'draft',
    bidTitle: 'NEED 4 BEDROOM APARTMENT',
    bidDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    creationDate: '2023-11-22T14:29:32Z',
    connects: 6,
    user: 1,
    new: true,
    saved: true,
    flaged: false,
  },
];

export const ADD_biddibg = [
  {
    id: 1, //id
    propertyId: 1,
    bidTitle: 'Plot For sale Zeenatabad Society Scheme 33 Sector 19a',
    bidDescription:
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
