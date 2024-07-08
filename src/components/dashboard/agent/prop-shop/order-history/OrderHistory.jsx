import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { SpaceRow } from './SpaceRow';
import { Box } from '@mui/material';

const OrderHistory = ({ history }) => {
  const { tableHead, tableData, space, title } = history;
  return (
    <Box sx={{ mt: '10px', mb: '60px' }}>
      <TableContainer
        sx={{
          maxWidth: { lg: '1200px', xl: '1200px ', xxl: '1500px' },
          border: '1px solid #E4E4E4 ',
          borderRadius: '10px',
          backgroundColor: '#fff',
        }}
      >
        <Table sx={{ minWidth: 1060 }} aria-label="simple table">
          <TableHead>
            <SpaceRow space={space} title={title} />
            <SpaceRow space={space} />
            <TableRow>
              {tableHead?.map((item, index) => (
                <TableCell
                  key={index}
                  sx={{
                    pr: { lg: '25px' },
                    maxWidth: '40px',
                    textAlign: 'center',
                    fontSize: '20px',
                    color: '#969696',
                    lineHeight: 'normal',
                    fontWeight: 500,
                  }}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData?.map((row) => (
              <TableRow
                key={row?.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    width: { md: '160px' },
                    textAlign: 'center',
                    fontSize: '16px',
                    color: '#333',
                    lineHeight: 'normal',
                    fontWeight: 500,
                  }}
                >
                  {row?.name}
                </TableCell>
                <TableCell
                  sx={{
                    width: { xs: '160px', md: '100px' },
                    fontSize: '16px',
                    textAlign: { xs: 'center', md: 'left' },
                    color: '#333',
                    lineHeight: '25px',
                    fontWeight: 500,
                  }}
                >
                  {row?.description}
                </TableCell>
                <TableCell
                  sx={{
                    width: { md: '160px' },
                    textAlign: 'center',
                    fontSize: '16px',
                    color: '#333',
                    lineHeight: 'normal',
                    fontWeight: 500,
                  }}
                >
                  {row?.time}
                </TableCell>
                <TableCell
                  sx={{
                    width: { md: '100px' },
                    textAlign: 'center',
                    fontSize: '16px',
                    color: '#333',
                    lineHeight: 'normal',
                    fontWeight: 500,
                  }}
                >
                  {row?.date}
                </TableCell>
                <TableCell
                  sx={{
                    width: { md: '155px' },
                    textAlign: 'center',
                    fontSize: '16px',
                    color: '#333',
                    lineHeight: 'normal',
                    fontWeight: 500,
                  }}
                >
                  {row?.total}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderHistory;
