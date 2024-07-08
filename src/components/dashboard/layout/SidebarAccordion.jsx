'use client';
import React, { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';

const SidebarAccordion = ({ sidebarLinks }) => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      {sidebarLinks?.map((item, index) => (
        <div key={index}>
          <Box>
            <Accordion
              expanded={
                item?.sublinks == null ? null : expanded === `panel${index + 1}`
              }
              onChange={handleChange(`panel${index + 1}`)}
              sx={{
                boxShadow: 'none !important',
                width: '100%',
                px: 0.3,
                border: 0,
                '.mui-vf72v2-MuiPaper-root-MuiAccordion-root.Mui-expanded': {
                  boxShadow: 'none !important',
                  border: 0,
                },
              }}
            >
              <AccordionSummary
                expandIcon={item?.sublinks == null ? null : <ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={`panel${index + 1}a-header`}
                sx={{
                  mx: 'auto',
                  p: 1.4,
                  mb: 1.4,
                  minHeight: '40px',
                  gap: 2,
                  width: '100%',
                  height: '43px',
                  borderRadius: '10px',
                  backgroundColor: `${
                    pathname?.includes(item?.link) ? '#FF631C33' : null
                  }`,
                }}
              >
                {item?.icon && (
                  <Box
                    component={'img'}
                    alt={'icon'}
                    sx={{
                      width: '25px',
                      height: '25px',
                      '@media (min-width: 280px ) and (max-width: 319px)': {
                        width: '20px',
                        height: '20px',
                      },
                    }}
                    src={
                      pathname?.includes(item?.link) ? item?.active : item?.icon
                    }
                  />
                )}
                {item?.link ? (
                  <Link
                    style={{ width: '100%', height: '100%' }}
                    href={`${item?.link}`}
                  >
                    <Typography
                      sx={{
                        width: '100%',
                        height: '100%',
                        fontSize: '15px',
                        fontWeight: 400,
                        pt: 0.3,
                        ml: 2,
                        color: `${pathname?.includes(item?.link) ? '#FB631C' : '#000'}`,
                        '@media (min-width: 280px ) and (max-width: 319px)': {
                          fontSize: '13px',
                        },
                      }}
                    >
                      {item?.text}
                    </Typography>
                  </Link>
                ) : (
                  <Typography
                    variant="body1"
                    sx={{
                      width: '100%',
                      height: '100%',
                      fontSize: '15px',
                      fontWeight: 400,
                      pt: 0.4,
                      ml: 2,
                      color: `${pathname?.includes(item?.link) ? '#FB631C' : '#000'}`,
                      '@media (min-width: 280px ) and (max-width: 319px)': {
                        fontSize: '13px',
                      },
                    }}
                  >
                    {item?.text}
                  </Typography>
                )}
              </AccordionSummary>
              {item?.sublinks &&
                item?.sublinks?.map((eachItem, index) => (
                  <div key={index}>
                    <AccordionDetails
                      key={index}
                      sx={{
                        mt: -1.4,
                        ml: 5,
                        pt: 1,
                        pb: 1,
                        mb: 3,
                        width: '170px',
                        boxShadow: 'none !important',
                        alignItems: 'center',
                        borderRadius: '10px',
                        backgroundColor: `${
                          pathname?.includes(eachItem?.link)
                            ? '#FF631C33 !important'
                            : null
                        }`,
                      }}
                    >
                      <Link
                        style={{ width: '100%', height: '100%' }}
                        href={`${eachItem?.link}`}
                      >
                        <Typography
                          sx={{
                            fontSize: '14px',
                            fontWeight: 400,
                            width: '100%',
                            height: '100%',
                            color: `${pathname?.includes(eachItem?.link) ? '#FB631C' : '#000'}`,
                          }}
                        >
                          {eachItem?.text}
                        </Typography>
                      </Link>
                    </AccordionDetails>
                  </div>
                ))}
            </Accordion>
          </Box>
        </div>
      ))}
    </div>
  );
};

export default SidebarAccordion;
