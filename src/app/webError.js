'use client';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

import { PAGES_INFO } from '@/src/constants/Constants';

class WebError extends React.Component {
  constructor(props) {
    super(props);
    this.refreshPage = this.refreshPage.bind(this);
  }
  refreshPage() {
    window.location.reload();
  }

  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  }

  render() {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '600px',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#fce4e4',
            border: '1px solid #cc0033',
            outline: 'none',
            width: '500px',
            height: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Image
              src="/images/error/error.png"
              width={45}
              height={30}
              alt={'error'}
            />
            <Typography
              sx={{
                fontSize: '25px',
                fontWeight: 500,
                color: '#fe4141',
              }}
            >
              {this.props.statusCode
                ? `An error ${this.props.statusCode} occurred on server`
                : PAGES_INFO.errorMessage}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 0 0.1rem #fe4141',
              width: '150px',

              gap: '5px',
            }}
          >
            <Image
              src="/images/error/reset.png"
              width={25}
              height={30}
              alt={'reset'}
            />

            <Button
              sx={{
                fontSize: '17px',
                fontWeight: 600,
                color: '#ec334d',
              }}
              onClick={this.refreshPage}
            >
              {PAGES_INFO.reset}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default WebError;
