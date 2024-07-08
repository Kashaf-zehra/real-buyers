import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

import PostTitle from './ads-form-components/PostTitle';
import InstructionsForUpload from './ads-form-components/InstructionsForUpload';
import ImageUploader from './ads-form-components/ImageUploader';
import VideoUploader from './ads-form-components/VideoUploader';

const PropertyGallery = ({ formik, propertyData }) => {
  const { errors } = formik;
  const maxImages = 5;
  const maxVideos = 5;

  const handleImageUpload = (type, file) => {
    const currentImages = formik?.values?.images || [];
    if (currentImages?.length < maxImages && type?.includes('image')) {
      const updatedImages = [...currentImages, file];
      formik?.setFieldValue('images', updatedImages);
    } else {
      console.error('Maximum limit of images reached');
    }
  };

  const handleVideoUpload = (type, file) => {
    const currentVideos = formik?.values?.videos || [];
    if (currentVideos?.length < maxVideos && type?.includes('video')) {
      const updatedVideos = [...currentVideos, file];
      formik?.setFieldValue('videos', updatedVideos);
    } else {
      console.error('Maximum limit of videos reached');
    }
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: '#fff',
        border: '1px #E4E4E4 solid',
        borderRadius: '10px',
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'url("/images/listing-page/realbuyer.svg")',
          backgroundSize: '60% 60%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          '@media (min-width: 280px)and (max-width: 959px)': {
            backgroundPosition: 'center top 20%',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            '@media (min-width: 960px) and (max-width: 1399px)': {
              height: '780px',
            },
          }}
        >
          <PostTitle text={propertyData?.postTitles?.imagesvidoes} />
          <Box
            sx={{
              width: '100%',
              height: { xs: 'auto', md: '100%' },
              display: 'flex',
              justifyContent: 'space-evenly',
              py: 5,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'start',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'center', sm: 'start' },
                  justifyContent: { xs: 'center', md: 'center' },
                  gap: 2,
                  pb: { xs: 2, sm: 2 },
                }}
              >
                <Box
                  sx={{
                    width: { xs: '90%', sm: '45px' },
                    pl: '0 !important',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: 1.5,
                    }}
                  >
                    <Box
                      component={'img'}
                      src={propertyData?.upload?.images}
                      sx={{
                        width: { xs: 37, sm: 47 },
                        height: { xs: 35, sm: 45 },
                      }}
                      alt={'areasize'}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: '16px', sm: '20px' },
                        textWrap: 'wrap',
                        fontWeight: 400,
                        color: '#333333',
                        display: { xs: 'flex', sm: 'none' },
                      }}
                    >
                      <span>
                        {propertyData?.upload?.text}
                        <span style={{ marginLeft: '5px', color: '#FF0000' }}>
                          *
                        </span>
                      </span>
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ width: { xs: '90%', sm: '80%', md: '80%', lg: '70%' } }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      mt: 0.8,
                      mb: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: '17px', sm: '20px' },
                        fontWeight: 400,
                        color: '#333333',
                        mb: 0.5,
                        display: { xs: 'none', sm: 'flex' },
                      }}
                    >
                      {propertyData?.upload?.text}
                      <span style={{ marginLeft: '5px', color: '#FF0000' }}>
                        *
                      </span>
                    </Typography>
                    <Box
                      sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        border: '1px #FB631C dashed',
                        display: 'flex',
                        alignItems: { xs: 'start', md: 'center' },
                        py: 3,
                        px: { xs: 3, sm: 5 },
                        '@media (min-width: 280px) and (max-width:424px)': {
                          px: 2,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: '100%',
                          px: { xs: 1, md: 4 },
                          display: 'flex',
                          alignItems: { xs: 'start', md: 'center' },
                          flexDirection: 'column',
                          gap: 3,
                          pb: { xs: 2, md: 0 },
                        }}
                      >
                        <ImageUploader
                          onUpload={handleImageUpload}
                          maxImages={maxImages}
                        />
                        {errors?.images && (
                          <Typography color="red">{errors?.images}</Typography>
                        )}
                        <VideoUploader
                          onUpload={handleVideoUpload}
                          maxVideos={maxVideos}
                        />
                        {errors?.videos && (
                          <Typography color="red">{errors?.videos}</Typography>
                        )}
                      </Box>
                      <Box>
                        <InstructionsForUpload
                          propertyInformation={propertyData?.uploadInstruction}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyGallery;
