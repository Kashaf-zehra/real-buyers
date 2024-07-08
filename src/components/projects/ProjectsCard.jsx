'use client';
import { PROJECTS_DATA } from '@/src/constants/Projects/projects';
import {
  Typography,
  Box,
  Grid,
  Pagination,
  PaginationItem,
  Skeleton,
} from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

const itemsPerPage = 9;

const ProjectsCard = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProjects =
    data?.slice(startIndex, startIndex + itemsPerPage) || PROJECTS_DATA;

  return (
    <>
      <Grid
        container
        sx={{ display: 'flex', justifyContent: 'space-between', gap: 'auto' }}
      >
        {visibleProjects.map((project, index) => (
          <Grid
            key={index}
            item
            xs={3.8}
            my={'20px'}
            sx={{
              backgroundColor: '#fff',
              border: '1px solid #E4E4E4',
              borderRadius: '5px',
            }}
          >
            <Link href={`/projects/${project?.property_id}`}>
              {!project?.images?.length == 0 ? (
                <img
                  src={
                    project?.images[0] ||
                    `/images/default/default_project_image.jpg`
                  }
                  height={'auto'}
                  width={'100%'}
                  alt={`Project ${project?.id}`}
                />
              ) : (
                <Skeleton variant="rectangular" width={`100%`} height={300} />
              )}
            </Link>
            <Box sx={{ p: '20px' }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: '20px' }}>
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: 500,
                    lineHeight: '24px',
                    pr: '5px',
                  }}
                >
                  {project?.amountCurrency || (
                    <Skeleton variant="rectangular" width={100} height={20} />
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '25px',
                    fontWeight: 600,
                    lineHeight: '30px',
                  }}
                >
                  {project?.amount || (
                    <Skeleton variant="rectangular" width={100} height={30} />
                  )}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  pb: '15px',
                  textWrap: 'wrap',
                }}
              >
                {`${project?.location}, ${project?.city}` || (
                  <>
                    <Skeleton />
                    <Skeleton />
                  </>
                )}
              </Typography>
              <Box display={'flex'} gap={'5px'}>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    pb: '15px',
                  }}
                >
                  {project?.area || (
                    <Skeleton variant="text" height={'2rem'} width={100} />
                  )}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    pb: '15px',
                  }}
                >
                  {project?.areaUnit || (
                    <Skeleton variant="text" height={'2rem'} width={100} />
                  )}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 600,
                  lineHeight: '21px',
                  pb: '15px',
                }}
              >
                {project?.orientation || (
                  <Skeleton variant="text" height={'2rem'} />
                )}
              </Typography>

              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '25px',
                }}
              >
                {project?.description?.length > 150
                  ? `${project?.description.slice(0, 147)}...`
                  : project?.description || (
                      <>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                      </>
                    )}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      {data?.length > itemsPerPage && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChangePage}
            color="primary"
            size="medium"
            sx={{ '& .MuiPaginationItem-root': { borderRadius: '10px' } }}
            renderItem={(item) => (
              <PaginationItem
                key={item?.page}
                {...item}
                sx={{
                  borderRadius: '10px',
                  color: 'primary.main',
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                }}
              />
            )}
          />
        </Box>
      )}
    </>
  );
};

export default ProjectsCard;
