export const USERS_DATA = {
  users: 'users', //for constants
  id: 1,
  userName: 'Arman Khan',
  profileImage: '/images/profile.png',
  firstName: 'Arman',
  lastName: 'Khan',
  email: 'armanespark@gmail.com',
  landline: +424564879798,
  mobile: +424564879798,
  whatsapp: +914564879798,
  userType: 'user', // user or agent
  // phone: {
  //   countryCode: '92',
  //   number: '3162265948',
  // },
  // whatsapp: {
  //   countryCode: '92',
  //   number: '3162265948',
  // },
  // country: {
  //   countryCode: '92',
  //   number: '3162265948',
  // },
  city: 'Karachi',
  area: 'Gulistn e Johar',
  address: '301/A, Blossom Trade Center  ',
  country: 'Pakistan',
  timeZone: 'GST +5:00',
  time: '3:16pm',
  about:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', //string
  properties: [1, 2, 3, 4],
  listings: [1, 2, 3, 4],
  proposals: [1, 2, 3, 4],
  biddings: [1, 2, 3, 4],
  agencyName: 'eSpARK aGENCY', // basic, hot, Super
  agencylogo: '/images/profile.png', //Open to contract,
  subsPackage: 'basic', // basic, hot, Super
  leadPreference: 'Open to contract', //Open to contract,
  profileVisibility: 'public', // profile or Public
  profileStatus: 'public', // public or Blocked or Reported or removed
  profilePercentage: 50,
  availableConnects: 50, // 0-100%
  areaUnit: 'sq-ft', // 'sq-ft' or 'sq-m'
  currencyUnit: 'pkr', // pkr or usd etx
  autoReport: false, // true or false
  verificationStatus: true, // true or false
  emailNotification: false, // true or false
  newsLetters: false, // true or false
  onlineStatus: true,
  counts: {
    totalCount: 150,
    rentCount: {
      total: 75,
      Houses: 20,
      Flats: 20,
      Plots: 20,
      FarmHouses: 20,
      Shops: 20,
      Sffices: 20,
      Commercials: 20,
      // more Categories
    },
    sellCount: {
      total: 75,
      Houses: 20,
      Flats: 20,
      Plots: 20,
      FarmHouses: 20,
      Shops: 20,
      Sffices: 20,
      Commercials: 20,
      // more Categories
    },
  },
};

export const ADD_USER_DATA = [
  {
    id: 1, //id
    userName: 'muahhmadali', //string
    firstName: 'Muhammad', //string
    lastName: 'Ali', //string
    email: 'ali@esparkconsultants.com', //email
    address: 'Liaquatabad', //string
    city: 'karachi', //string
    country: 'pakistan', //string
    landline: +424564879798, //tel
    mobile: +424564879798, //tel
    whatsapp: +914564879798, //tel
    about: '45648797984564879798456487979845648797984564879798', //string
  },
];

export const ADD_USER_AUTH = {
  id: 1, //id
  userName: 'armankhan', //string
  confirmPassword: '456789', //string
  newPassword: '456789', //string
  oldPassword: '123456', //string
};

export const ADD_USER_IMAGE = {
  id: 1, //id
  userName: 'armankhan', //string
  profilePicture: '456789', //string
  coverImage: '456789', //string
};

export const USER_NOT_FOUND = 'User Not Found';
