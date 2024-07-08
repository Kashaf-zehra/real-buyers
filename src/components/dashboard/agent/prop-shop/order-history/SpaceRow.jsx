import { TableCell, TableRow } from '@mui/material';

export const SpaceRow = ({ space, title }) => (
  <>
    {title && (
      <TableRow>
        <TableCell
          colSpan={space.length}
          sx={{
            color: '#000',
            fontSize: '25px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            pl: '40px',
          }}
        >
          {title}
        </TableCell>
      </TableRow>
    )}
    {!title && (
      <TableRow>
        {space?.map((item, index) => (
          <TableCell key={index} sx={{ padding: '25px' }}>
            {item?.space}
          </TableCell>
        ))}
      </TableRow>
    )}
  </>
);
