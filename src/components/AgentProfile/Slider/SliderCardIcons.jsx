import React from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';

const SliderCardIcons = () => {
  return (
    <>
      <Grid item xs={4}>
        <Image
          src="/images/agent-profile-icons/aminites2.svg"
          width={20}
          height={20}
          style={{ display: 'flex' }}
          alt={'amenities'}
        />
      </Grid>
      <Grid item xs={4}>
        <Image
          src="/images/agent-profile-icons/aminites3.svg"
          width={20}
          height={20}
          style={{ display: 'flex' }}
          alt={'amenities'}
        />
      </Grid>
      <Grid item xs={4}>
        <Image
          src="/images/agent-profile-icons/aminites1.svg"
          width={20}
          height={20}
          style={{ display: 'flex' }}
          alt={'amenities'}
        />
      </Grid>
    </>
  );
};

export default SliderCardIcons;
