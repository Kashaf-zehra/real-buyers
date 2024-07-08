import Avatar from '@/src/components/dashboard/ui-elements/Avatar';
import { chatMessages } from '@/src/constants/Chats';
import { Box, Grid, Menu, MenuItem, Typography } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import RenderFileUploads from './RenderFileUploads';
import RenderMessage from './RenderMessage';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const AudioRecorder = dynamic(() => import('./AudioRecorder'), {
  ssrc: false,
});
const ChatRoom = ({ selectedChatRoom }) => {
  const [clickedMessageForReactionId, setClickedMessageForReactionId] =
    useState('');
  const [isReplying, setIsReplying] = useState(false);
  const [displayUploadOptions, setDisplayUploadOptions] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [replyingMessage, setReplyingMessage] = useState({});
  const [isSendingVoiceNote, setIsSendingVoiceNote] = useState(false);
  const messageFieldRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    event.stopPropagation();
  };
  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };
  const handleCancelReply = () => {
    setIsReplying(false);
    setReplyingMessage({});
  };

  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    setConversation([...chatMessages.conversation]);
  }, [chatMessages]);

  const uploadOptionsRef = useRef(null);

  const toggleVisibility = () => {
    setIsClosing(true);
    setTimeout(() => {
      setDisplayUploadOptions(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        uploadOptionsRef.current &&
        !uploadOptionsRef.current.contains(event.target)
      ) {
        toggleVisibility();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function generateRandomString(length) {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function generateString() {
    const part1 = generateRandomString(5);
    const part2 = generateRandomString(7);
    const part3 = generateRandomString(1);

    return `${part1}-${part2}-${part3}`;
  }

  const [fileInput, setFileInput] = useState([]);
  const [isSendingFiles, setIsSendingFiles] = useState(false);
  const handleFileInput = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files).map((data) => ({
      data,
      id: generateString(),
    }));
    setFileInput((ps) => [...ps, ...fileArray]);
    setDisplayUploadOptions(false);
    setIsSendingFiles(true);
  };

  const handleRemoveFile = (id) => {
    const tempFiles = fileInput?.filter((el) => el.id !== id);
    setFileInput(tempFiles);
  };

  const handleCancelSendingAudio = () => setIsSendingVoiceNote(false);

  const DashedLineText = ({ text }) => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Box sx={{ flex: 1, height: '1px', background: '#ccc' }} />
        <Typography
          variant="body1"
          style={{
            padding: '10px',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '17px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#979797',
          }}
        >
          {text}
        </Typography>
        <Box sx={{ flex: 1, height: '1px', background: '#ccc' }} />
      </Box>
    );
  };

  const [message, setMessage] = useState('');
  const handleInput = () => {
    setMessage(messageFieldRef.current.innerHTML);
  };
  const handleBlur = () => {
    setMessage(messageFieldRef.current.innerHTML);
  };

  const handleKeyPress = (e) => {
    if (
      e.key === 'ArrowUp' ||
      e.key === 'ArrowDown' ||
      e.key === 'ArrowRight' ||
      e.key === 'ArrowLeft'
    ) {
      if (message.trim() === '') {
        e.preventDefault();
      }
    } else if (e.key === 'Enter' && e.shiftKey) {
      setMessage((prevMessage) => prevMessage + '\n');
    } else if (e.key === 'Enter') {
      sendMessage();
      e.preventDefault();
    }
  };

  function generate15CharsDigitUniqueid() {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const sections = [4, 6, 3]; // Define the number of characters in each section

    const generateSection = (length) => {
      let section = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        section += characters[randomIndex];
      }
      return section;
    };

    const uniqueId = sections.map(generateSection).join('-');
    return uniqueId;
  }

  const sendMessage = () => {
    const tempConversation = [...conversation];
    const lastMessageDate = tempConversation[tempConversation.length - 1];
    if (isSendingFiles) {
      if (!fileInput.length) {
        return;
      } else if (
        lastMessageDate?.date === moment(new Date()).format('yyyy-MM-DD')
      ) {
        lastMessageDate?.messages?.push({
          timestamp: moment(new Date()).format('yyyy-MM-DDThh:mm:ss'),
          id: generate15CharsDigitUniqueid(),
          sender: 'You',
          content: fileInput,
          read: false,
          contentType: 'image',
        });
        setFileInput([]);
      } else {
        tempConversation.push({
          date: moment(new Date()).format('yyyy-MM-DD'),
          messages: [
            {
              timestamp: moment(new Date()).format('yyyy-MM-DDThh:mm:ss'),
              id: generate15CharsDigitUniqueid(),
              sender: 'You',
              content: fileInput,
              read: false,
              contentType: 'image',
            },
          ],
          read: false,
        });
        setFileInput([]);
      }
    } else {
      messageFieldRef.current.innerText = '';
      if (message.trim() === '') return;
      if (lastMessageDate?.date === moment(new Date()).format('yyyy-MM-DD')) {
        lastMessageDate?.messages.push({
          timestamp: moment(new Date()).format('yyyy-MM-DDThh:mm:ss'),
          id: generate15CharsDigitUniqueid(),
          sender: 'You',
          content: message.trim(),
          read: false,
          contentType: 'text',
        });
      } else {
        tempConversation.push({
          date: moment(new Date()).format('yyyy-MM-DD'),
          messages: [
            {
              timestamp: moment(new Date()).format('yyyy-MM-DDThh:mm:ss'),
              id: generate15CharsDigitUniqueid(),
              sender: 'You',
              content: message.trim(),
              read: false,
              contentType: 'text',
            },
          ],
          read: false,
        });
      }
      setConversation(tempConversation);
      // Clear the input after sending the message
      setMessage('');
      setFileInput([]);
      setIsSendingFiles(false);
    }
  };

  let prevSender = null;

  const conversationRef = useRef(null);
  const scrollToBottom = () => {
    if (conversationRef.current) {
      const lastComponent = conversationRef.current;
      const additionalOffset = 20; // Additional 20px to account for margin-bottom

      // Calculate total height including the additional offset
      const totalHeight =
        lastComponent.getBoundingClientRect().height + additionalOffset;

      // Scroll smoothly to the bottom of the last component
      lastComponent.parentElement.scrollTo({
        top:
          lastComponent.offsetTop +
          totalHeight -
          lastComponent.parentElement.clientHeight,
        behavior: 'smooth',
      });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  return (
    <Grid
      item
      xs={12}
      sm={8}
      md={9}
      sx={{
        padding: '10px 14px',
      }}
    >
      <Box
        sx={{
          border: '1px solid #E4E4E4',
          borderRadius: '5px',
          minHeight: '100%',
        }}
      >
        <Box
          sx={{
            padding: '12px 19px 8px',
            borderBottom: '1px solid #E4E4E4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Avatar data={selectedChatRoom} minWidth={'50px'} height={'50px'} />
            <Typography
              sx={{
                marginLeft: '5px',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '22px',
                letterSpacing: '0em',
                textAlign: 'left',
              }}
            >
              {selectedChatRoom?.title}
            </Typography>
          </Box>
          <Box sx={{ marginRight: '10px' }}>
            <Image
              width={3}
              height={15}
              src={'/icons/OptionsIcon.svg'}
              style={{ cursor: 'pointer' }}
              onClick={handleClick}
              alt={'dots'}
            />
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              sx={{ marginTop: '20px' }}
            >
              <MenuItem>Mark as unread</MenuItem>
              <MenuItem>Delete</MenuItem>
              <hr />
              <MenuItem>Block</MenuItem>
              <hr />
              <MenuItem>Archive</MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box
          sx={{
            padding: '12px 11px 8px 19px',
            maxHeight: '400px',
            overflowY: 'auto',
            borderBottom: 'solid 1px #E4E4E4',
          }}
        >
          <Box ref={conversationRef}>
            {conversation?.map((days, daysIndex) => {
              return (
                <Box key={daysIndex}>
                  <DashedLineText
                    text={moment(days?.date).format('dddd, D MMMM YYYY')}
                  />
                  {days?.messages?.map((message, msgIndex) => {
                    const isSameSenderAsPrevious =
                      prevSender === message.sender;
                    prevSender = message.sender;
                    //   return renderMessage(message, isSameSenderAsPrevious);
                    return (
                      <RenderMessage
                        key={msgIndex}
                        data={message}
                        selectedChatRoom={selectedChatRoom}
                        isSameSenderAsPrevious={isSameSenderAsPrevious}
                        clickedMessageForReactionId={
                          clickedMessageForReactionId
                        }
                        setClickedMessageForReactionId={
                          setClickedMessageForReactionId
                        }
                        setIsReplying={setIsReplying}
                        setReplyingMessage={setReplyingMessage}
                      />
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            padding: { xs: '5px', sm: '12px 11px 8px 19px' },
          }}
          display={'flex'}
          alignItems={
            isReplying || fileInput.length !== 0 ? 'flex-end' : 'center'
          }
        >
          <Box
            sx={{
              //   flex: 10,
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '90%', sm: '100%' },
              border: '1px solid #E4E4E4',
              borderRadius: { xs: '20px', sm: '32px' },
              padding: { xs: '7px', sm: '14px' },
            }}
          >
            {isReplying && (
              <Box
                className="reply-content-inbox"
                sx={{
                  //   backgroundColor: '#eee',
                  backgroundColor:
                    replyingMessage?.sender === 'You' ? '#FFEEE7' : '#eee',
                  padding: '10px',
                  marginBottom: '10px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component={'img'}
                    src="/icons/ReplyIcon.svg"
                    sx={{ width: '30px', height: '20px' }}
                    alt={'Reply'}
                  />
                  <Box
                    component={'img'}
                    src="/icons/CloseIcon.svg"
                    sx={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      cursor: 'pointer',
                    }}
                    alt={'Reply'}
                    onClick={handleCancelReply}
                  />
                </Box>
                <Box
                  sx={{
                    padding: '0 10px',
                  }}
                >
                  <Typography
                    sx={{
                      overflow: 'hidden', // Hide any overflowing content
                      textOverflow: 'ellipsis', // Show an ellipsis (...) if text overflows
                      whiteSpace: 'nowrap',
                      fontSize: '13px',
                    }}
                  >
                    {replyingMessage?.content}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: '11px', md: '14px', color: '#979797' },
                    }}
                  >{`${replyingMessage?.sender}, ${moment(replyingMessage?.timestamp).format('ddd, D MMM YYYY, hh:mm:a')}`}</Typography>
                </Box>
              </Box>
            )}

            <RenderFileUploads
              fileInput={fileInput}
              handleRemoveFile={handleRemoveFile}
            />
            <Box
              sx={{
                marginRight: { xs: '0px', sm: '16px' },
                position: 'relative',
              }}
              display={'flex'}
              alignItems={'center'}
            >
              {!isSendingVoiceNote && (
                <Box ref={uploadOptionsRef}>
                  <Box
                    sx={{
                      width: { xs: '20px', sm: '32px' },
                      minWidth: { xs: '20px', sm: '32px' },
                      height: { xs: '20px', sm: '32px' },
                      backgroundColor: '#9B9B9B',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                    className={[
                      'upload-files-icons',
                      displayUploadOptions
                        ? 'anition-upload-files-icon'
                        : 'remove-anition-upload-files-icon',
                    ].join(' ')}
                    onClick={() => setDisplayUploadOptions(true)}
                  >
                    <Box
                      component={'img'}
                      src="/icons/SendFileChatIcon.svg"
                      sx={{
                        width: { xs: '12px', sm: '18px' },
                        height: { xs: '12px', sm: '18px' },
                      }}
                      alt={'Send File'}
                    />
                    <input
                      type={'file'}
                      style={{ display: 'none' }}
                      id="file-input"
                      onChange={handleFileInput}
                      multiple
                    />
                  </Box>
                  {displayUploadOptions && (
                    <Box
                      sx={{
                        width: '100px',
                        border: '1px solid #ccc',
                        position: 'absolute',
                        backgroundColor: '#fff',
                        bottom: '35px',
                        borderRadius: '5px',
                      }}
                      className={
                        displayUploadOptions && !isClosing
                          ? 'draw-in-animation'
                          : 'draw-out-animation'
                      }
                    >
                      <label htmlFor="file-input">
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '10px',
                            marginTop: '10px',
                            paddingX: '10px',
                            cursor: 'pointer',
                          }}
                        >
                          <Box
                            sx={{
                              width: '20px',
                              height: '20px',
                              marginRight: '5px',
                            }}
                            alt={'Image'}
                            component={'img'}
                            src={'/icons/ImageIcon.svg'}
                          />
                          <Typography>Image</Typography>
                        </Box>
                      </label>
                      <label htmlFor="file-input">
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '10px',
                            paddingX: '10px',
                            cursor: 'pointer',
                          }}
                        >
                          <Box
                            sx={{
                              width: '20px',
                              height: '20px',
                              marginRight: '5px',
                            }}
                            alt={'File'}
                            component={'img'}
                            src={'/icons/FileIcon.svg'}
                          />
                          <Typography>File</Typography>
                        </Box>
                      </label>
                      <Box
                        onClick={() => {
                          setDisplayUploadOptions(false);
                          setIsSendingVoiceNote(true);
                        }}
                        sx={{
                          // display: 'flex',
                          display: { xs: 'none', md: 'none' },
                          alignItems: 'center',
                          marginBottom: '10px',
                          paddingX: '10px',
                          cursor: 'pointer',
                        }}
                      >
                        <Box
                          sx={{
                            width: '20px',
                            height: '20px',
                            marginRight: '5px',
                          }}
                          alt={'Mic'}
                          component={'img'}
                          src={'/icons/MicIcon.svg'}
                        />
                        <Typography>Voice</Typography>
                      </Box>
                    </Box>
                  )}
                </Box>
              )}
              <Box sx={{ padding: '0 10px', width: '100%' }}>
                {isSendingVoiceNote ? (
                  <AudioRecorder
                    handleCancelSendingAudio={handleCancelSendingAudio}
                  />
                ) : (
                  <Box
                    role={'none'}
                    className={'contentEditable'}
                    contentEditable
                    onInput={handleInput}
                    onKeyDown={handleKeyPress}
                    aria-label="Type your message..."
                    aria-placeholder="Type your message..."
                    ref={messageFieldRef}
                    onBlur={handleBlur}
                    onFocus={() => messageFieldRef.current.focus()}
                    suppressContentEditableWarning={true}
                  >
                    {message.trim() === '' &&
                      document?.activeElement !== messageFieldRef.current && (
                        <div className={'placeholder'}>Write message</div>
                      )}
                  </Box>
                )}
              </Box>
              <Box
                src="/icons/SendMessageIcon.svg"
                component={'img'}
                alt={'Send Message'}
                sx={{
                  marginLeft: { xs: '5px', sm: '10px' },
                  marginRight: { xs: '5px', sm: '10px' },
                  width: { xs: '20px', sm: '36px' },
                  height: { xs: '20px', sm: '36px' },
                  display: 'none',
                  '@media (min-width: 280px) and (max-width: 1526px)': {
                    display: 'flex',
                  },
                }}
                onClick={sendMessage}
              />
            </Box>
          </Box>
          <Box
            src="/icons/SendMessageIcon.svg"
            component={'img'}
            alt={'Send Message'}
            sx={{
              marginLeft: { xs: '5px', sm: '10px' },
              marginRight: { xs: '5px', sm: '10px' },
              width: { xs: '20px', sm: '36px' },
              height: { xs: '20px', sm: '36px' },
              '@media (min-width: 280px) and (max-width: 1526px)': {
                display: 'none',
              },
            }}
            onClick={sendMessage}
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default ChatRoom;
