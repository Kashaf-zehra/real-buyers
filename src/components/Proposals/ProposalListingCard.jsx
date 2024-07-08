'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Pagination,
  Divider,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

import { AMOUNT, RESTORE_PROPERTY } from '@/src/constants/Proposals';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  section: {
    margin: '20px 0',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    '@media (min-width: 600px)': {
      width: 360,
      height: 360,
    },
  },
};
const ProposalListingCard = ({ proposalsData }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = proposalsData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      {currentItems?.map((proposal, index) => (
        <Grid
          key={index}
          container
          justifyContent="center"
          sx={{
            my: '30px',
            display: 'flex',
            flexDirection: 'row',
            borderRadius: '5px',
            border: '1px #E4E4E4 solid',
            background: '#F5F6FB',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                m: '20px',
                borderRadius: '5px ',
                height: '85%',
                width: '90%',
                position: 'relative',
              }}
            >
              <Link href={`my-proposals/${proposal?.id}`}>
                <Image
                  src={proposal?.coverImage}
                  layout="fill"
                  objectFit="cover"
                  style={styles.image}
                  alt={'Images'}
                  sx={{
                    borderRadius: '5px ',
                  }}
                />
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            style={styles.section}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pr: '30px',
              pl: '20px',
            }}
          >
            <Grid container>
              <Grid
                item
                xs={9}
                sx={{ display: 'flex', gap: '5px', justifyContent: 'center' }}
              >
                <Link href={`my-proposals/${proposal?.id}`}>
                  <Typography
                    sx={{
                      fontSize: '25px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                    }}
                  >
                    {proposal?.proposalTitle}
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={3} textAlign={'right'}>
                <Link href={`my-proposals/${proposal?.id}`}>
                  <Button variant="primary">
                    <Typography variant="secondary">
                      {RESTORE_PROPERTY}
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Divider sx={{ py: '5px' }} />
            <Grid container>
              <Grid item xs={10} sx={{ gap: '5px', alignItems: 'center' }}>
                {Object.keys(proposal?.propertyData?.propertyLocation).map(
                  (key) => {
                    if (key !== 'geoLocation' && key !== 'area') {
                      return (
                        <Box
                          key={key}
                          sx={{
                            display: 'flex',
                            pt: '10px',
                            gap: '5px',
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 700,
                              color: '#333',
                              fontStyle: 'normal',
                              lineHeight: 'normal',
                              fontSize: '14px',
                            }}
                          >
                            {key}:
                          </Typography>
                          <Typography
                            sx={{
                              color: '#126FAA',
                              fontWeight: 600,
                              fontStyle: 'normal',
                              lineHeight: 'normal',
                              fontSize: '14px',
                            }}
                          >
                            {proposal?.propertyData?.propertyLocation[key]}
                          </Typography>
                        </Box>
                      );
                    }
                    return null;
                  }
                )}
              </Grid>
              <Grid item xs={2} sx={{ justifyContent: 'center' }}>
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    fontSize: '16px',
                    pt: '10px',
                    gap: '5px',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: '#333',
                      fontStyle: 'normal',
                      lineHeight: 'normal',
                      fontSize: '14px',
                    }}
                  >
                    {AMOUNT}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#126FAA',
                      fontWeight: 600,
                      fontStyle: 'normal',
                      lineHeight: 'normal',
                      fontSize: '14px',
                    }}
                  >
                    {proposal?.propertyOverview?.price}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ pt: '5px' }}></Box>
            <Typography
              sx={{ fontSize: '18px', fontWeight: '600', pt: '15px' }}
            >
              {proposal?.propertyData?.propertyDirection}
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>
              {proposal?.proposalDescription}
            </Typography>
          </Grid>
        </Grid>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={Math.ceil(proposalsData.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          siblingCount={1}
          boundaryCount={1}
          color="primary"
        />
      </Box>
    </>
  );
};

export default ProposalListingCard;
