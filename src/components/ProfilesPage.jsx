'use client';
import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Box,
  Pagination,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link';
import NotFoundSection from './global/NotFoundSection';

const ProfilesPage = ({ agents }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 16;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  // Validate agents array
  if (!Array.isArray(agents) || agents?.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'No agents found. Please retry later.'}
      />
    );
  }

  return (
    <Box py={'50px'}>
      <Typography
        sx={{
          fontSize: { xs: '25px', sm: '25px', md: '30px', lg: '40px' },
          color: '#333333',
          fontWeight: 700,
          textAlign: 'center',
          padding: 6,
        }}
      >
        {`Top Performing Agents`}
      </Typography>
      <Grid container spacing={6}>
        {agents?.slice(startIndex, endIndex).map((agent) => (
          <Grid key={agent.id} item xs={12} sm={6} md={3}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0 4px 4px 2px rgba(0,0,0,0.25)',
              }}
            >
              <Box
                px={'80px'}
                pt={'30px'}
                sx={{
                  backgroundImage: `url(${agent?.agency_cover || '/images/default/default_project_image.jpg'})`,
                  backgroundPosition: 'center',
                }}
              >
                <Link href={`/profile/${agent?.id}`}>
                  <CardMedia
                    component="img"
                    height="100px"
                    image={agent?.profile_image}
                    alt={`${agent?.first_name} ${agent?.last_name}`}
                    sx={{ marginBottom: '-25px' }}
                  />
                </Link>
              </Box>
              <Box p={2}>
                <Box sx={{ flex: '1 0 auto', py: 2 }}>
                  <Link href={`/profile/${agent?.id}`}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="center"
                    >
                      {`${agent?.first_name} ${agent?.last_name}`}
                    </Typography>
                  </Link>
                  <Link href={`/profile/${agent?.id}`}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      {`${agent?.business_name || `${agent?.first_name}'s Agency`}`}
                    </Typography>
                  </Link>
                  <Box display={'flex'} justifyContent={'space-between'}>
                    <Link href={`/profile/${agent?.id}/projects`}>
                      <Typography variant="h6" color="text.secondary">
                        {`Properties Details: ${agent?.counts?.totalCount || 0}`}
                      </Typography>
                    </Link>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </Box>
                  <Grid container display={'flex'} spacing={2}>
                    {['rent', 'sell'].map((type) => (
                      <Grid item xs={6} key={type}>
                        <Typography variant="h6" color="text.secondary">
                          {`For ${type.charAt(0).toUpperCase() + type.slice(1)}: ${
                            agent?.counts?.[`${type}Count`]?.total || 0
                          }`}
                        </Typography>
                        {['Houses', 'Plots', 'Commercials'].map((category) => (
                          <Link
                            href={`/profile/${agent?.id}/projects/${type}/${category.toLowerCase()}`}
                            key={`${type}-${category}`}
                          >
                            <Typography variant="body2" color="text.secondary">
                              {`${category}: ${
                                agent?.counts?.[`${type}Count`]?.[category] || 0
                              }`}
                            </Typography>
                          </Link>
                        ))}
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Grid container justifyContent="space-between" spacing={1}>
                  {[
                    { label: 'Profile Link', href: `/profile/${agent?.id}` },
                    { label: 'Chat Now', href: `/chat/${agent?.id}` },
                  ].map(({ label, href }) => (
                    <Grid item xs={6} key={label}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        href={href}
                      >
                        {label}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mt={3} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(agents?.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default ProfilesPage;
