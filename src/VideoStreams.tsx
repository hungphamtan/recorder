import { useRef } from "react";

import { useStreams } from "./contexts/streams";

import styles from "./VideoStreams.module.scss";

const VideoStreams = () => {
  const cameraRef = useRef<HTMLVideoElement | null>(null);
  const { streams } = useStreams();

  const video = cameraRef.current;

  const cameraStream = streams.find((stream) =>
    stream.getTracks().forEach((track) => track.kind === "camera")
  );

  if (cameraStream && video) {
    video.srcObject = cameraStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  }

  return (
    <div className={styles.container}>
      <video ref={cameraRef} autoPlay playsInline muted controls={false} />
    </div>
  );
};

export default VideoStreams;
