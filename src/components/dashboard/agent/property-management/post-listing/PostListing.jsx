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
import PreviewModal from '@/src/components/dashboard/preview/PreviewModal';
import PropertyFeatures from '@/src/components/dashboard/PropertyFeature';
import ProposalModal from '@/src/components/dashboard/modals/ProposalModal';
import PropertyGallery from '@/src/components/dashboard/PropertGallery';
import {
  handlePostlistingAd,
  toggleCheckAmenityClear,
  handleSubmitDraftForAgent,
} from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

import { postListingValidation } from '@/src/components/Schemas/postListingValidation';
import {
  POST_LISTING,
  POST_LISTING_VALUES,
} from '@/src/constants/agent/Post_Listing';
import {
  DRAFT_SUBMIT_MODAL_DATA,
  SUBMIT_MODAL_DATA,
} from '@/src/constants/Preview_Data';
import { updateSelectedAmenities } from '@/src/utils/updateSelectedAmenities';
import { generateRandomNumber } from '@/src/utils/dashboardUtils';

const PostListing = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const dispatch = useDispatch();
  const current_user_id = useSelector((state) => state?.currentUser?.user?.id);
  const getAmenities = useSelector(
    (state) => state?.postListingAds?.addAmenities
  );

  const handleSeletedAmenites = () => {
    updateSelectedAmenities(getAmenities, setSelectedAmenities);
  };
  const handleOpenSuccessModal = () => setIsOpen(true);
  const handleCloseSuccessModal = () => setIsOpen(false);

  const handleSubmit = (values) => {
    if (action === 'draft') {
      dispatch(handleSubmitDraftForAgent(values));
      handleOpenSuccessModal();
    } else if (action === 'submit') {
      dispatch(handlePostlistingAd(values));
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
    initialValues: POST_LISTING_VALUES,
    validationSchema: postListingValidation,
    onSubmit: (values, action) => {
      values.property_id = randomNumber;
      values.user_id = current_user_id;
      values.status = 'submited';
      handleSubmit(values);
      console.log(values, 'values');
      action.resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });
  return (
    <Grid container>
      <Grid item xs={12}>
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
            <BuyersPlatform propertyData={POST_LISTING} />
            <AdInformation formik={formik} propertyData={POST_LISTING} />
            <PropertyPurpose formik={formik} propertyData={POST_LISTING} />
            <PropertySize formik={formik} propertyData={POST_LISTING} />
            <PropertyFeatures
              formik={formik}
              propertyData={POST_LISTING}
              setSelectedAmenities={setSelectedAmenities}
              selectedAmenities={selectedAmenities}
              handleSeletedAmenites={handleSeletedAmenites}
            />
            <PropertyGallery formik={formik} propertyData={POST_LISTING} />
            <SubmitButton
              formik={formik}
              propertyData={POST_LISTING}
              setAction={setAction}
              handleClickOpen={handleClickOpen}
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
          buttonLabel={`${action == 'draft' ? DRAFT_SUBMIT_MODAL_DATA?.buttonLabel : SUBMIT_MODAL_DATA?.buttonLabel}`}
          description={`${action == 'draft' ? DRAFT_SUBMIT_MODAL_DATA?.description : SUBMIT_MODAL_DATA?.description}`}
          title={`${action == 'draft' ? DRAFT_SUBMIT_MODAL_DATA?.title : SUBMIT_MODAL_DATA?.title}`}
          open={isOpen}
          onClose={handleCloseSuccessModal}
        />
      </Grid>
    </Grid>
  );
};
export default PostListing;
