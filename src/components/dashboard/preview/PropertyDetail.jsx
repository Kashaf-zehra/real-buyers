import React from 'react';
import { Box, Typography } from '@mui/material';

const PropertyDetail = ({
  title,
  subTitle,
  description,
  heading,
  width,
  px,
  pt,
  pb,
  paddingHeading,
  subPadding,
  fontSize,
  mb,
  fontStyle,
  fontSizeDescription,
}) => {
  return (
    <>
      <Box
        sx={{
          px: px ? px : 4,
          pt: pt ? pt : 3,
          pb: pb ? pb : 5,
          borderBottom: '1px solid #E4E4E4',
          width: width ? width : '100%',
          '@media(min-width:280px) and (max-width:400px)': {
            px: subPadding ? subPadding : 3,
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            pb: paddingHeading ? paddingHeading : '20px',
            color: '#000',
            fontSize: '20px',
            fontWeight: '500',
            mb: mb,
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            pb: '20px',
            color: '#000',
            fontSize: fontSize ? fontSize : '20px',
            fontWeight: '500',
          }}
        >
          {title}
        </Typography>
        {subTitle && (
          <Typography
            sx={{
              padding: '5px',
              color: '#333',
              fontSize: fontStyle ? fontStyle : '15px',
              fontWeight: '600',
            }}
            variant="h3"
          >
            {subTitle}
          </Typography>
        )}
        {description && (
          <Typography
            sx={{
              width: width ? width : '100%',
              padding: '5px',
              color: ' #333',
              fontSize: fontSizeDescription ? fontSizeDescription : '12px',
              fontWeight: '400',
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </>
  );
};
export default PropertyDetail;
