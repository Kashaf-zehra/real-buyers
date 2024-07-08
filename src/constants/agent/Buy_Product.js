export const Buy_Product_Data = {
  title: 'Subscription',
  BuyProductColumns: {
    FirstHeaderName: 'Package',
    SecondHeaderName: 'Price',
  },
  BuyProductRows: [
    {
      id: 1,
      icon: '/images/prop-shop/basic.svg',
      text: 'Basic',
      alt: 'basic_image',
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
      discription: 'Get a slot for 12 listing with initial 100 connection',
      price: 17500,
      buttonText: 'Add to cart',
      quantity: 1,
    },
  ],
};

export const Empty_Cart_data = { title: 'Added in cart', item: 'No items' };

export const Order_Summary = {
  titile: 'Order Summary',
  Total: 'Total:',
  buttonText: 'Proceed To Payment',
  successMessage: 'Your order is successfull.',
  modalButtonText: 'Continue',
  confirmOrderLable: 'Confirm your order',
};

export const Buy_Connects = {
  title: 'Buy Connects',
  description: '(Only applicable if you buy a subscription)',
  buttonText: 'Buy',
  image: '/images/agent_form/agent_form_background.png',
  dropdown: {
    label: 'Your new connects balance will be',
    items: [
      { item: '0', price: '0', value: 0 },
      { item: '10', price: '$1.50', value: '$1.50' },
      { item: '20', price: '$3.00', value: '$3.00' },
      { item: '40', price: '$6.00', value: '$6.00' },
      { item: '60', price: '$9.00', value: '$9.00' },
      { item: '80', price: '$12.00', value: '$12.00' },
      { item: '100', price: '$15.00', value: '$15.00' },
      { item: '150', price: '$22.50', value: '$22.50' },
      { item: '200', price: '$30.00', value: '$30.00' },
      { item: '250', price: '$37.50', value: '$37.50' },
      { item: '300', price: '$45.00', value: '$45.00' },
    ],
  },
  textField: [
    {
      id: 1,
      name: 'your_available_connects',
      label: 'Your available connects',
      type: 'number',
      place: '0',
      value: 50,
    },
    {
      id: 2,
      name: 'select_the_amount_to_buy',
      label: 'Select the amount to buy',
      type: 'number',
      place: '0',
      value: 0,
    },
    {
      id: 3,
      name: 'your_account_will_be_charged',
      label: 'Your account will be charged',
      type: 'number',
      place: '0',
      value: 0,
    },
    {
      id: 4,
      name: 'your_new_connects_balance_will_be',
      label: 'Your new connects balance will be',
      type: 'number',
      place: '0',
      value: 0,
    },
    {
      id: 5,
      name: 'these_connects_will_expire_on',
      label: 'These connects will expire on',
      type: 'string',
      place: '0',
      value: '11/22/2024',
    },
  ],
};
