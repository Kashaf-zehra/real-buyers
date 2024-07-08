import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const CollapsedLiveBiddingList = ({ list }) => {
  const path = usePathname();

  return (
    <Box>
      {list?.map((item) => (
        <Box key={item?.id}>
          <Box
            sx={{
              width: '100%',
              borderRadius: '15px',
              mx: 'auto',
              display: 'flex',
              padding: '10px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mx: 'auto',
              }}
            >
              <Image
                src={path == item?.link ? item?.iconActive : item?.icon}
                width={30}
                height={30}
                alt={'icons'}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CollapsedLiveBiddingList;
