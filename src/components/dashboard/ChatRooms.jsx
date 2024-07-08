import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Avatar from '@/src/components/dashboard/ui-elements/Avatar';
import moment from 'moment';

const ChatRooms = ({ chatRoomState, setSelectedChatRoom }) => {
  const handleSelectChatRoom = (room) => setSelectedChatRoom(room);
  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={3}
      sx={{
        borderRight: 'solid 1px #E4E4E4',
        paddingTop: '10px',
      }}
    >
      {chatRoomState?.map((room, roomIndex) => (
        <Box
          padding={'7px 9px'}
          display={'flex'}
          alignItems={'flex-start'}
          key={roomIndex}
          sx={{
            backgroundColor: !room?.isRead && '#EDF7FF',
            marginBottom: '10px',
            cursor: 'pointer',
          }}
          onClick={() => handleSelectChatRoom(room)}
        >
          <Avatar data={room} />
          <Box marginLeft={'10px'} display={'flex'}>
            <Box>
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 400,
                  lineHeight: '18px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                }}
              >
                {room.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: 300,
                  lineHeight: '15px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  color: '#909394',
                }}
              >
                {room.lastMessage}
              </Typography>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Typography
                sx={{
                  fontSize: '10px',
                  fontWeight: 400,
                  lineHeight: '12.1px',
                  color: '#909394',
                  marginBottom: '5px',
                }}
              >
                {moment(room?.lastMessageTimestamp).format('hh:mm:A')}
              </Typography>
              {!room?.isRead && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '25px',
                    height: '25px',
                    borderRadius: '50%',
                    backgroundColor: '#126FAA',
                  }}
                >
                  <Typography sx={{ color: '#fff' }}>
                    {room.unReadMessages}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default ChatRooms;
