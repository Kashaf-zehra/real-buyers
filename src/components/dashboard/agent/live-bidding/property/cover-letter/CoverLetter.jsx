'use client';
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { usePathname } from 'next/navigation';

import BuyersPlatform from '@/src/components/dashboard/BuyersPlatform';
import AdInformation from '@/src/components/dashboard/AdInformation';
import PropertySize from '@/src/components/dashboard/Propertysize';
import PropertyPurpose from '@/src/components/dashboard/PropertyPurpose';

import SubmitButton from '@/src/components/dashboard/SubmitButton';
import PreviewModal from '@/src/components/dashboard/preview/PreviewModal';
import PropertyFeatures from '@/src/components/dashboard/PropertyFeature';
import PropertyGallery from '@/src/components/dashboard/PropertGallery';
import NotFoundSection from '@/src/components/global/NotFoundSection';

import { addProposal } from '@/src/redux/slices/proposals/proposalsSlice';
import { currentProposal } from '@/src/redux/slices/currentUser/currentUserSlice';
import { toggleCheckAmenityClear } from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

import {
  COVER_LETTER,
  COVER_LETTER_VALUES,
} from '@/src/constants/agent/Cover_Letter';
import { coverLetterValidation } from '@/src/components/Schemas/coverLetterValidation';
import { PROPOSAL_SUBMIT_MODAL_DATA } from '@/src/constants/Preview_Data';
import SubmissionModal from '@/src/components/dashboard/modals/ProposalModal';
import Link from 'next/link';
import { updateSelectedAmenities } from '@/src/utils/updateSelectedAmenities';
import {
  checkIdValidity,
  findSpecificPost,
  generateRandomNumber,
} from '@/src/utils/dashboardUtils';

const CoverLetter = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 2];
  const userPostings = useSelector(
    (state) => state?.postRequestAds?.userPostings
  );
  const specificPost = findSpecificPost(userPostings, id);

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
    dispatch(addProposal(values));
    handleOpenSuccessModal();
    dispatch(
      currentProposal({
        property_id: values?.property_id,
        agent_id: values?.agent_id,
      })
    );
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
    initialValues: COVER_LETTER_VALUES,
    validationSchema: coverLetterValidation,
    onSubmit: (values, action) => {
      values.property_id = Number(id);
      values.proposal_id = randomNumber;
      values.agent_id = current_user_id;
      values.status = 'Submited';
      handleSubmit(values);
      action.resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <>
      {checkIdValidity(id, specificPost) ? (
        <>
          <NotFoundSection />
        </>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <Link href={'/user/dashboard'}>dashboard</Link>
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
                <BuyersPlatform propertyData={COVER_LETTER} fontSize={'20px'} />
                <AdInformation formik={formik} propertyData={COVER_LETTER} />
                <PropertyPurpose formik={formik} propertyData={COVER_LETTER} />
                <PropertySize formik={formik} propertyData={COVER_LETTER} />
                <PropertyFeatures
                  formik={formik}
                  propertyData={COVER_LETTER}
                  setSelectedAmenities={setSelectedAmenities}
                  selectedAmenities={selectedAmenities}
                  handleSeletedAmenites={handleSeletedAmenites}
                />
                <PropertyGallery formik={formik} propertyData={COVER_LETTER} />
                <SubmitButton
                  formik={formik}
                  propertyData={COVER_LETTER}
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
            <SubmissionModal
              buttonLabel={PROPOSAL_SUBMIT_MODAL_DATA?.buttonLabel}
              description={PROPOSAL_SUBMIT_MODAL_DATA?.description}
              title={PROPOSAL_SUBMIT_MODAL_DATA?.title}
              open={isOpen}
              onClose={handleCloseSuccessModal}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default CoverLetter;
