'use client';
import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import ClearIcon from '@mui/icons-material/Clear';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const DeletableSquareChip = ({ label, onDelete }) => {
  return (
    <Chip
      label={label}
      variant="outlined"
      color="primary"
      onDelete={onDelete}
      deleteIcon={<ClearIcon color="icon" />}
      sx={{
        fontSize: '18px',
        borderRadius: '4px',
        marginRight: '8px',
        marginBottom: '8px',
        color: '#333',
        border: '1px solid #e4e4e4',
      }}
    />
  );
};

const Chips = ({ data }) => {
  const [selectedChips, setSelectedChips] = useState([]);
  console.log(selectedChips);
  const handleDeleteChip = (chipToDelete) => () => {
    setSelectedChips((chips) =>
      chips?.filter((_, index) => chips[index] !== chipToDelete)
    );
  };

  const handleClearAllChips = () => {
    setSelectedChips([]);
  };

  const uniqueAgentPropertyTypes = [];
  const seenPropertyTypes = {};

  data?.forEach((property) => {
    const key = `${property?.agentData?.name}-${property?.propertyData?.propertyType}`;
    if (!seenPropertyTypes[key]) {
      uniqueAgentPropertyTypes?.push(key);
      seenPropertyTypes[key] = true;
    }
  });

  return (
    <Box sx={{ display: 'contents' }}>
      {uniqueAgentPropertyTypes?.map((label, index) => {
        const [agentName, propertyType] = (label ?? '').split('-');
        return (
          <DeletableSquareChip
            key={index}
            label={`${agentName}'s ${propertyType}`}
            onDelete={handleDeleteChip(label)}
          />
        );
      })}
      <Button
        sx={{ color: '#126FAA', fontWeight: '500' }}
        onClick={handleClearAllChips}
      >
        <Typography>Clear</Typography>
      </Button>
    </Box>
  );
};

export default Chips;
