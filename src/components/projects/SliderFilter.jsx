import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Slider from '@mui/material/Slider';
import FilterApplicatonButtons from './FilterApplicatonButtons';

const SliderFilter = ({
  title,
  selectedUnit,
  units,
  handleChange,
  selectedRange,
  handleRangeChange,
  handleApply,
  handleCancel,
}) => {
  const handleMinAreaChange = (event) => {
    const minValue = event.target.value;
    const newRange = [parseFloat(minValue), selectedRange[1]]; // Keep the maximum value unchanged
    handleRangeChange(null, newRange); // Call the handleRangeChange function with the new range
  };

  // Function to handle changes in the maximum area field
  const handleMaxAreaChange = (event) => {
    const maxValue = event.target.value;
    const newRange = [selectedRange[0], parseFloat(maxValue)]; // Keep the minimum value unchanged
    handleRangeChange(null, newRange); // Call the handleRangeChange function with the new range
  };

  return (
    <Box
      zIndex={999}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: '20px',
        borderRadius: '20px',
        boxShadow: '0px 0px 10px 0px #00000040',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Typography variant={'h3'}>{title}</Typography>
        <Select
          defaultValue={'any'}
          id="area"
          value={selectedUnit || units[0]?.value}
          de
          onChange={handleChange}
        >
          {units.map((unit, index) => (
            <MenuItem key={index} value={unit?.value}>
              {unit?.title}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-around',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <TextField
          id="minArea"
          variant="outlined"
          value={selectedRange[0]}
          onChange={handleMinAreaChange}
        />
        <Typography variant={'h3'}>to</Typography>
        <TextField
          id="maxArea"
          variant="outlined"
          value={selectedRange[1]}
          onChange={handleMaxAreaChange}
        />
      </Box>

      <Box>
        <FormControl fullWidth>
          <Slider
            value={selectedRange}
            onChange={handleRangeChange}
            valueLabelDisplay="auto"
            min={0}
            max={5000}
          />
        </FormControl>
      </Box>
      <FilterApplicatonButtons apply={handleApply} cancel={handleCancel} />
    </Box>
  );
};

export default SliderFilter;
