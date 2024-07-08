'use client';
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import BuyersPlatform from '@/src/components/dashboard/BuyersPlatform';
import AdInformation from '@/src/components/dashboard/AdInformation';
import PropertySize from '@/src/components/dashboard/Propertysize';
import PropertyPurpose from '@/src/components/dashboard/PropertyPurpose';
import SubmitButton from '@/src/components/dashboard/SubmitButton';

import {
  handleSubmitDraft,
  handleSumitUserAds,
} from '@/src/redux/slices/userAds/userAdsSlice';
import PreviewModal from '@/src/components/dashboard/preview/PreviewModal';
import PropertyFeatures from '@/src/components/dashboard/PropertyFeature';
import ProposalModal from '@/src/components/dashboard/modals/ProposalModal';
import { toggleCheckAmenityClear } from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

import {
  DRAFT_SUBMIT_MODAL_DATA,
  SUBMIT_MODAL_DATA,
} from '@/src/constants/Preview_Data';
import {
  POST_REQUEST,
  POST_REQUEST_VALUES,
} from '@/src/constants/user/Dashboard';
import { postRequestValidation } from '@/src/components/Schemas/postRequestValidation';

import Link from 'next/link';
import { updateSelectedAmenities } from '@/src/utils/updateSelectedAmenities';
import { generateRandomNumber } from '@/src/utils/dashboardUtils';

const PostRequest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [Action, setAction] = useState('');

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state?.currentUser?.user);
  const getAmenities = useSelector(
    (state) => state?.postListingAds?.addAmenities
  );

  const handleSeletedAmenites = () => {
    updateSelectedAmenities(getAmenities, setSelectedAmenities);
  };

  const handleOpenSuccessModal = () => setIsOpen(true);
  const handleCloseSuccessModal = () => setIsOpen(false);

  const handleSubmit = (values) => {
    if (Action === 'draft') {
      dispatch(handleSubmitDraft(values));
      handleOpenSuccessModal();
    } else if (Action === 'submit') {
      dispatch(handleSumitUserAds(values));
      handleOpenSuccessModal();
    }
    dispatch(toggleCheckAmenityClear());
    setSelectedAmenities([]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const randomNumber = generateRandomNumber();

  const formik = useFormik({
    initialValues: POST_REQUEST_VALUES,
    validationSchema: postRequestValidation,
    onSubmit: (values, action) => {
      values.property_id = randomNumber;
      values.user_id = currentUser?.id;
      values.status = Action;
      handleSubmit(values);
      action.resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Link href="/agent/live-bidding">agent</Link>
        <form onSubmit={formik?.handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              maxWidth: { lg: '1200px', xl: '1200px', xxl: '1500px' },
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '40px',
              margin: { xs: 0, md: '0 auto', lg: 0 },
            }}
          >
            <BuyersPlatform propertyData={POST_REQUEST} />
            <AdInformation formik={formik} propertyData={POST_REQUEST} />
            <PropertyPurpose
              formik={formik}
              propertyData={POST_REQUEST}
              buyData={POST_REQUEST?.buy}
            />
            <PropertySize formik={formik} propertyData={POST_REQUEST} />
            <PropertyFeatures
              formik={formik}
              propertyData={POST_REQUEST}
              setSelectedAmenities={setSelectedAmenities}
              selectedAmenities={selectedAmenities}
              handleSeletedAmenites={handleSeletedAmenites}
            />
            <SubmitButton
              formik={formik}
              setAction={setAction}
              propertyData={POST_REQUEST}
              handleClickOpen={handleClickOpen}
              handleOpenSuccessModal={handleOpenSuccessModal}
            />
            <PreviewModal
              open={open}
              onClose={handleClose}
              ads={formik?.values}
              formik={formik}
            />
          </Box>
        </form>
        <ProposalModal
          buttonLabel={`${Action == 'draft' ? DRAFT_SUBMIT_MODAL_DATA?.buttonLabel : SUBMIT_MODAL_DATA?.buttonLabel}`}
          description={`${Action == 'draft' ? DRAFT_SUBMIT_MODAL_DATA?.description : SUBMIT_MODAL_DATA?.description}`}
          title={`${Action == 'draft' ? DRAFT_SUBMIT_MODAL_DATA?.title : SUBMIT_MODAL_DATA?.title}`}
          open={isOpen}
          onClose={handleCloseSuccessModal}
        />
      </Grid>
    </Grid>
  );
};
export default PostRequest;
