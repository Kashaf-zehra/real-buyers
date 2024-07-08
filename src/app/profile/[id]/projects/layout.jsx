import React from 'react';
import { Container } from '@mui/material';

const InnerPageLayout = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default InnerPageLayout;
