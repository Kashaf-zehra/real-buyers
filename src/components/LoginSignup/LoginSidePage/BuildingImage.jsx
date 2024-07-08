import React from 'react';
import Image from 'next/image';

import { ALT } from '@/src/constants/Login';

const PropertyBuilding = () => {
  return (
    <Image
      src="/images/signup_page/highbuilding.svg"
      width={488}
      height={288}
      alt={ALT.BUILDING_IMAGE}
    />
  );
};
export default PropertyBuilding;
