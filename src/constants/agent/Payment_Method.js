export const PAYMENT_METHODE_DATA = {
  title: 'Payment Method',
  image: '/images/agent_form/agent_form_background.png',
  checkBoxLabel: 'Save my payment details for further payments',
  creditCardLabel: 'Credit Card Payment',
  cardTypeImage: [
    {
      icon: '/images/agent_form/visaCard.svg',
      alt: 'visa card',
    },
    {
      icon: '/images/agent_form/masterCard.svg',
      alt: 'master card',
    },
  ],
  textField: [
    {
      id: 1,
      name: 'name_on_card',
      label: 'Name on card',
      type: 'string',
      place: 'Enter name on card',
      value: 50,
      width: { xs: '100%', sm: '99.5%', md: '98.7%', lg: '96.8%' },
      sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
      pt: '-20px',
    },
    {
      id: 3,
      name: 'card_number',
      label: 'Card Number',
      type: 'number',
      place: 'XXXXXXXXXXXXX',
      value: 0,
      width: { xs: '100%', sm: '99.5%', md: '98.7%', lg: '100%' },
      sizes: { xs: 12, sm: 12, md: 12, lg: 6 },
    },
    {
      id: 5,
      name: 'expiry_date',
      label: 'Expiry Date',
      type: 'string',
      place: 'XX-YY',
      value: '02-25',
      width: { xs: '100%', sm: '99.5%', md: '98.7%', lg: '100%' },
      sizes: { xs: 12, sm: 12, md: 12, lg: 2.8 },
    },
    {
      id: 4,
      name: 'cvv_no',
      label: 'CVV',
      type: 'number',
      place: 'XXX',
      value: 0,
      width: { xs: '100%', sm: '99.5%', md: '98.7%', lg: '85.6%', xl: '86%' },
      sizes: { xs: 12, sm: 12, md: 12, lg: 3.2 },
    },
  ],
  easyPaisa: [
    {
      id: 1,
      title: 'Easy paisa',
      name: 'easypaisa_number',
      label: 'Phone Number',
      type: 'number',
      place: 'XXXXXXXXXXX',
      value: 0,
      width: { xs: '100%', sm: '99.5%', md: '98.7%', lg: '100%' },
      sizes: { xs: 12, sm: 12, md: 12, lg: 6 },
    },
  ],
  jazzCash: [
    {
      id: 1,
      title: 'Jazz Cash',
      name: 'jazzcash_number',
      label: 'Phone Number',
      type: 'number',
      place: 'XXXXXXXXXXX',
      value: 0,
      width: { xs: '100%', sm: '99.5%', md: '98.7%', lg: '100%' },
      sizes: { xs: 12, sm: 12, md: 12, lg: 6 },
    },
  ],
  masterCard: {
    image: '/images/agent_form/masterCard.svg',
    cardName: 'Mastercard',
    accountNumber: '****1234',
  },
  visaCard: {
    image: '/images/agent_form/visaCard.svg',
    cardName: 'Visa',
    accountNumber: '****1234',
  },
  generalCard: {
    image: '/images/agent_form/general.svg',
    cardName: 'Others',
    accountNumber: '****1234',
  },
  constantLabel: {
    JAZZ_CASH: 'jazzcash',
    EASY_PAISA: 'easypaisa',
    NAME_ON_CARD: 'name_on_card',
    VISA: 'Visa',
    MASTER_CARD: 'Mastercard',
    GENERAL_CARD: 'Others',
    ACCOUNT_NAME_EASYPAISA: 'Easy paisa',
    ACCOUNT_NAME_JAZZCASH: 'Jazz Cash',
  },
};
