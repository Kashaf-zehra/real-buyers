'use client';
import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Pagination } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { PROPERTY_DETAILS } from '@/src/constants/Properties';

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
    objectFit: 'cover',
    '@media (min-width: 280px)and (max-width: 600px)': {
      width: '250px',
      height: '300px',
    },
  },
};

const PropertyListingCard = ({ propertyData }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    propertyData?.slice(indexOfFirstItem, indexOfLastItem) || [];

  const handlePageChange = (value) => {
    setCurrentPage(value);
  };
  return (
    <>
      {currentItems?.map((property, index) => (
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
                m: '20px 20px 20px 20px',
                borderRadius: '5px',
                height: '85%',
                width: '90%',
                position: 'relative',
              }}
            >
              <Link href={`/project/${property?.id}`}>
                <Image
                  src={property?.coverImage}
                  width={360}
                  height={360}
                  objectFit="cover"
                  style={styles?.image}
                  alt={'Images'}
                  sx={{
                    borderRadius: '5px',
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
              pr: '76px',
              pl: '20px',
            }}
          >
            <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>
                {property?.propertyOverview?.unit}
              </Typography>
              <Typography
                sx={{ fontSize: { xs: '18px', md: '25px' }, fontWeight: '600' }}
              >
                {property?.propertyOverview?.price}
              </Typography>
            </Box>
            <Typography
              sx={{ fontSize: '16px', fontWeight: '400', pt: '30px' }}
            >
              {property?.propertyData?.propertyLocation?.address}
            </Typography>
            <Typography
              sx={{ fontSize: '16px', fontWeight: '600', pt: '15px' }}
            >
              {`${property?.propertyData?.propertyArea} ${property?.propertyData?.propertyAreaUnit} `}
            </Typography>
            <Typography
              sx={{ fontSize: '18px', fontWeight: '600', pt: '15px' }}
            >
              {property?.propertyData?.propertyDirection}
            </Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>
              {property?.propertyDescription}
            </Typography>
            <div>
              <Typography
                sx={{ fontSize: '16px', fontWeight: '400', pt: '15px' }}
              >
                {`${PROPERTY_DETAILS.posted} ${property?.dateWords}`}
              </Typography>
            </div>
            <Box
              container
              spacing={2}
              style={styles.section}
              gap={'20px'}
              sx={{ display: 'flex' }}
            >
              <Box>
                <Link href={`${PROPERTY_DETAILS.properties}${property?.id}`}>
                  <Button variant="primary">
                    <Typography sx={{ fontSize: { xs: '14px', md: '16px' } }}>
                      {PROPERTY_DETAILS.viewMore}
                    </Typography>
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link href={`${PROPERTY_DETAILS.agent}${property?.id}`}>
                  <Button variant="primary">
                    <Typography sx={{ fontSize: { xs: '14px', md: '16px' } }}>
                      {PROPERTY_DETAILS.agentProfile}
                    </Typography>
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={Math.ceil(propertyData.length / itemsPerPage)}
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

export default PropertyListingCard;
