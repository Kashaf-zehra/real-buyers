'use client';
import React from 'react';
import { Typography, Box, Checkbox, Button } from '@mui/material';

import { useDispatch } from 'react-redux';
import {
  handleAdaminities,
  toggleCheckAmenityClear,
} from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

const Facilities = ({
  facilitiesData,
  cancel,
  formik,
  setOpen,
  selectedAmenities,
  propertyInformation,
  setSelectedAmenities,
}) => {
  const dispatch = useDispatch();
  const handleCheckboxChange = (e, id, image, text, name) => {
    const limit = 20;
    const amenityObject = {
      text: text,
      image: image,
      limit: limit,
      name: name,
    };

    if (e.target.checked) {
      setSelectedAmenities((prevSelected) => [...prevSelected, amenityObject]);
    } else {
      setSelectedAmenities((prevSelected) =>
        prevSelected?.filter((item) => item?.text !== text)
      );
      formik?.setFieldValue(name, 0);
    }

    formik?.setFieldValue('other_features', selectedAmenities);
  };

  const handleSaveButton = () => {
    if (selectedAmenities.length === 0) {
      dispatch(toggleCheckAmenityClear());
    } else {
      dispatch(handleAdaminities(selectedAmenities));
    }
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          py: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          '@media (min-width: 1200px) and (max-width: 1439px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
          width: '100%',
          height: '550px',
          overflowY: 'auto',
        }}
      >
        {facilitiesData?.map((item, index) => (
          <Box
            sx={{
              mx: 'auto',
              width: { xs: '98%', sm: '87%', md: '75%', lg: '80%' },
              '@media (min-width: 1200px) and (max-width: 1439px)': {
                width: '85%',
              },
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              px: 3,
              gap: 0.2,
              mb: { xs: 1.5, md: 2.5 },
            }}
            key={index}
          >
            <Checkbox
              sx={{ color: '#126FAA' }}
              checked={selectedAmenities?.some(
                (amenity) => amenity?.text === item?.title
              )}
              onChange={(e) => {
                handleCheckboxChange(
                  e,
                  item?.id,
                  item?.image,
                  item?.title,
                  item?.name
                );
              }}
            />

            <Box
              component={'img'}
              src={item?.image}
              sx={{ width: { xs: 25, md: 30 }, height: { xs: 25, md: 30 } }}
              alt={'amenities'}
            />
            <Typography
              sx={{
                ml: 1.8,
                fontSize: { xs: '15px', sm: '17px', lg: '20px' },
                fontWeight: 400,
                color: '#333',
              }}
            >
              {item?.title}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '93px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'flex-end' },
          borderTop: '1px solid #E4E4E4',
          gap: '10px',
          pr: { xs: 0, sm: 7 },
        }}
      >
        <Button
          style={{
            width: '100px',
            height: '39px',
            background: 'white',
            borderRadius: '5px',
            color: '#FB631C',
            border: ' 1px #FB631C solid',
          }}
          onClick={cancel}
        >
          {' '}
          {propertyInformation?.cancel}
        </Button>
        <Button
          style={{
            width: '100px',
            height: '39px',
            background: '#FB631C',
            borderRadius: '5px',
            color: 'white',
          }}
          onClick={handleSaveButton}
        >
          {propertyInformation?.save}
        </Button>
      </Box>
    </>
  );
};
export default Facilities;
