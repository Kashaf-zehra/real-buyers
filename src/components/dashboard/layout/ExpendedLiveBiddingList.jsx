import React, { useState } from 'react';
import { Box, Collapse, IconButton, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Image from 'next/image';
import Link from 'next/link';

const ExpendedLiveBiddingList = ({ list }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const path = usePathname();

  const toggleCollapse = (itemId) => {
    if (itemId === openItemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(itemId);
    }
  };

  return (
    <Box>
      {list?.map((item) => {
        const isItemOpen = item?.id === openItemId;
        return (
          <Box key={item?.id}>
            <Box
              sx={{
                width: { lg: '96%', xs: '100%' },
                maxWidth: '290px',
                mx: 'auto',
                display: 'flex',
                padding: '10px',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                backgroundColor: item?.link == path ? '#FF631C33' : null,
                borderRadius: item?.link == path ? '12px' : 0,
                '.active-link:active': {
                  textDecoration: 'none',
                },
                '&:active': {
                  backgroundColor: 'transparent !important',
                },
              }}
              onClick={() => toggleCollapse(item?.id)}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={path == item?.link ? item?.iconActive : item?.icon}
                  width={30}
                  height={30}
                  alt={'icons'}
                />
                <Typography
                  sx={{
                    color: item?.link == path ? '#FB631C !important' : '#000',
                    fontSize: '16px',
                    fontWeight: '500',
                    px: '15px',
                  }}
                >
                  <Link
                    rel="stylesheet"
                    className="active-link"
                    href={item?.link}
                  >
                    {item?.title}
                  </Link>
                </Typography>
              </Box>
              {item?.subItem && (
                <IconButton
                  onClick={() => toggleCollapse(item?.id)}
                  sx={{
                    marginRight: { xs: '0px', lg: '-20px' },
                    '&:hover': { backgroundColor: '#fff !important' },
                  }}
                >
                  {isItemOpen ? (
                    <ExpandLessIcon sx={{ color: '#000' }} />
                  ) : (
                    <ExpandMoreIcon sx={{ color: '#000' }} />
                  )}
                </IconButton>
              )}
            </Box>
            <Collapse in={isItemOpen}>
              {item?.subItem && item?.subItem.length > 0 && (
                <Box
                  sx={{
                    paddingLeft: '45px',
                    textAlign: 'left',
                  }}
                >
                  <Typography variant="ul">
                    {item?.subItem.map((item, index) => (
                      <Typography
                        variant="li"
                        sx={{
                          fontWeight: '500',
                          fontSize: '14px',
                          display: 'block',
                          padding: '10px',
                          pl: '15px',
                          width: '70%',
                          color: '#000',
                          cursor: 'pointer',
                          backgroundColor:
                            item?.link == path ? '#FF631C33' : null,
                          borderRadius: item?.link == path ? '12px' : 0,
                          '.active-link:active': {
                            textDecoration: 'none',
                          },
                        }}
                        key={index}
                      >
                        <Link
                          rel="stylesheet"
                          className="active-link"
                          href={item?.link}
                        >
                          {item?.subTitle}
                        </Link>
                      </Typography>
                    ))}
                  </Typography>
                </Box>
              )}
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
};

export default ExpendedLiveBiddingList;
