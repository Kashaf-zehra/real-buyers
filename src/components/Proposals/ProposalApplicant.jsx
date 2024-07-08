import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const ProposalApplicant = ({ proposal }) => {
  const agents = useSelector((state) => state?.agents);

  const selectedAgent = agents?.find((agent) => agent?.id === proposal?.agent);

  if (!selectedAgent) {
    console.error(`Agent with id ${proposal} not found`);
  }
  return (
    <Grid
      item
      xs={3}
      sx={{
        p: '40px 40px 40px 20px',
        justifyContent: 'center',
        borderRight: '1px solid #E4E4E4',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          pb: '10px',
          color: '#333',
          fontSize: '12px',
          fontWeight: '600',
        }}
      >
        {`Applicant`}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: '#333',
          fontSize: '12px',
          fontWeight: '400',
        }}
      >
        {`${selectedAgent?.firstName} has applied to or been invited to your or your company’s job need experience custom template designers for custom posts archive creation`}
      </Typography>
    </Grid>
  );
};

export default ProposalApplicant;
