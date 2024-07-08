'use client';
import React, { useState } from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import RBInput from '../../../RBInput';
import BuyConnectSelect from './BuyConnectSelect';
import { buy } from '@/src/redux/slices/settings/PakageCartSlice';

const BuyConnects = ({
  title,
  description,
  image,
  buttonText,
  fields,
  dropdown,
}) => {
  const { items } = dropdown;
  const dispatch = useDispatch();
  const userDetail = Object.fromEntries(
    fields.map((field) => [field.name, field.value])
  );

  const [buyConnectData, setBuyConnectData] = useState({
    ...userDetail,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'select_the_amount_to_buy') {
      const find = items?.find((item) => item?.value === value);
      setBuyConnectData({
        ...buyConnectData,
        [name]: value,
        your_account_will_be_charged: Number(String(find.value).split('$')[1]),
        your_new_connects_balance_will_be:
          Number(find.item) + Number(buyConnectData?.your_available_connects),
        new_connects: Number(find.item),
      });
    } else {
      setBuyConnectData({
        ...buyConnectData,
        [name]: value,
      });
    }
  };
  const handleBuy = () => {
    if (buyConnectData.select_the_amount_to_buy == 0) {
      null;
    } else {
      dispatch(buy(buyConnectData));
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Box
          sx={{
            width: '100%',
            height: { xs: 'auto', lg: '780px' },
            py: 2,
            border: '2px solid #E4E4E4',
            borderRadius: '10px',
            backgroundColor: '#fff',
            backgroundImage: `url('${image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: { xs: '90%', sm: '70%', md: '70%', lg: '60%' },
          }}
        >
          <Box
            sx={{
              display: { xs: 'block', lg: 'flex' },
              alignItems: 'center',
              gap: 1,
              px: 4,
              pb: 2,
              borderBottom: '2px solid #E4E4E4',
            }}
          >
            <Typography variant="h4">{title}</Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 400, my: { xs: 1, lg: 0 } }}
            >
              {description}
            </Typography>
          </Box>
          <Box
            sx={{
              px: 4.5,
              py: 1.5,
            }}
          >
            {fields?.map((field, i) => (
              <Box key={i} sx={{ width: '100%' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 400,
                    my: { xs: 2, lg: 2 },
                    fontSize: { xs: '17px', sm: '20px' },
                  }}
                >
                  {field?.label}
                </Typography>

                {field?.id !== 2 ? (
                  <RBInput
                    type={field?.type}
                    place={field?.place}
                    value={buyConnectData[field?.name]}
                    name={field?.name}
                    onChange={handleChange}
                    disabled={true}
                    sx={{
                      width: { xs: '100%', sm: '100%', md: '100%', lg: '50%' },
                      '& input[type=number]::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                      },
                    }}
                  />
                ) : null}

                {field?.id == 2 ? (
                  <BuyConnectSelect
                    name={field?.name}
                    value={buyConnectData?.select_the_amount_to_buy}
                    menuItem={items}
                    onChange={handleChange}
                    sx={{
                      width: {
                        xs: 'auto',
                        lg: '50%',
                      },
                    }}
                  />
                ) : null}
              </Box>
            ))}
          </Box>

          <Box sx={{ px: 4, py: 2 }}>
            <Button
              variant="outlined"
              onClick={handleBuy}
              sx={{
                width: { xs: '100%', sm: '161px' },
                height: '41px',
                borderRadius: { xs: '7px', sm: '10px' },
              }}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default BuyConnects;
