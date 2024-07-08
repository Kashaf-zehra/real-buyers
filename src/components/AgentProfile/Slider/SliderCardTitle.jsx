import React from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';

const SliderCardTitle = ({ link }) => {
  return (
    <Link href={`/projects/${link?.property_id}`}>
      <Typography
        // variant="body1"
        sx={{
          color: '#FB631C',
          fontWeight: '600',
          fontSize: { xs: '14px', md: '18px' },
          fontStyle: 'normal',
          textAlign: 'left',
        }}
      >
        {link?.title}
      </Typography>
    </Link>
  );
};

export default SliderCardTitle;
