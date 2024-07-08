import React from 'react';
import { Grid, Box } from '@mui/material';
import { usePathname } from 'next/navigation';

import ListingInfo from './ads-form-components/Listinginfo';
import ReachBuyer from './ads-form-components/ReachBuyer';
import {
  reachBuyerCoverLetter,
  reachBuyerData,
} from '@/src/constants/Preview_Data';

const BuyersPlatform = ({ propertyData, fontSize }) => {
  const pathName = usePathname();
  const coverLetterPath = '/cover-letter';
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              background: 'white',
              display: 'flex',
              flexDirection: 'column',
              border: '1px #E4E4E4 solid',
              borderRadius: '10px',
              width: '100%',
              gap: 4,
              padding: { xs: '30px', md: '28px', lg: '30px' },
            }}
          >
            <ReachBuyer
              fontSize={fontSize}
              title={
                pathName?.includes(coverLetterPath)
                  ? reachBuyerCoverLetter?.title
                  : reachBuyerData?.title
              }
              description={
                pathName?.includes(coverLetterPath)
                  ? reachBuyerCoverLetter?.description
                  : reachBuyerData?.description
              }
            />
            <ListingInfo propertyInfo={propertyData?.property} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default BuyersPlatform;
