'use client';
import { Box, Grid, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ChatRooms from '@/src/components/dashboard/ChatRooms';
import ChatRoom from '@/src/components/dashboard/ChatRoom';
import { chatRooms } from '@/src/constants/Chats';

const UserChat = () => {
  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState('Inbox');
  console.log(currentTab);
  const [chatRoomState, setChatRoomState] = useState([]);
  const [selectedChatRoom, setSelectedChatRoom] = useState({
    title: 'John Doe',
    isRead: false,
    lastMessage: 'Lorem ipsum dolor sit amet. Bibendum feugiat sapien....',
    avatar: 'avatar',
    lastMessageTimestamp: '2024-01-17T22:14:05',
    unReadMessages: 2,
  });

  useEffect(() => {
    function paintBackground() {
      // List of random dark color hex codes
      const darkColors = [
        '#2C3E50',
        '#D13E2E',
        '#800000',
        '#067511',
        '#6E025C',
        '#325BB3',
        '#144516',
        '#7C9E0B',
        '#03A69E',
        '#3091DB',
        // "#363636", "#434343", "#1C1C1C", "#2B2B2B", "#333333",
        // "#222222", "#1A1A1A", "#282828", "#191919", "#1B1B1B"
      ];

      // Generate a random index to select a color from the array
      const randomIndex = Math.floor(Math.random() * darkColors.length);
      // Return the randomly selected color
      return darkColors[randomIndex];
    }

    const tempData = [...chatRooms]?.map((room) => ({
      ...room,
      background: !room?.avatar && paintBackground(),
    }));
    setSelectedChatRoom(tempData[0]);
    setChatRoomState(tempData);
  }, [currentTab]);

  const handleChangeTab = (event, newValue) => {
    let tab = event?.target?.innerText.split(' ');
    if (tab.length > 1) {
      tab = tab.slice(0, -1).join(' ');
    } else {
      tab = tab.join(' ');
    }
    setCurrentTab(tab);

    setValue(newValue);
  };
  const tabs = [
    {
      label: 'Inbox',
    },
    {
      label: 'Archive',
    },
  ];

  return (
    <Box
      sx={{
        background: '#FFFFFF',
        border: 'solid 1px #E4E4E4',
        padding: '29px 0 0 0',
        borderRadius: '10px',
      }}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        sx={{
          borderBottom: 'solid 1px #E4E4E4',
          padding: '0 23px',
        }}
      >
        <Box>
          <Box
            component="img"
            src="/icons/RefreshIcon.svg"
            alt={'Refresh'}
            sx={{
              width: '20px',
              height: '18px',
              marginRight: '20px',
            }}
          />
        </Box>
        <Tabs
          variant="scrollable"
          value={value}
          onChange={handleChangeTab}
          aria-label="basic tabs example"
        >
          {tabs?.map(({ label, prop }, i) => (
            <Tab
              key={i}
              label={`${label}`}
              {...prop}
              disableRipple={true}
              sx={{
                textTransform: 'math-auto',
                fontSize: '18px',
                fontWeight: 400,
              }}
            />
          ))}
        </Tabs>
      </Box>
      <Grid
        container
        sx={{
          minHeight: '450px',
        }}
      >
        <ChatRooms
          chatRoomState={chatRoomState}
          setSelectedChatRoom={setSelectedChatRoom}
        />
        <ChatRoom selectedChatRoom={selectedChatRoom} />
      </Grid>
    </Box>
  );
};

export default UserChat;