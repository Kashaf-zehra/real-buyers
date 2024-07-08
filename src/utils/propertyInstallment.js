export const createInstallmentState = (
  propertyInstallmentInfo,
  propertyBuyingDetails
) => {
  if (!propertyBuyingDetails) {
    return {};
  }
  const installmentData = {
    sellingData: propertyBuyingDetails,
    toggleData: propertyInstallmentInfo,
  };
  return { installmentData };
};

import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';
export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 43,
  height: 24,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 20,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(14px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(18px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#fb631c',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 20,
    height: 20,
    borderRadius: 10,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 28 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));
