'use client';
import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { useFormik } from 'formik';

import BuyersPlatform from '@/src/components/dashboard/BuyersPlatform';
import AdInformation from '@/src/components/dashboard/AdInformation';
import PropertySize from '@/src/components/dashboard/Propertysize';
import PropertyPurpose from '@/src/components/dashboard/PropertyPurpose';
import SubmitButton from '@/src/components/dashboard/SubmitButton';
import PreviewModal from '@/src/components/dashboard/preview/PreviewModal';
import PropertyFeatures from '@/src/components/dashboard/PropertyFeature';
import PropertyGallery from '@/src/components/dashboard/PropertGallery';
import ProposalModal from '@/src/components/dashboard/modals/ProposalModal';
import { postListingValidation } from '@/src/components/Schemas/postListingValidation';

import { POST_LISTING } from '@/src/constants/agent/Post_Listing';
import {
  DRAFT_SUBMIT_MODAL_DATA,
  SUBMIT_MODAL_DATA,
} from '@/src/constants/Preview_Data';
import { findSpecificPost } from '@/src/utils/dashboardUtils';
import { updateSelectedAmenities } from '@/src/utils/updateSelectedAmenities';
import { getAgentInitialFormValues } from '@/src/utils/draftFormikInitialState';

const DraftPropertyForm = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [Action, setAction] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const agentDrafts = useSelector((state) => state?.postListingAds?.draft);
  const find_ad = findSpecificPost(agentDrafts, id);

  const [updated, serUpdated] = useState(find_ad || {});

  useEffect(() => {
    serUpdated(find_ad || {});
  }, [find_ad]);

  const getAmenities = useSelector(
    (state) => state?.postListingAds?.addAmenities
  );
  const handleSeletedAmenites = () => {
    updateSelectedAmenities(getAmenities, setSelectedAmenities);
  };

  const currentUser = useSelector((state) => state?.currentUser?.user);
  const handleOpenSuccessModal = () => setIsOpen(true);
  const handleCloseSuccessModal = () => setIsOpen(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const initialFormValues = getAgentInitialFormValues(updated, currentUser);

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: postListingValidation,
    onSubmit: (values) => {
      values.status = Action;
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
            <PropertyPurpose
              formik={formik}
              propertyData={POST_LISTING}
              buyData={POST_LISTING?.buy}
            />
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
              Action={Action}
              updated={updated}
              propertyData={POST_LISTING}
              setAction={setAction}
              handleClickOpen={handleClickOpen}
              handleOpenSuccessModal={handleOpenSuccessModal}
            />
            <PreviewModal
              open={open}
              onClose={handleClose}
              ads={formik?.values}
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
export default DraftPropertyForm;
