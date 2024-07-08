import { Grid, Typography, Box } from '@mui/material';

const PolicyCard = ({ data, id, xs, md, sm, textAlign, backgroundColor }) => {
  return (
    <Grid
      item
      xs={xs}
      md={md}
      sm={sm}
      sx={{
        borderRadius: '20px',
        border: '1px solid #E4E4E4',
        backgroundColor: { backgroundColor },
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box sx={{ px: '50px', py: '30px' }}>
        <Typography
          variant="body1"
          sx={{
            color: '#333',
            fontSize: '20px',
            fontWeight: '600',
            pb: '30px',
            textAlign: { textAlign },
          }}
        >
          {data[id].title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#333',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '25px',
          }}
        >
          {data[id].content}
        </Typography>
      </Box>
    </Grid>
  );
};

export default PolicyCard;
