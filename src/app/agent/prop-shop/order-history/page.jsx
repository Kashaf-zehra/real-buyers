import React from 'react';

import OrderHistory from '@/src/components/dashboard/agent/prop-shop/order-history/OrderHistory';
import { ORDER_HISTORY } from '@/src/constants/agent/Order_History';

const page = () => {
  return (
    <>
      <OrderHistory history={ORDER_HISTORY} />
    </>
  );
};

export default page;
