'use client';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

import ProfileForm from '@/src/components/dashboard/ProfileForm';
import ProfileFormMidText from '@/src/components/dashboard/ProfileFormMidText';
import ProfilePasswordForm from '@/src/components/dashboard/ProfilePasswordForm';
import { AGENT_PROFILE_FORM_DATA } from '@/src/constants/agent/Agent_Profile_Form_Data';

const UserProfile = () => {
  const user_profile = useSelector((state) => state?.currentUser?.user);
  const [userData, setUserData] = useState(user_profile || {});

  useEffect(() => {
    setUserData(user_profile || {});
  }, [user_profile]);

  return (
    <Box
      sx={{
        background: '#fff',
        textAlign: { xs: 'center', sm: 'left' },
        mx: { xs: 'auto', lg: 0 },
        width: {
          lg: '1200px',
          '@media (min-width: 1440px) and (max-width: 1568px)': {
            width: '100%',
          },
          '@media (min-width: 960px) and (max-width: 1439px)': {
            width: '90%',
          },
        },
      }}
    >
      <ProfileForm formValues={userData} data={AGENT_PROFILE_FORM_DATA} />
      <ProfileFormMidText />
      <ProfilePasswordForm
        spacificAgent={userData}
        data={AGENT_PROFILE_FORM_DATA}
      />
    </Box>
  );
};

export default UserProfile;
