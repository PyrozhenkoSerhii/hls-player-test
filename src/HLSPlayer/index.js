import * as React from "react";
import * as Hls from "hls.js";

import { WithLoaderWrapper, Video } from "./styled";

const { ErrorTypes } = Hls;
const { useRef, useEffect, useMemo } = React;

type TProps = {
  url: string;
}

export const HLSPlayerComponent = ({ url }: TProps): JSX.Element => {
  const videoRef = useRef(null);

  const hls = useMemo(() => new Hls({ capLevelToPlayerSize: true }), []);

  useEffect(() => {
    if (hls && url && videoRef.current) {
      hls.loadSource(url);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.type === ErrorTypes.NETWORK_ERROR) {
          setTimeout(() => {
            hls.loadSource(url);
            hls.startLoad();
          }, 1000);
        }
      });
    }
  }, [hls, url]);

  return (
    <WithLoaderWrapper>
      <Video ref={videoRef} muted controls playsInline />
    </WithLoaderWrapper>
  );
};
