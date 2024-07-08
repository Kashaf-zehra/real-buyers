import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

import { FEATURE_STYLES } from '@/src/constants/Home';
import { POSITIONS } from '@/src/constants/Home';

const LinearProgressBar = ({ position, hovered }) => {
  return (
    <LinearProgress
      className="linearProgress"
      sx={{
        position: 'absolute',
        color: '#fb631c',
        opacity: hovered
          ? FEATURE_STYLES.opacityTwo
          : FEATURE_STYLES.opacityZero,
        ...POSITIONS[position],
      }}
    />
  );
};

export default LinearProgressBar;
