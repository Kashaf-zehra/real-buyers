import React, { useRef, useState } from 'react';
import Avatar from '@/src/components/dashboard/ui-elements/Avatar';
import { Box, Typography } from '@mui/material';
import RenderMessageContent from './RenderMessageContent';

const RenderMessage = ({
  data,
  isSameSenderAsPrevious,
  setClickedMessageForReactionId,
  clickedMessageForReactionId,
  setIsReplying,
  setReplyingMessage,
  selectedChatRoom,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const componentRef = useRef(null);

  const handleMouseDown = () => {
    setIsDragging(true);
    setDragDistance(0);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
    setDragDistance(0);
  };

  const handleTouchMove = () => {
    if (isDragging) {
      setDragDistance(15);
      setIsReplying(true);
      setReplyingMessage(data);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setDragDistance(0);
  };
  const handleMouseMove = () => {
    if (isDragging) {
      setDragDistance(15);
      setIsReplying(true);
      setReplyingMessage(data);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragDistance(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragDistance(0);
    }
  };
  const handleMouseDownSender = () => {
    setIsDragging(true);
    setDragDistance(0);
  };

  const handleTouchStartSender = () => {
    setIsDragging(true);
    setDragDistance(0);
  };

  const handleTouchMoveSender = () => {
    if (isDragging) {
      setDragDistance(15);
      setIsReplying(true);
      setReplyingMessage(data);
    }
  };

  const handleTouchEndSender = () => {
    setIsDragging(false);
    setDragDistance(0);
  };
  const handleMouseMoveSender = () => {
    if (isDragging) {
      setDragDistance(15);
      setIsReplying(true);
      setReplyingMessage(data);
    }
  };

  const handleMouseUpSender = () => {
    setIsDragging(false);
    setDragDistance(0);
  };

  const handleMouseLeaveSender = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragDistance(0);
    }
  };

  const handleComponentRef = (node) => {
    componentRef.current = node;
  };
  const handleClickEmoji = (id) => {
    setClickedMessageForReactionId(id);
  };
  const handleClickEmojiIcon = (icon) => {
    setClickedMessageForReactionId('');
    setSelectedEmoji(icon);
  };
  const emojies = [
    'LikeEmojiColor',
    'LaughEmojiColor',
    'CryEmojiColor',
    'AngelEmojiColor',
    'LoveEmojiColor',
    'TiredEmojiColor',
  ];
  if (data?.sender === 'You') {
    return (
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'flex-end'}
        marginBottom={'20px'}
        sx={{
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            // maxWidth: { xs: '100%', sm: '70%' },
            display: 'flex',
            alignItems: 'flex-start',
            position: 'relative',
          }}
        >
          <Box
            component={'img'}
            src="/icons/SmileyIcon.svg"
            sx={{
              width: '15px',
              height: '15px',
              marginRight: '10px',
            }}
            onClick={() => handleClickEmoji(data?.id)}
          />
          {clickedMessageForReactionId === data?.id && (
            <Box
              sx={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                top: '20px',
                backgroundColor: 'rgba(255, 255, 255)',
                padding: '10px',
                border: 'solid 1px #E4E4E4',
                borderRadius: '50px',
                zIndex: 1,
                maxWidth: 'fit-content',
              }}
              className="expandingComponent"
            >
              {emojies?.map((emoji, emoIndex) => (
                <Box
                  component="img"
                  src={`/icons/${emoji}.svg`}
                  alt={emoji}
                  sx={{
                    width: { xs: '25px', sm: '30px' },
                    height: { xs: '25px', sm: '30px' },
                    marginRight: emoIndex < 6 && '10px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px) scale(1.3)',
                    },
                  }}
                  key={emoIndex}
                  onClick={() => handleClickEmojiIcon(emoji)}
                />
              ))}
            </Box>
          )}
          <Box
            ref={handleComponentRef}
            onMouseDown={handleMouseDownSender}
            onMouseMove={handleMouseMoveSender}
            onMouseUp={handleMouseUpSender}
            onMouseLeave={handleMouseLeaveSender}
            onTouchStart={handleTouchStartSender}
            onTouchMove={handleTouchMoveSender}
            onTouchEnd={handleTouchEndSender}
            sx={{
              backgroundColor: '#FFEEE7',
              padding: '12px 16px',
              borderRadius: '10px 10px 0px 10px',
              position: 'relative',
              right: `${dragDistance}px`,
              transition: isDragging ? 'none' : 'left 0.3s ease-out',
            }}
          >
            {data?.contentType === 'text' ? (
              <Typography sx={{ whiteSpace: 'pre-line', fontSize: '16px' }}>
                {data?.content}
              </Typography>
            ) : data?.contentType === 'image' ? (
              <RenderMessageContent data={data} />
            ) : null}
            {selectedEmoji && (
              <Box
                sx={{
                  position: 'absolute',
                  right: '10px',
                  bottom: '-15px',
                  backgroundColor: 'rgba(255, 255, 255)',
                  width: '25px',
                  height: '25px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  boxShadow: '0px 0px 5px 2px #ccc',
                }}
              >
                <Box
                  component={'img'}
                  src={`/icons/${selectedEmoji}.svg`}
                  alt={'Reaction'}
                  sx={{ width: '15px', height: '15px', cursor: 'pointer' }}
                  onClick={() => setSelectedEmoji('')}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      marginBottom={'20px'}
      sx={{
        cursor: 'pointer',
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: '90%', sm: '70%' },
          display: 'flex',
          alignItems: 'flex-start',
          position: 'relative',
          justifyContent: 'flex-start',
          minWidth: '300px',
        }}
      >
        {!isSameSenderAsPrevious && (
          <Avatar
            data={selectedChatRoom}
            minWidth={40}
            height={40}
            mobile={'none'}
          />
        )}
        <Box
          ref={handleComponentRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          sx={{
            marginLeft: {
              xs: '0px',
              sm: isSameSenderAsPrevious ? '56px' : '16px',
            },
            backgroundColor: '#F1F1F1',
            padding: '12px 16px',
            borderRadius: '0px 10px 10px 10px',
            position: 'relative',
            left: `${dragDistance}px`,
            transition: isDragging ? 'none' : 'left 0.3s ease-out',
          }}
        >
          {data?.contentType === 'text' ? (
            <Typography sx={{ whiteSpace: 'pre-line', fontSize: '16px' }}>
              {data?.content}
            </Typography>
          ) : data?.contentType === 'image' ? (
            <RenderMessageContent data={data} />
          ) : null}
          {selectedEmoji && (
            <Box
              sx={{
                position: 'absolute',
                left: '10px',
                bottom: '-15px',
                backgroundColor: 'rgba(255, 255, 255)',
                width: '25px',
                height: '25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                boxShadow: '0px 0px 5px 2px #ccc',
              }}
            >
              <Box
                component={'img'}
                src={`/icons/${selectedEmoji}.svg`}
                alt={'Reaction'}
                sx={{ width: '15px', height: '15px', cursor: 'pointer' }}
                onClick={() => setSelectedEmoji('')}
              />
            </Box>
          )}
        </Box>
        <Box
          component={'img'}
          src="/icons/SmileyIcon.svg"
          sx={{
            width: '15px',
            height: '15px',
            marginLeft: '10px',
            // cursor:'pointer'
          }}
          onClick={() => handleClickEmoji(data?.id)}
        />
        {clickedMessageForReactionId === data?.id && (
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              top: '20px',
              right: '0px',
              backgroundColor: 'rgba(255, 255, 255)',
              padding: '10px',
              border: 'solid 1px #E4E4E4',
              borderRadius: '50px',
              width: '100%',
            }}
            className="expandingComponent"
          >
            {emojies?.map((emoji, emoIndex) => (
              <Box
                key={emoIndex}
                component="img"
                src={`/icons/${emoji}.svg`}
                alt={emoji}
                sx={{
                  width: { xs: '25px', sm: '30px' },
                  height: { xs: '25px', sm: '30px' },
                  marginRight: emoIndex < 6 && '10px',
                  transition: 'all 0.3s ease',
                  //   borderRadius: '50%',
                  '&:hover': {
                    transform: 'translateY(-5px) scale(1.3)',
                    // boxShadow: '0px 0px 5px 2px #ccc',
                  },
                }}
                onClick={() => handleClickEmojiIcon(emoji)}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RenderMessage;
