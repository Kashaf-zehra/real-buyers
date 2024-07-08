import React from 'react';
import { Typography } from '@mui/material';

import { PROPERTIES_BY } from '@/src/constants/AgentProfile';
import Link from 'next/link';

const AgentTitle = ({ count, title, link }) => {
  return (
    <Link href={link}>
      <Typography
        variant="h4"
        sx={{
          color: '#000',
          fontSize: { lg: '25px', md: '20px', sm: '18px', xs: '16px' },
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
        }}
      >
        {`${count} ${PROPERTIES_BY} ${title}`}
      </Typography>
    </Link>
  );
};
export default AgentTitle;
