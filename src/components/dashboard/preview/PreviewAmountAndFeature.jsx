import React from 'react';
import { Box, Typography } from '@mui/material';

const PreviewAmountAndFeature = ({
  area,
  amount,
  areaAndAmount,
  instalmentAvailable,
  readyPossession,
  width,
  px,
  pt,
  pb,
  subPadding,
  fontSize,
  fontStyle,
  fontWeight,
}) => {
  return (
    <>
      {areaAndAmount && amount > 0 && (
        <Box
          sx={{
            p: 5,
            px: px ? px : 'none',
            pt: pt ? pt : 'none',
            pb: pb ? pb : 'none',
            borderBottom: '1px solid #E4E4E4',
            width: width ? width : '100%',
            '@media(min-width:280px) and (max-width:400px)': {
              px: subPadding ? subPadding : 3,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: fontSize ? fontSize : '20px' },
              fontWeight: 500,
              mb: 1,
            }}
          >
            {areaAndAmount?.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
            <Typography
              sx={{
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: fontWeight ? fontWeight : 500,
              }}
            >
              {areaAndAmount?.areaSize}
            </Typography>
            <Typography
              sx={{
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: 500,
                color: '#126FAA',
              }}
            >
              {area && area}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
            <Typography
              sx={{
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: fontWeight ? fontWeight : 500,
              }}
            >
              {areaAndAmount?.range}
            </Typography>
            <Typography
              sx={{
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: 500,
                color: '#126FAA',
              }}
            >
              {amount && amount}
            </Typography>
          </Box>
          {instalmentAvailable === true && (
            <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: fontWeight ? fontWeight : 500,
                }}
              >
                {areaAndAmount?.installment}
              </Typography>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: 500,
                  color: '#126FAA',
                }}
              >
                {instalmentAvailable == true ? 'Available' : null}
              </Typography>
            </Box>
          )}
          {readyPossession === true && (
            <Box sx={{ display: 'flex', gap: { xs: 0.3, md: 0.5 }, pb: 0.4 }}>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : { xs: '14px', md: '14px' },
                  fontWeight: fontWeight ? fontWeight : 500,
                }}
              >
                {areaAndAmount?.readyfor}
              </Typography>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : { xs: '14px', md: '14px' },
                  fontWeight: 500,
                  color: '#126FAA',
                }}
              >
                {readyPossession == true ? 'Possession' : null}
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default PreviewAmountAndFeature;
