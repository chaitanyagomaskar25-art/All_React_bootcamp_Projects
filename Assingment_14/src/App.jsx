import React, { useEffect, useImperativeHandle, useRef } from "react";
import "./App.css";

const App = () => {
  const appRef = useRef(null);

  return (
    <div className="player-screen-container">
      <div className="player-card-wrapper">
        <div onDoubleClick={() => appRef.current.fullscreen()}>
          <VideoPlayer ref={appRef} />
        </div>
        <div className="player-controls-container">
          <div className="player-controls-group">
            <button onClick={() => appRef.current.play()}>Play</button>
            <button onClick={() => appRef.current.pause()}>Pause</button>
            <button
              onClick={() => {
                appRef.current.restart();
                appRef.current.play();
              }}
            >
              Restart
            </button>
          </div>

          <div className="player-controls-group">
            <button onClick={() => appRef.current.backword()}>⏪</button>
            <button onClick={() => appRef.current.forward()}>⏩</button>
          </div>

          <div className="player-controls-group">
            <button onClick={() => appRef.current.decrease()}>Decrease</button>
            <button onClick={() => appRef.current.increase()}>Increase</button>
            <button onClick={() => appRef.current.mute()}>mute</button>
          </div>

          <div className="player-controls-group">
            <button onClick={() => appRef.current.decreaseplaybackRate()}>
              Decrease speed
            </button>
            <button onClick={() => appRef.current.increaseplaybackRate()}>
              Increase speed
            </button>
            <button onClick={() => appRef.current.fullscreen()}>
              Full screen
            </button>
          </div>
        </div>
      </div>

      <div onLoad={() => appRef.current.progress()}></div>
    </div>
  );
};

const VideoPlayer = ({ ref }) => {
  const videoref = useRef(null);
  console.log(videoref);

  useImperativeHandle(ref, () => {
    return {
      play() {
        videoref.current.play();
      },
      pause() {
        videoref.current.pause();
      },
      forward() {
        videoref.current.currentTime += 10;
      },
      backword() {
        videoref.current.currentTime -= 10;
      },
      restart() {
        videoref.current.currentTime = 0;
      },
      increase() {
        videoref.current.volume = Math.min(videoref.current.volume + 0.1, 1);
      },

      decrease() {
        videoref.current.volume = Math.max(videoref.current.volume - 0.1, 0);
      },
      mute() {
        videoref.current.muted = !videoref.current.muted;
      },
      progressBar() {
        const time = videoref.current.currentTime;
        const duration = videoref.current.duration;
        (time / duration) * 100;
      },
      duration() {
        videoref.current.duration;
      },
      currentTime() {
        videoref.current.currentTime;
      },
      increaseplaybackRate() {
        videoref.current.playbackRate = Math.min(
          videoref.current.playbackRate + 0.1,
          2,
        );
        console.log(videoref.current.playbackRate);
      },
      decreaseplaybackRate() {
        videoref.current.playbackRate = Math.max(
          videoref.current.playbackRate - 0.1,
          0,
        );
        console.log(videoref.current.playbackRate);
      },
      fullscreen() {
        videoref.current.requestFullscreen();
      },
    };
  }, []);
  return (
    <>
      <video
        className="player-video-frame"
        ref={videoref}
        width="600"
        height="400"
      >
        <source src="./Teddy.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default App;
