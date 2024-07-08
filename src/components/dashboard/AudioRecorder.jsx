import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioRecorder = ({ handleCancelSendingAudio }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [waveform, setWaveform] = useState(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const waveFormRef = useRef(null);

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingDuration((ps) => {
          setTotalDuration(ps + 1);
          return ps + 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRecording]);

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: waveFormRef.current,
      waveColor: '#ccc',
      progressColor: '#FF631C',
      cursorColor: '#7AE3C3',
      barWidth: 2,
      height: 10,
      responsive: true,
    });
    setWaveform(waveSurfer);
    waveSurfer.on('finish', () => {
      setIsPlaying(false);
    });
    return () => {
      waveSurfer.destroy();
    };
  }, []);

  useEffect(() => {
    if (waveform) handleStartRecording();
  }, [waveform]);

  const handleStartRecording = () => {
    setRecordingDuration(0);
    setCurrentPlaybackTime(0);
    setTotalDuration(0);
    setIsRecording(true);
    navigator?.mediaDevices
      ?.getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioRef.current.srcObject = stream;

        const chunks = [];
        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
          const audioURL = URL.createObjectURL(blob);
          const audio = new Audio(audioURL);
          setRecordedAudio(audio);
          waveform.load(audioURL);
        };
        mediaRecorder.start();
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  const handleStopRecording = () => {
    setIsRecording(false);
    if (mediaRecorderRef?.current && isRecording) {
      mediaRecorderRef?.current?.stop();
      setIsRecording(false);
      waveform?.stop();
      const audioChunks = [];
      mediaRecorderRef?.current?.addEventListener('dataavailable', (event) => {
        audioChunks?.push(event.data);
      });
      mediaRecorderRef?.current?.addEventListener('stop', () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' });
        const audioFile = new File([audioBlob], { type: 'recording.mp3' });
        console.log(audioFile);
      });
    }
  };

  useEffect(() => {
    if (recordedAudio) {
      const updatePlaybackTime = () => {
        setCurrentPlaybackTime(recordedAudio.currentTime);
      };
      recordedAudio.addEventListener('timeupdate', updatePlaybackTime);
      return () => {
        recordedAudio.removeEventListener('timeupdate', updatePlaybackTime);
      };
    }
  }, [recordedAudio]);

  const handlePlayRecording = () => {
    if (recordedAudio) {
      waveform.stop();
      waveform.play();
      recordedAudio?.play();
      setIsPlaying(true);
    }
  };
  const handlePauseRecording = () => {
    waveform?.stop();
    recordedAudio?.pause();
    setIsPlaying(false);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box
      className="w-full-justify-end flex items-center text-2xl"
      sx={{ maxHeight: '32px' }}
    >
      <Box className="pt-1">
        <Box
          component={'img'}
          sx={{
            minWidth: '20px',
            minHeight: '20px',
          }}
          src="/icons/TrashIcon.svg"
          onClick={handleCancelSendingAudio}
          alt={'Remove'}
          className="text-panel-header-icon"
        />
      </Box>
      <Box className="bg-search-input-container-background mx-4 flex items-center justify-center rounded-full px-4 py-2 text-lg text-white drop-shadow-lg">
        {isRecording ? (
          <Box className="anumate-pulse 2-60 text-center text-red-500">
            Recording <span>{formatTime(recordingDuration)}s</span>
          </Box>
        ) : (
          <Box className="">
            {recordedAudio && (
              <>
                {!isPlaying ? (
                  <Box
                    component={'img'}
                    src="/icons/PlayIcon.svg"
                    alt={'Play'}
                    onClick={handlePlayRecording}
                    sx={{
                      minWidth: '20px',
                      minHeight: '20px',
                    }}
                  />
                ) : (
                  <Box
                    component={'img'}
                    src="/icons/PauseIcon.svg"
                    alt={'Pause'}
                    onClick={handlePauseRecording}
                    sx={{
                      minWidth: '20px',
                      minHeight: '20px',
                    }}
                  />
                )}
              </>
            )}
          </Box>
        )}
        <Box
          style={{ width: '100px' }}
          ref={waveFormRef}
          hidden={isRecording}
        />
        {recordedAudio && isPlaying && (
          <span>{formatTime(currentPlaybackTime)}</span>
        )}
        {recordedAudio && !isPlaying && (
          <span>{formatTime(totalDuration)}</span>
        )}
        <Box>
          <audio ref={audioRef} hidden>
            <track kind="captions" srclang="en" />
          </audio>
        </Box>
      </Box>

      <Box className="mr-4">
        {!isRecording ? (
          <Box
            component={'img'}
            src="/icons/MicIcon.svg"
            sx={{
              minWidth: '20px',
              minHeight: '20px',
            }}
            alt={'Mic'}
            onClick={handleStartRecording}
          />
        ) : (
          <Box
            component={'img'}
            src="/icons/StopIcon.svg"
            sx={{
              minWidth: '10px',
              minHeight: '10px',
            }}
            alt={'Stop'}
            onClick={handleStopRecording}
          />
        )}
      </Box>
    </Box>
  );
};

export default AudioRecorder;
