import { Box } from '@mui/material';
import React from 'react';

const RenderFileUploads = ({ fileInput, handleRemoveFile }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        maxWidth: '400px',
        maxHeight: '200px',
        overflow: 'auto',
        flexWrap: 'wrap',
        // alignItems: 'center',
      }}
    >
      {fileInput.length > 0 &&
        fileInput?.map((file, fileIndex) => {
          return (
            <Box
              key={fileIndex}
              className="file-upload-content-inbox"
              sx={{
                backgroundColor: '#eee',
                padding: '10px',
                marginBottom: '10px',
                width: { xs: '80px', sm: '150px' },
                height: { xs: '80px', sm: '150px' },
                boxShadow: '0px 0px 5px 2px #ccc',
                borderRadius: '5px',
                marginRight: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {file?.data?.type === 'image/jpeg' ? (
                <Box
                  component={'img'}
                  src={'/icons/JPEGFileIcon.svg'}
                  alt={'Selected'}
                  sx={{
                    width: { xs: '40px', sm: '100px' },
                    height: { xs: '40px', sm: '100px' },
                  }}
                />
              ) : (
                <Box
                  alt={'Selected'}
                  sx={{
                    width: { xs: '50px', sm: '100px' },
                    height: { xs: '50px', sm: '100px' },
                    backgroundImage: `url(${URL.createObjectURL(file?.data)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              )}
              <Box
                component={'img'}
                src="/icons/CloseIcon.svg"
                sx={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '5px',
                  top: '5px',
                }}
                alt={'Reply'}
                onClick={() => handleRemoveFile(file?.id)}
              />
            </Box>
          );
        })}
      {fileInput.length > 0 && (
        <label htmlFor="file-input">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(000,000,000,0.4)',
              // height: {xs:'80px',sm:'120px'},
              height: 'calc(100% - 10px)',
              width: '50px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            <Box
              component={'img'}
              src={'/icons/PlusIconWhite.svg'}
              sx={{
                width: '20px',
                height: '20px',
              }}
              alt={'Upload More'}
            />
          </Box>
        </label>
      )}
    </Box>
  );
};

export default RenderFileUploads;
