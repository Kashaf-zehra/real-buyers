import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';

import HideUnhideButton from './ads-form-components/HideButton';
import {
  handleSubmitDraft,
  handleSumitUserAds,
} from '@/src/redux/slices/userAds/userAdsSlice';
import {
  handlePostlistingAd,
  handleSubmitDraftForAgent,
} from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

const SubmitButton = ({
  handleClickOpen,
  formik,
  setAction,
  propertyData,
  handleOpenSuccessModal,
}) => {
  const pathName = usePathname();
  const cover = '/cover-letter';
  const all_posting = '/all-postings';
  const my_properties = '/my-properties';

  const dispatch = useDispatch();

  const handleDraftSubmit = () => {
    if (!pathName?.includes(cover)) {
      setAction('draft');
    }
    if (pathName?.includes(all_posting)) {
      const values = formik?.values;
      dispatch(handleSubmitDraft(values));
      handleOpenSuccessModal();
    } else {
      null;
    }
    if (pathName?.includes(my_properties)) {
      const values = formik?.values;
      dispatch(handleSubmitDraftForAgent(values));
      handleOpenSuccessModal();
    } else {
      null;
    }
    formik?.handleSubmit();
  };

  const handleSubmitSubmit = () => {
    if (!pathName?.includes(cover)) {
      setAction('submit');
    }
    if (pathName?.includes(all_posting)) {
      const values = formik?.values;
      dispatch(handleSumitUserAds(values));
      handleOpenSuccessModal();
    } else {
      null;
    }
    if (pathName?.includes(my_properties)) {
      const values = formik?.values;
      dispatch(handlePostlistingAd(values));
      handleOpenSuccessModal();
    } else {
      null;
    }
    formik?.handleSubmit();
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: { xs: 'center', sm: 'flex-end' },
            '@media(min-width: 280px) and (max-width:400px)': {
              flexDirection: 'column',
            },
            alignItems: 'center',
            gap: '10px',
            width: '90%',
          }}
        >
          <HideUnhideButton handleClickOpen={handleClickOpen} />
          {pathName?.includes(cover) ? null : (
            <Button
              name="submit"
              value="submit"
              type="submit"
              sx={{
                width: { xs: '40%', sm: '200px' },
                '@media(min-width: 280px) and (max-width:400px)': {
                  width: '100%',
                },
                borderRadius: '10px',
                border: '1px solid #FB631C',
                background: '#FFF',
                color: '#FB631C',
                height: '45px',
                flexShrink: 0,
                fontSize: { xs: '12px', sm: '15px' },
                fontWeight: 400,
                '&:hover': {
                  color: '#fff',
                  backgroundColor: '#FB631C',
                },
                textTransform: 'capitalize',
              }}
              onClick={handleDraftSubmit}
            >
              {propertyData?.saveDraft?.toLowerCase()}
            </Button>
          )}

          <Button
            name="draft"
            value="draft"
            type="submit"
            sx={{
              width: { xs: '40%', sm: '200px' },
              '@media(min-width: 280px) and (max-width:400px)': {
                width: '100%',
              },
              borderRadius: '10px',
              border: '1px solid #FB631C',
              color: '#fff',
              background: '#FB631C',
              height: '45px',
              flexShrink: 0,
              fontSize: { xs: '13px', sm: '15px' },
              fontWeight: 400,
              '&:hover': {
                color: '#FB631C',
                backgroundColor: '#fff',
              },
            }}
            onClick={handleSubmitSubmit}
          >
            {pathName?.includes(cover)
              ? propertyData?.SubmitProposal
              : propertyData?.submitAd}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default SubmitButton;
